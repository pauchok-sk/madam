export default function headerScroll() {
  const header = document.querySelector(".header");

  const isSimple = header.classList.contains("_simple");

  window.addEventListener("scroll", () => {
    if (isSimple) return;

    if (
      window.scrollY >= header.clientHeight * 2
    ) {
      header.classList.add("_simple");
      header.classList.add("_dark");
    } else {
      header.classList.remove("_simple");
      header.classList.remove("_dark");
    }
  });
}