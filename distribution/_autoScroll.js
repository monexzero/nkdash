'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _autoScroll;

var _reactScroll = require('react-scroll');

function _autoScroll(selector) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1200;

  var target = document.querySelector(selector);
  if (!target) {
    return;
  }

  var position = target.offsetTop;
  _reactScroll.animateScroll.scrollTo(position, { smooth: true, duration: duration });
}