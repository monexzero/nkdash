import _ from 'lodash';

export default function _hasValue(val) {
  return !_.includes([false, null, undefined, ], val);
}
