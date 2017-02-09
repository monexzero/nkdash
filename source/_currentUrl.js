export default function _currentUrl(noQuery=true) {
  if(!document || !document.URL) {
    return null;
  }

  return noQuery ? document.URL.replace(/\?.*$/,"") : document.URL;
}
