export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burger = document.querySelector("#burger");
  const header = document.querySelector(".header");

  const isHeaderSimple = header.classList.contains("_simple");

  if (burger) {
    burger.addEventListener("click", (e) => e.stopPropagation());

    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (burger.classList.contains("_open")) {
        burgerClose();
      } else {
        burgerOpen();
      }
    });

    function burgerClose() {
      const isHeaderFixed = header.classList.contains("_fixed");
      burger.classList.remove("_open");
      burgerBtn.classList.remove("_active");
      document.body.classList.remove("body-hidden");
      if (!isHeaderSimple && !isHeaderFixed) header.classList.remove("_dark");

      document.body.removeEventListener("click", burgerClose);
    }

    function burgerOpen() {
      burger.classList.add("_open");
      burgerBtn.classList.add("_active");
      document.body.classList.add("body-hidden");
      header.classList.add("_dark");

      document.body.addEventListener("click", burgerClose);
    }

    function updateHeightBurger() {
      burger.style.maxHeight = `${window.visualViewport.height}px`;
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }
}
