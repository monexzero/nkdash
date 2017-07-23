"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toColorCode;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// rgb: {r: 244, g: 19, b: 12} の形式
function _toColorCode(rgb) {
  if (!_lodash2.default.isObject(rgb)) {
    return false;
  }
  var colorCodes = {};
  _lodash2.default.each(rgb, function (val, key) {
    val = _lodash2.default.parseInt(val).toString(16);
    colorCodes[key] = val.length == 1 ? "0" + val : val;
  });
  return "#" + [colorCodes.r, colorCodes.g, colorCodes.b].join("");
}