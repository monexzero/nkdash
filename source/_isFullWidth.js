import _ from 'lodash';

export default function _isFullWidth(str) {
  let isFull = true;
  _.each(str.split(""), (c) => {
    const isFullWidth = !!c.match(/^[^\x01-\x7E\xA1-\xDF]+$/);
    if(!isFullWidth) {
      isFull = false;
      return;
    }
  })
  return isFull;
}
