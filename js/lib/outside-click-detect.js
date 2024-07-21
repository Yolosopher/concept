const detectOutsideClick = (element, callback, returnRemover = false) => {
  const outsideClickListener = (event) => {
    if (!element.contains(event.target)) {
      callback();
      if (returnRemover) {
        removeClickListener();
      }
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);

  if (returnRemover) {
    return removeClickListener;
  }
};

export default detectOutsideClick;
