'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isEmptyArray;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isEmptyArray(array) {
  return _lodash2.default.isArray(array) && _lodash2.default.isEmpty(array);
}