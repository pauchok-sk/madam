import Swiper from "swiper";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const servicesSliders = document.querySelectorAll(".services__slider");

  if (servicesSliders.length) {
    servicesSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 1000,
        modules: [Autoplay, Navigation, Scrollbar],
        slidesPerView: "auto",
        spaceBetween: 16,
        grabCursor: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: slider
            .closest("[data-tab]")
            .querySelector(".slider-nav__btn._next"),
          prevEl: ".services .slider-nav__btn._prev",
        },
        scrollbar: {
          el: slider
            .closest("[data-tab]")
            .querySelector(".slider-nav__scrollbar"),
          draggable: true,
        },
        breakpoints: {
          1800: {
            slidesPerView: 4,
            spaceBetween: 88,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          744: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
        },
      });
    });
  }

  const guaranteeSlider = document.querySelector(".guarantee__slider");

  if (guaranteeSlider) {
    const swiper = new Swiper(guaranteeSlider, {
      speed: 1000,
      modules: [Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      grabCursor: true,
      scrollbar: {
        el: ".guarantee__scrollbar",
        draggable: true
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1280: {
          spaceBetween: 150,
          slidesPerView: 3,
        },
        993: {
          spaceBetween: 50,
          slidesPerView: 3,
        },
        744: {
          spaceBetween: 30,
          slidesPerView: 2,
        }
      },
    });
  }
}
