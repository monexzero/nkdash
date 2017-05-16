'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = _compareDeep;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _compareDeep(v1, v2) {

  // ２つの変数の型を確認
  if ((typeof v1 === 'undefined' ? 'undefined' : _typeof(v1)) !== (typeof v2 === 'undefined' ? 'undefined' : _typeof(v2))) return false;

  // array の場合
  if (_lodash2.default.isArray(v1)) {
    if (v1.length != v2.length) return false;
    // ソート
    var array1 = _lodash2.default.sortBy(v1);
    // ソート
    var array2 = _lodash2.default.sortBy(v2);

    var noErr = true;
    _lodash2.default.each(array1, function (value, i) {
      if (!_compareDeep(value, array2[i])) noErr = false;
    });
    return noErr;

    // オブジェクトの場合
  } else if (_lodash2.default.isObject(v1)) {
    // key の length が違うか, keys に差異があれば false
    if (_lodash2.default.keys(v1).length != _lodash2.default.keys(v2).length || _lodash2.default.difference(_lodash2.default.keys(v1), _lodash2.default.keys(v2)).length > 0) {
      return false;
    }

    var _noErr = true;
    _lodash2.default.each(v1, function (value, key) {
      if (!_compareDeep(value, v2[key])) _noErr = false;
    });
    return _noErr;

    // その他は普通に比較
  } else {
    return v1 === v2;
  }
}