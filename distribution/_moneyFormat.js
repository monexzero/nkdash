'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _moneyFormat;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _moneyFormat(val) {
  if (!_lodash2.default.isInteger(val)) {
    return null;
  }

  return String(val).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}