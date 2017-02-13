'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _pluck;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _pluck(collection, name) {

  if (!_lodash2.default.isArray(collection) || !_lodash2.default.isString(name)) {
    return null;
  }

  return _lodash2.default.map(collection, function (obj) {
    return obj[name];
  });
}