import _ from 'lodash';
import _isNumber from './_isNumber';

export default function _getDiff(array) {
  if(!_.isArray(array)) {
    return;
  }

  let previous = 0
  return _.map(array, (val) => {
    if(!_isNumber(val)) {
      return null;
    }

    const diff = val - previous;
    previous = val;
    return diff;
  });
}
