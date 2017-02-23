import _ from 'lodash';

export default function _isNotEmptyStr(str){
  return _.isString(str) && str.length >= 1;
}
