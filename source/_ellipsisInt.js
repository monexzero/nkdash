export default function _ellipsisInt(val) {
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
  }else if(val < 1000000000){

    /**
     * 1000000 で割り切れる場合は小数点以下つけない (ex. 5m)
     * 割り切れない場合は, 小数点以下 1 桁までをつけて返す (ex. 5.1m)
     */
    if(val % 1000000 === 0) {
      return (val / 1000000) + ' m';
    }
    return (val / 1000000).toFixed(1) + ' m';
  }else {

    /**
     * 1000000000 で割り切れる場合は小数点以下つけない (ex. 5m)
     * 割り切れない場合は, 小数点以下 1 桁までをつけて返す (ex. 5.1m)
     */
    if(val % 1000000000 === 0) {
      return (val / 1000000000) + ' b';
    }
    return (val / 1000000000).toFixed(1) + ' b';
  }

}
