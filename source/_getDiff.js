import _ from 'lodash';
import _isNumber from './_isNumber';

export default function _getDiff(array, criterion) {
  if(!_.isArray(array)) {
    return;
  }
  const noCriterion = !criterion;

  criterion = criterion || _.head(_.compact(array));
  return _.map(array, (val) => {
    if(!_isNumber(val)) {
      return null;
    }

    const diff = val - criterion;
    if(noCriterion) {
      criterion = val;
    }
    return diff;
  });
}
