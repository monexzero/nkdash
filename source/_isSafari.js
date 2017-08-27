import _isChrome from "./_isChrome";

export default function _isSafari() {
  const ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/safari/i)) && !_isChrome();
}
