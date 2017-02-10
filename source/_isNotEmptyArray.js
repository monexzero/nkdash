import _ from 'lodash';

export default function _isNotEmptyArray(array){
  return _.isArray(array) && !_.isEmpty(array);
}
