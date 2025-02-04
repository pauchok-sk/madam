import Scrollable from "../plugins/Scrollable.js";

export default function scrollables() {
  new Scrollable(".services__nav", {
    wheelScrolling: true,
  });

  new Scrollable(".popular-price__nav", {
    wheelScrolling: true,
  });

  const popularWrapperLists = document.querySelectorAll(".popular-price__wrapper-list");

  if (popularWrapperLists.length) {
    popularWrapperLists.forEach(list => {
      new Scrollable(list, {
        wheelScrolling: true,
      });
    })
  }
}