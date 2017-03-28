"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isFullWidth;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isFullWidth(str) {
  var isFull = true;
  _lodash2.default.each(str.split(""), function (c) {
    var isFullWidth = !!c.match(/^[^\x01-\x7E\xA1-\xDF]+$/);
    if (!isFullWidth) {
      isFull = false;
      return;
    }
  });
  return isFull;
}