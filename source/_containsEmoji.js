import _ from 'lodash';
import emojiRegex from 'emoji-regex';

export default function _containsEmoji(str) {
  if(!_.isString(str)) {
    return false;
  }
  return emojiRegex().test(str);
}
