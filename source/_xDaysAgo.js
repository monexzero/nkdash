import _ from 'lodash';
import moment from 'moment';

export default function _xDaysAgo(x) {
  if(!_.isInteger(x)) {
    return;
  }

  return moment().subtract(x, 'day');
}
