"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isEdge;
function _isEdge() {
  var ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/edge/i));
}