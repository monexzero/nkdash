'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _dateList;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _isDate2 = require('./_isDate');

var _isDate3 = _interopRequireDefault(_isDate2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _dateList(startDate, endDate) {
  if (!(0, _isDate3.default)(startDate) || !(0, _isDate3.default)(endDate)) {
    return [];
  }
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);

  endDate.setHours(23);
  endDate.setMinutes(59);
  endDate.setSeconds(59);
  var dateList = [];
  var _date = _lodash2.default.clone(startDate);
  while (_date <= endDate) {
    dateList.push((0, _moment2.default)(_lodash2.default.clone(_date)));
    _date.setDate(_date.getDate() + 1);
  }
  return dateList;
}