'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getDiff;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _isNumber2 = require('./_isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getDiff(array, criterion) {
  if (!_lodash2.default.isArray(array)) {
    return;
  }
  var noCriterion = !criterion;

  criterion = criterion || _lodash2.default.head(_lodash2.default.compact(array));
  return _lodash2.default.map(array, function (val) {
    if (!(0, _isNumber3.default)(val)) {
      return null;
    }

    var diff = val - criterion;
    if (noCriterion) {
      criterion = val;
    }
    return diff;
  });
}