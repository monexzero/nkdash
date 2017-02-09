import _ from 'lodash';

export default function _isValidEmail(email) {
  return (
    _.isString(email) && 
    !_.isNull(email.match(/.+@.+\..+/))
  );
}
