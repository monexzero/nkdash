import _ from 'lodash';

export default function _isDate(date) {
  return date instanceof Date && !_.isNaN(date.valueOf())
}
