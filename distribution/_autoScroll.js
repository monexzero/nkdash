'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _autoScroll;

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _autoScroll(selector) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1200;

  var target = document.querySelector(selector);
  if (!target) {
    return;
  }

  var position = target.offsetTop;
  var scroll = _reactScroll2.default.animateScroll;
  scroll.scrollTo(position, { smooth: true, duration: duration });
}