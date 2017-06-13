"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _randomStr;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _randomStr() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charsetArray = charset.split("");
  var randomStr = _lodash2.default.map(_lodash2.default.range(len), function (i) {
    return _lodash2.default.sample(charsetArray);
  });
  return randomStr.join("");
}