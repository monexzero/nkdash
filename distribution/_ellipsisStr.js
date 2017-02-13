'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _ellipsisStr;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _ellipsisStr(str) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  if (!_lodash2.default.isString(str)) {
    return '';
  }

  if (str.length <= len) {
    return str;
  }

  return str.substring(0, len) + '…';
}