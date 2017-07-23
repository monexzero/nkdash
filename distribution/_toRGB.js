'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toRGB;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// colorCode: #ffeeff の形式
function _toRGB(colorCode) {
  if (!_lodash2.default.isString(colorCode) || colorCode.length != 7) {
    return false;
  }
  return {
    r: _lodash2.default.parseInt(colorCode.substring(1, 3), 16),
    g: _lodash2.default.parseInt(colorCode.substring(3, 5), 16),
    b: _lodash2.default.parseInt(colorCode.substring(5, 7), 16)
  };
}