'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isDate;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isDate(date) {
  return date instanceof Date && !_lodash2.default.isNaN(date.valueOf());
}