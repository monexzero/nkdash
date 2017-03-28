import _ from 'lodash';

export default function _isFullWidth(c) {
  return !!c.match(/^[^\x01-\x7E\xA1-\xDF]+$/);
}
