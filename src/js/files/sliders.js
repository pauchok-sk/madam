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
        draggable: true,
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
        },
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
        draggable: true,
      },
      navigation: {
        nextEl: ".portfolio .slider-nav__btn._next",
        prevEl: ".portfolio .slider-nav__btn._prev",
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        1680: {
          slidesPerView: 5,
        },
      },
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
        draggable: true,
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1680: {
          spaceBetween: 145,
          slidesPerView: 4,
        },
        1540: {
          spaceBetween: 100,
          slidesPerView: 4,
        },
        1366: {
          spaceBetween: 80,
          slidesPerView: 4,
        },
        993: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
    });
  }

  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 1000,
      modules: [Autoplay, Scrollbar, Navigation],
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      scrollbar: {
        el: ".reviews .slider-nav__scrollbar",
        draggable: true,
      },
      navigation: {
        nextEl: ".reviews .slider-nav__btn._next",
        prevEl: ".reviews .slider-nav__btn._prev",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1366: {
          spaceBetween: 24,
          slidesPerView: 1,
        },
      },
    });
  }

  const newsSlider = document.querySelector(".news__slider");

  if (newsSlider) {
    const swiper = new Swiper(newsSlider, {
      speed: 800,
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: ".news .slider-nav__btn._next",
        prevEl: ".news .slider-nav__btn._prev",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1680: {
          slidesPerView: 4,
          spaceBetween: 90,
        },
        993: {
          slidesPerView: "auto",
          spaceBetween: 50,
        },
      },
    });
  }

  const salonsSlider = document.querySelector(".salons__slider");

  if (salonsSlider) {
    const swiper = new Swiper(salonsSlider, {
      speed: 800,
      modules: [Autoplay, Navigation, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      scrollbar: {
        el: ".salons .slider-nav__scrollbar",
        draggable: true,
      },
      navigation: {
        nextEl: ".salons .slider-nav__btn._next",
        prevEl: ".salons .slider-nav__btn._prev",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1680: {
          slidesPerView: 4,
          spaceBetween: 90,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
  }

  const gallerySliders = document.querySelectorAll(".gallery__slider");

  if (gallerySliders.length) {
    gallerySliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 1000,
        modules: [Autoplay, Scrollbar, Navigation],
        slidesPerView: "auto",
        grabCursor: true,
        scrollbar: {
          el: slider.closest("[data-tab]").querySelector(".slider-nav__scrollbar"),
          draggable: true,
        },
        navigation: {
          nextEl: slider.closest("[data-tab]").querySelector(".slider-nav__btn._next"),
          prevEl: slider.closest("[data-tab]").querySelector(".slider-nav__btn._prev"),
        },
        autoplay: {
          delay: 4000,
        },
        breakpoints: {
          1680: {
            slidesPerView: 5,
          },
        },
      });
    });
  }

  const contactsSliders = document.querySelectorAll(".contacts__slider");

  if (contactsSliders.length) {
    contactsSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 1000,
        modules: [Autoplay, Scrollbar, Navigation],
        grabCursor: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        scrollbar: {
          el: slider.closest("[data-tab]").querySelector(".slider-nav__scrollbar"),
          draggable: true,
        },
        navigation: {
          nextEl: slider.closest("[data-tab]").querySelector(".slider-nav__btn._next"),
          prevEl: slider.closest("[data-tab]").querySelector(".slider-nav__btn._prev"),
        },
        autoplay: {
          delay: 4000,
        },
        breakpoints: {
          1366: {
            slidesPerView: 1
          }
        }
      });
    });
  }

  const sectDescrSlider = document.querySelector(".sect-descr__partner-slider");

  if (sectDescrSlider) {
    const swiper = new Swiper(sectDescrSlider, {
      speed: 800,
      modules: [Autoplay, Scrollbar],
      slidesPerView: 2,
      spaceBetween: 40,
      grabCursor: true,
      scrollbar: {
        el: ".sect-descr .slider-nav__scrollbar",
        draggable: true,
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        744: {
          slidesPerView: "auto",
          spaceBetween: 102,
        }
      }
    });
  }

  const recNewsSlider = document.querySelector(".rec-news__slider");

  if (recNewsSlider) {
    const swiper = new Swiper(recNewsSlider, {
      speed: 800,
      modules: [Autoplay, Scrollbar, Navigation],
      slidesPerView: "auto",
      grabCursor: true,
      scrollbar: {
        el: ".rec-news .slider-nav__scrollbar",
        draggable: true,
      },
      // autoplay: {
      //   delay: 3000,
      // },
      navigation: {
        prevEl: ".rec-news .slider-nav__btn._prev",
        nextEl: ".rec-news .slider-nav__btn._next",
      },
      breakpoints: {
        1366: {
          slidesPerView: 2,
        }
      }
    });
  }
}
