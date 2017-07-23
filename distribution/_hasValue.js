'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _hasValue;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _hasValue(val) {
  return !_lodash2.default.includes([false, null, undefined], val);
}