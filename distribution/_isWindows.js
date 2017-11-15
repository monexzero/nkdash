"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isWindows;
function _isWindows() {
  var plt = navigator.platform.toLowerCase();
  return (/^win/.test(plt)
  );
}