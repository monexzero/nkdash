import _ from 'lodash';

export default function _ellipsisStr(str, len=5) {
  if(!_.isString(str)) {
    return ''
  }

  if(str.length <= len) {
    return str;
  }

  return str.substring(0, len) + '…';
}
