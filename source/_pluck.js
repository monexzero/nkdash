import _ from 'lodash';

export default function _pluck(collection, name) {

  if(!_.isArray(collection) || !_.isString(name)) {
    return null;
  }

  return _.map(collection, (obj) => {
    return obj[name];
  });
}
