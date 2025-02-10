export default function more() {
  const moreParents = document.querySelectorAll(".parent-more");

  if (moreParents.length) {
    moreParents.forEach((p) => {
      const parentItems = p.querySelector("[data-more]");
      const items = parentItems.children;
      const btn = p.querySelector("[data-more-btn]");

      let numberShow = +parentItems.dataset.more;
      const media = parentItems.dataset.media;
      const moreMedia = parentItems.dataset.moreMedia;
      const step = +parentItems.dataset.moreStep;

      if (moreMedia) {
        const [number, media] = moreMedia.split(",");
        console.log(number, media)
        if (window.matchMedia(`(max-width: ${media}px)`).matches) {
          numberShow = +number;
        }
      }

      if (numberShow >= items.length) {
        btn.remove();
        return;
      }

      const condition = media
        ? window.matchMedia(`(max-width: ${media}px)`).matches
        : true;

      if (condition) {
        Array.from(items)
          .slice(numberShow)
          .forEach((item) => item.classList.add("_hidden"));

        numberShow += step;

        btn.addEventListener("click", () => {
          console.log(numberShow);
          Array.from(items)
            .slice(0, numberShow)
            .forEach((item) => item.classList.remove("_hidden"));
          if (numberShow >= items.length) btn.remove();
          numberShow += step;
        });
      }
    });
  }
}
