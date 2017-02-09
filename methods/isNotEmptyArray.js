import 'lodash';

export const isNotEmptyArray = (array) => {
  return _.isArray(array) && !_.isEmpty(array);
}
