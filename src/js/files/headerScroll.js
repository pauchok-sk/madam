export default function headerScroll() {
  const header = document.querySelector(".header");

  const isSimple = header.classList.contains("_simple");

  window.addEventListener("scroll", () => {
    if (isSimple) return;

    if (
      window.scrollY >= header.clientHeight * 2 &&
      !header.classList.contains("_fixed")
    ) {
      header.style.transform = `translateY(-${header.clientHeight}px)`;

      setTimeout(() => {
        header.classList.add("_fixed");
        header.classList.add("_dark");
        header.style.transform = `translateY(0px)`;
      }, 800);
    } else if (window.scrollY === 0) {
      header.classList.remove("_fixed");
      header.classList.remove("_dark");
    }
  });
}
