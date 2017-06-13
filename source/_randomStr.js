import _ from 'lodash';

export default function _randomStr(len=10) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charsetArray = charset.split("");
  const randomStr = _.map(_.range(len), (i) => {
    return _.sample(charsetArray)
  });
  return randomStr.join("")
}
