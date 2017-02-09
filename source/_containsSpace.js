import _ from 'lodash';

export default function _containsSpace(str) {
  if(!_.isString(str)) {
    return false;
  }

  return / |　/.test(str);
}
