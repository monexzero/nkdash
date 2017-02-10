import _ from 'lodash';

export default function _moneyFormat(val) {
  if(!_.isInteger(val)) {
    return null;
  }

  return String(val).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
