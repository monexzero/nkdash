"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _containsSpecialChar;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _containsSpecialChar(str) {
  var spChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?".split("");
  return !_lodash2.default.isEmpty(_lodash2.default.intersection(spChars, str.split('')));
}