export const handleHorizontalScroll = (side, elementId, scroll) => {
  const $Element = document.getElementById(String(elementId));
  if (side === 'left') {
    $Element.scrollLeft -= scroll;
  } else {
    $Element.scrollLeft += scroll;
  }
};
