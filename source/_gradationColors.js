import _ from 'lodash';
import _toRGB       from './_toRGB';
import _toColorCode from './_toColorCode';

export default function _gradationColors(from, to, count) {
  if(!_.isString(from) || !_.isString(to)) {
    return false;
  }
  count = count || 10;
  if(count < 3) {
    return _.take([from, to], count);
  }

  from  = _toRGB(from);
  to    = _toRGB(to);

  const gradations = _.map(_.range(1, count - 1), (i) => {
    const rgb = {
      r: from.r + (((to.r - from.r)/count) * i),
      g: from.g + (((to.g - from.g)/count) * i),
      b: from.b + (((to.b - from.b)/count) * i),
    };
    return _toColorCode(rgb);
  })
  return _.flatten([from, gradations, to]);
}
