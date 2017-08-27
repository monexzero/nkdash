export default function _isTabletOrMobile() { 
  const ua = navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i));
}
