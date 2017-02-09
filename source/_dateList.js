import _ from 'lodash';

export default function _dateList(startDate, endDate) {
  const dateList = [];
  let _date = _.clone(startDate);
  while(_date <= endDate) {
    dateList.push(moment(_.clone(_date)));
    _date.setDate(_date.getDate() + 1);
  }
  return dateList;
}
