'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNotEmptyArray;

require('lodash');

function _isNotEmptyArray(array) {
  return _.isArray(array) && !_.isEmpty(array);
}