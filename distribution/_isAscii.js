"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isASCII;
function isASCII(str) {
  return (/^[\x00-\x7F]*$/.test(str)
  );
}