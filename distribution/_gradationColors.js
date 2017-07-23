'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _gradationColors;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _toRGB2 = require('./_toRGB');

var _toRGB3 = _interopRequireDefault(_toRGB2);

var _toColorCode2 = require('./_toColorCode');

var _toColorCode3 = _interopRequireDefault(_toColorCode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _gradationColors(from, to, count) {
  if (!_lodash2.default.isString(from) || !_lodash2.default.isString(to)) {
    return false;
  }
  count = count || 10;
  if (count < 3) {
    return _lodash2.default.take([from, to], count);
  }

  from = (0, _toRGB3.default)(from);
  to = (0, _toRGB3.default)(to);

  var gradations = _lodash2.default.map(_lodash2.default.range(1, count - 1), function (i) {
    var rgb = {
      r: from.r + (to.r - from.r) / count * i,
      g: from.g + (to.g - from.g) / count * i,
      b: from.b + (to.b - from.b) / count * i
    };
    return (0, _toColorCode3.default)(rgb);
  });
  return _lodash2.default.flatten([(0, _toColorCode3.default)(from), gradations, (0, _toColorCode3.default)(to)]);
}