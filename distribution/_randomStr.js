"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _randomStr;
function _randomStr() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  return Math.random().toString(36).slice(-len);
}