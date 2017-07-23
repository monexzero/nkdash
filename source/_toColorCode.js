import _ from 'lodash';

// rgb: {r: 244, g: 19, b: 12} の形式
export default function _toColorCode(rgb) {
  if(!_.isObject(rgb)) {
    return false;
  }
  const colorCodes = {};
  _.each(rgb, (val, key) => {
    val = _.parseInt(val).toString(16);
    colorCodes[key] = val.length == 1 ? `0${val}` : val;
  })
  return `#${[colorCodes.r, colorCodes.g, colorCodes.b].join("")}`;
}
