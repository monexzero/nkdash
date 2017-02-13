'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _containsEmoji;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _emojiRegex = require('emoji-regex');

var _emojiRegex2 = _interopRequireDefault(_emojiRegex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _containsEmoji(str) {
  if (!_lodash2.default.isString(str)) {
    return false;
  }
  return (0, _emojiRegex2.default)().test(str);
}