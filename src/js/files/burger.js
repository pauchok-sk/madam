export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burger = document.querySelector("#burger");
  const header = document.querySelector(".header");
  console.log(burger)
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
      burger.classList.remove("_open");
      burgerBtn.classList.remove("_active");
      document.body.classList.remove("_body-hidden")
      header.classList.remove("_dark");

      document.body.removeEventListener("click", burgerClose);
    }

    function burgerOpen() {
      burger.classList.add("_open");
      burgerBtn.classList.add("_active");
      document.body.classList.add("_body-hidden")
      header.classList.add("_dark");

      document.body.addEventListener("click", burgerClose);
    }
  }
}
