import _ from 'lodash';
import moment  from 'moment';
import _isDate from './_isDate';

export default function _dateList(startDate, endDate) {
  if(!_isDate(startDate) || !_isDate(endDate)) {
    return [];
  }
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);

  endDate.setHours(23);
  endDate.setMinutes(59);
  endDate.setSeconds(59);
  const dateList = [];
  let _date = _.clone(startDate);
  while(_date <= endDate) {
    dateList.push(moment(_.clone(_date)));
    _date.setDate(_date.getDate() + 1);
  }
  return dateList;
}
