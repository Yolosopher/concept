import Swiper from "swiper";

import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const loadSliderOffers = () => {
  // init Swiper:
  const swiper = new Swiper(".offers_swiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    observer: true,
    resizeObserver: true,
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
      el: ".swiper-scrollbar",
      dragSize: 300,
      // hide: true,
    },
    navigation: {
      nextEl: ".offers_slider_nav_next",
      prevEl: ".offers_slider_nav_prev",
      disabledClass: "offers_slider_nav_disabled",
    },
    // configure Swiper to use modules
    modules: [Navigation, Scrollbar],
  });
};

export default loadSliderOffers;
