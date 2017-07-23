import _ from 'lodash';

// colorCode: #ffeeff の形式
export default function _toRGB(colorCode) {
  if(!_.isString(colorCode) || colorCode.length != 7) {
    return false;
  }
  return {
    r:  _.parseInt(colorCode.substring(1, 3), 16),
    g:  _.parseInt(colorCode.substring(3, 5), 16),
    b:  _.parseInt(colorCode.substring(5, 7), 16),
  };  
}
