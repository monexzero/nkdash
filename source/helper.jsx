/* 各 module で共通して使用するようなメソッドを定義する */
import _ from 'lodash';
import moment from 'moment';
import Scroll from 'react-scroll';
import areIntlLocalesSupported from 'intl-locales-supported';

import AwsCognito from 'objects/awsCognito';
import ApiError   from 'objects/apiError';

import config         from 'config';
import {removeCookie} from 'utils/cookie';
import {PASSWORD_MAX, PASSWORD_MIN} from 'constants/limits';
import {TOKEN} from 'constants/keynames';

// enter キーが押されたか否かを返す
export const keyUpEnter = (keyCode) => {
  return keyCode == 13;
}

// email アドレスの format として正しい否かを返す
export const isValidEmail = (email) => {
  return (
    _.isString(email) && 
    !_.isNull(email.match(/.+@.+\..+/))
  );
}

// password の format として正しいか否かを返す
export const isValidPassword = (password) => {
  return (
    _.isString(password) && 
    !password.match(/[^A-Za-z0-9]+/) &&
    password.length >= PASSWORD_MIN &&
    password.length <= PASSWORD_MAX
  );
}

// 1 文字以上の文字列であるか否かを返す
export const isNotEmptyString = (str) => {
  return _.isString(str) && str.length >= 1;
}

// 1 つ以上の要素をもった配列であるか否かを返す
export const isNotEmptyArray = (array) => {
  return _.isArray(array) && !_.isEmpty(array);
}

// 比較関数
// 比較する値が array or object の場合は再帰的に実行して比較する
export const compareDeep = (v1, v2) => {
  // ２つの変数の型を確認
  if(typeof v1 !== typeof v2)
    return false;

  // array の場合
  if(_.isArray(v1)){
    if(v1.length != v2.length)
      return false;
    // ソート
    const array1 = _.sortBy(v1);
    // ソート
    const array2 = _.sortBy(v2);

    let noErr = true;
    _.each(array1, function(value, i){
      if(!compareDeep(value, array2[i]))
        noErr = false;
    })
    return noErr;

    // オブジェクトの場合
  }else if(_.isObject(v1)){
    // key の length が違うか, keys に差異があれば false
    if(
      (_.keys(v1).length != _.keys(v2).length) ||
      (_.difference(_.keys(v1), _.keys(v2)).length > 0)
    ){
      return false;
    }

    let noErr = true;
    _.each(v1, function(value, key){
      if(!compareDeep(value, v2[key]))
        noErr = false;
    })
    return noErr;

    // その他は普通に比較
  }else {
    return v1 === v2;
  }
}

// logout 処理
// 1. cognito の session 削除
// 2. login 画面にリダイレクト
export const logout = () => {
  const cognitoUser = new AwsCognito();
  if(cognitoUser.getCognitoUser()) {
    cognitoUser.signOut();
  }
  removeCookie(TOKEN);
  window.location.href = config.ROOT_PATH + '/login';
}

export const autoScroll = (selector, duration=1200) => {
  const target   = document.querySelector(selector);
  if(_.isNull(target)) {
    return;
  }

  const position = target.offsetTop;

  const scroll = Scroll.animateScroll;
  scroll.scrollTo(position, {smooth: true, duration});

}

// x 週間前の日付を返す
export const xWeekAgo = (x) => {
  return moment().subtract(x, 'week');
}

// x 年前の日付を返す
export const xYearAgo = (x) => {
  return moment().subtract(x, 'year');
}

export const ellipsisInt = (val) => {
  if(!_.isInteger(val)) {
    return null;
  }

  if(val < 1000) {
    return String(val);
  }else if(val < 1000000) {

    /**
     * 1000 で割り切れる場合は小数点以下つけない (ex. 5k)
     * 割り切れない場合は, 小数点以下 1 桁までをつけて返す (ex. 5.1k)
     */
    if(val % 1000 === 0) {
      return (val / 1000) + ' k';
    }
    return (val / 1000).toFixed(1) + ' k';
  }else {

    /**
     * 1000000で割り切れる場合は小数点以下つけない (ex. 5m)
     * 割り切れない場合は, 小数点以下 1 桁までをつけて返す (ex. 5.1m)
     */
    if(val % 1000000 === 0) {
      return (val / 1000000) + ' m';
    }
    return (val / 1000000).toFixed(1) + ' m';
  }
}

