'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isFullWidth;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isFullWidth(c) {
  return !!c.match(/^[^\x01-\x7E\xA1-\xDF]+$/);
}