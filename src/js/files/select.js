export default function select() {
  const selects = document.querySelectorAll(".select");

  if (selects.length) {
    selects.forEach((select) => {
      const items = select.querySelectorAll(".select__list-item");
      const input = select.querySelector(".input");
      const btn = select.querySelector(".select__btn");

      select.addEventListener("click", (e) => e.stopPropagation());

      btn.addEventListener("click", (e) => {
        if (!select.classList.contains("_open")) {
          openSelect(select);
        } else {
          closeSelect();
        }
      });

      items.forEach((item) => {
        item.addEventListener("click", () => {
          input.value = item.textContent;
          closeSelect();
        });
      });
    });
  }

  function openSelect(select) {
    select.classList.add("_open");
    document.addEventListener("click", closeSelect);
  }

  function closeSelect() {
    const select = document.querySelector(".select._open");

    select.classList.remove("_open");
    document.removeEventListener("click", closeSelect);
  }
}
