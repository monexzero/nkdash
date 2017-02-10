import _ from 'lodash';

export default function _compareDeep(v1, v2) {

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
      if(!_compareDeep(value, array2[i]))
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
      if(!_compareDeep(value, v2[key]))
        noErr = false;
    })
    return noErr;

    // その他は普通に比較
  }else {
    return v1 === v2;
  }
}
