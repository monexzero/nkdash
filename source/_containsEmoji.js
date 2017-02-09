import _ from 'lodash';

export default function _containsEmoji(str) {
  if(!_.isString(str)) {
    return false;
  }

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
