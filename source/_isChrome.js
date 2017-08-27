import _isEdge from "./_isEdge";

export default function _isChrome() {
  const ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/chrome/i)) && !_isEdge();
}
