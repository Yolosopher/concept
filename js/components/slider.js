import Swiper from "swiper";

import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const loadSliders = () => {
  // init Swiper:
  const options = (className) => ({
    slidesPerView: 1.5,
    spaceBetween: 15,
    observer: true,
    grabCursor: true,
    resizeObserver: true,
    touchEventsTarget: "container",
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      678: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    scrollbar: {
      el: `.${className}_scrollbar`,
      dragSize: 300,
      // hide: true,
    },
    navigation: {
      nextEl: `.${className}_slider_nav_next`,
      prevEl: `.${className}_slider_nav_prev`,
      disabledClass: `${className}_slider_nav_disabled`,
    },
    // configure Swiper to use modules
    modules: [Navigation, Scrollbar],
  });

  const offersSwiper = new Swiper(".offers_swiper", options("offers"));
  const productsSwiper = new Swiper(
    ".sectionproducts_swiper",
    options("sectionproducts")
  );
  const awardsSwiper = new Swiper(".awards_swiper", options("awards"));
};

export default loadSliders;
