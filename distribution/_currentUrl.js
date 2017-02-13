"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _currentUrl;
function _currentUrl() {
  var noQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!document || !document.URL) {
    return null;
  }

  return noQuery ? document.URL.replace(/\?.*$/, "") : document.URL;
}