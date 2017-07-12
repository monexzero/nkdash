import _ from 'lodash';

export default function _containsMark(str) {
  const spChars = "!@#$%^&*\\\'\"?".split("");
  return !_.isEmpty(_.intersection(spChars, str.split('')));
}
