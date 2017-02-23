'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNotEmptyStr;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isNotEmptyStr(str) {
  return _lodash2.default.isString(str) && str.length >= 1;
}