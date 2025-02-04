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

  const portfolioSlider = document.querySelector(".portfolio__slider");

  if (portfolioSlider) {
    const swiper = new Swiper(portfolioSlider, {
      speed: 1000,
      modules: [Autoplay, Scrollbar, Navigation],
      slidesPerView: "auto",
      grabCursor: true,
      scrollbar: {
        el: ".portfolio .slider-nav__scrollbar",
        draggable: true
      },
      navigation: {
        nextEl: ".portfolio .slider-nav__btn._next",
        prevEl: ".portfolio .slider-nav__btn._prev"
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        1680: {
          slidesPerView: 5,
        }
      }
    });
  }

  const stocksSlider = document.querySelector(".stocks__slider");

  if (stocksSlider) {
    const swiper = new Swiper(stocksSlider, {
      speed: 1000,
      modules: [Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      grabCursor: true,
      scrollbar: {
        el: ".stocks__scrollbar",
        draggable: true
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1680: {
          spaceBetween: 145,
          slidesPerView: 4,
        },
        1366: {
          spaceBetween: 50,
          slidesPerView: 4,
        },
        993: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
    });
  }
}
