import _ from 'lodash';

export default function _isEmptyArray(array){
  return _.isArray(array) && _.isEmpty(array);
}
