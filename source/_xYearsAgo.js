import _ from 'lodash';
import moment from 'moment';

export default function _xYearsAgo(x) {
  if(!_.isInteger(x)) {
    return;
  }

  return moment().subtract(x, 'year');
}
