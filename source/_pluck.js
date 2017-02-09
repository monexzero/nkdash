export default function _pluck(collection, name) {
  if(!_.isArray(collection)) {
    return null;
  }

  return _.map(collection, (obj) => {
    return obj[name];
  });
}
