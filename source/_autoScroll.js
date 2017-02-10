import Scroll from 'react-scroll';

export default function _autoScroll(selector, duration=1200) {
  const target   = document.querySelector(selector);
  if(!target) {
    return;
  }

  const position = target.offsetTop;
  const scroll = Scroll.animateScroll;
  scroll.scrollTo(position, {smooth: true, duration});
}
