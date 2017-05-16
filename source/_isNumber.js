import _ from 'lodash';

export default function _isNumber(str) {
  if(_.isInteger(str)) {
      return true;
  }
  return /^[1-9][0-9]*$/.test(str) || str == '0';
}
