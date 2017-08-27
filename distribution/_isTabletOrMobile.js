"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isTabletOrMobile;
function _isTabletOrMobile() {
  var ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i));
}