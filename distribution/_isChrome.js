"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isChrome;

var _isEdge2 = require("./_isEdge");

var _isEdge3 = _interopRequireDefault(_isEdge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isChrome() {
  var ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/chrome/i)) && !(0, _isEdge3.default)();
}