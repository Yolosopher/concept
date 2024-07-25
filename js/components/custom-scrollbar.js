const loadCustomScrollbar = (scrollContainerClass) => {
  const container = document.querySelector(scrollContainerClass);
  const content = container.querySelector(".cstm_scrollbar_content");
  const thumb = container.querySelector(".cstm_scrollbar_thumb");
  const scrollbar = container.querySelector(".cstm_scrollbar");

  let timeout = null;
  const updateThumbPosition = () => {
    scrollbar.classList.add("scrolling");
    const containerHeight = container.clientHeight;
    const contentHeight = content.scrollHeight;
    const scrollTop = content.scrollTop;
    const thumbHeight = Math.max(
      (containerHeight / contentHeight) * containerHeight,
      30
    );

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.top = `${(scrollTop / contentHeight) * containerHeight}px`;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      scrollbar.classList.remove("scrolling");
    }, 700);
  };

  const onThumbMouseDown = (event) => {
    if (event.button !== 0) return; // Only respond to left mouse button

    const initialY = event.clientY;
    const initialTop = parseInt(window.getComputedStyle(thumb).top, 10);

    const onMouseMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - initialY;
      const newTop = Math.min(
        Math.max(initialTop + deltaY, 0),
        container.clientHeight - thumb.clientHeight
      );

      thumb.style.top = `${newTop}px`;
      content.scrollTop =
        (newTop / container.clientHeight) * content.scrollHeight;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  thumb.addEventListener("mousedown", onThumbMouseDown);
  content.addEventListener("scroll", updateThumbPosition);

  updateThumbPosition();
};

const PAGESCROLLBAR_CONTAINER = ".page_scroll_container";
const CONTACTFORM_MID_CONTAINER = ".contactform_mid";

const loadScrollBars = () => {
  loadCustomScrollbar(PAGESCROLLBAR_CONTAINER);
  // loadCustomScrollbar(CONTACTFORM_MID_CONTAINER);
};

export default loadScrollBars;
