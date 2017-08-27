"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isFireFox;
function _isFireFox() {
  var ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/firefox/i));
}