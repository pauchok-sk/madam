export default function headerScroll() {
  const headerWrapper = document.querySelector(".header-wrapper");
  const header = document.querySelector(".header");

  const isSimple = header.classList.contains("_simple");

  let lastScrollTop = 0;

  if (headerWrapper) {
    headerWrapper.style.height = `${header.clientHeight}px`;

    window.addEventListener(
      "resize",
      () => (headerWrapper.style.height = `${header.clientHeight}px`)
    );
  }

  window.addEventListener("scroll", function (e) {
    if (window.scrollY === 0 && !isSimple) {
      header.classList.remove("_dark");
      return;
    }

    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.transform = `translateY(-${header.clientHeight + 1}px)`;
    } else {
      header.classList.add("_fixed");
      header.classList.add("_dark");
      header.style.transform = `translateY(0px)`;
    }

    lastScrollTop = scrollTop;
  });
}
