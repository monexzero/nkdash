export default function _isFireFox() {
  const ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/firefox/i));
}