// n 桁のランダム文字列を返す
export const getRandomString = (len=10) => {
  return Math.random().toString(36).slice(-len);
}

export const getEllipsisStr = (str, len=5) => {
  if(!_.isString(str)) {
    return ''
  }

  if(str.length <= len) {
    return str;
  }

  return str.substring(0, len) + '…';
}

// ['ねこ', "猫"] を "#ねこ #猫" のように convert して返す
export const toHashtagStr = (tags) => {
  if(!_.isArray(tags)) {
    return ''
  }

  return _.map(tags, (tag) => {return '#' + tag;}).join(' ');
}

export const pluck = (collection, name) => {
  if(!_.isArray(collection)) {
    return null;
  }

  return _.map(collection, (obj) => {
    return obj[name];
  })
}

export const moneyFormat = (intVal) => {
  if(!_.isInteger(intVal)) {
    return null;
  }

  return String(intVal).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

export const getDateTimeFormat = () => {
  if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
    return global.Intl.DateTimeFormat;
  } else {
    const IntlPolyfill = require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/ja.js');
    return IntlPolyfill.DateTimeFormat;
  }
}

export const timestampAsFilename = () => {
  return moment().format("YYYYMMDDHHmm");
}

export const generateTimeSeriesCsv = (indicator, subjects) => {
  const csvHeaderItems = ["日付"];
  const csvRows = []; 

  _.each(subjects, (subject) => {
    csvHeaderItems.push(`${subject.getName()}/${indicator.namekana}`);
    _.each(subject.getTimeSeries(indicator.name), (timeSerie, i) => {
      const value = '"' + (timeSerie.value || '') + '"';
      if(_.isArray(csvRows[i])) {
        csvRows[i].push(value);
      }else {
        csvRows[i] = [timeSerie.date, value];
      }   
    })  
  })

  return {
    headerItems: csvHeaderItems,
    rows: csvRows,
  };
}

export const getDateList = (startDate, endDate) => {
  const dateList = [];
  let _date = _.clone(startDate);
  while(_date <= endDate) {
    dateList.push(moment(_.clone(_date)));
    _date.setDate(_date.getDate() + 1);
  }
  return dateList;
}

export const getAccountTypeKana = (accountType) => {
  switch (accountType) {
    case 'owned':
      return '自社';
    case 'observed':
      return '分析対象';
    default:
      return '';
  }
}

export const isApiError = (obj) => {
  return obj instanceof ApiError;
}

// 半角または全角スペースが入っていれば true を返す
export const containsSpace = (str) => {
  return _.includes(str, ' ') || _.includes(str, '　');
}

// 絵文字が入っていれば true を返す
export const containsEmoji = (str) => {
  const ranges = [
    '\ud83c[\udf00-\udfff]',
    '\ud83d[\udc00-\ude4f]',
    '\ud83d[\ude80-\udeff]',
    '\ud7c9[\ude00-\udeff]',
    '[\u2600-\u27BF]',
  ];
  const ex = new RegExp(ranges.join('|'), 'g');
  return ex.test(str);
}

export const containsSpecialChar = (str) => {
  const spChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?".split("");
  return !_.isEmpty(_.intersection(spChars, str.split('')));
}

export const getInstaAuthUrl = (redirectUri) => {
  const instaClientId = config.INSTA_API_CLIENT_ID;
  const authUrl = 'https://api.instagram.com/oauth/authorize/?' +
  `client_id=${instaClientId}&` + 
    `redirect_uri=${redirectUri}` +
    '&response_type=code' +
    '&scope=relationships+likes+comments+basic+follower_list+public_content';
  return authUrl;
}

export const currentUrl = () => {
  return document.URL.replace(/\?.*$/,"");
};

// 引数の datetime は YYYY-MM-DD HH:mm:DD を想定
export const toJST = (datetime) => {
  datetime = datetime.replace(' ', 'T') + 'Z';
  return moment(datetime).tz('Asia/Tokyo');
};

