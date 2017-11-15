export default function _isWindows() { 
  const plt = navigator.platform.toLowerCase();
  return /^win/.test(plt);
}
