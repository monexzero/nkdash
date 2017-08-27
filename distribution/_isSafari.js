"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isSafari;

var _isChrome2 = require("./_isChrome");

var _isChrome3 = _interopRequireDefault(_isChrome2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isSafari() {
  var ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/safari/i)) && !(0, _isChrome3.default)();
}