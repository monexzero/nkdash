'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNumber;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isNumber(str) {
  if (_lodash2.default.isInteger(str)) {
    return true;
  }
  return (/^[1-9][0-9]*$/.test(str) || str == 0
  );
}