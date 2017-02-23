'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _xYearsAgo;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _xYearsAgo(x) {
  if (!_lodash2.default.isInteger(x)) {
    return;
  }

  return (0, _moment2.default)().subtract(x, 'year');
}