export default function _randomStr(len=10) {
  return Math.random().toString(36).slice(-len);
}
