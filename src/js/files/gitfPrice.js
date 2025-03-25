export default function giftPrice() {
  const items = document.querySelectorAll(".gift__item");

  if (items.length) {
    const inputPrice = document.querySelector("#gift-my-price");
    const inputParent = inputPrice.closest(".gift__item");
    const btn = document.querySelector(".gift__btn");
    const inputModal = document.querySelector("#record-price");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("_active"));
        item.classList.add("_active");

        if (+item.dataset.price <= 0) {
          btn.setAttribute("disabled", "");
        } else {
          btn.removeAttribute("disabled");
        }
      });
    });

    inputPrice.addEventListener("input", (e) => {
      if (e.target.value <= 0) {
        btn.setAttribute("disabled", "");
      } else {
        btn.removeAttribute("disabled");
      }

      inputParent.setAttribute("data-price", e.target.value || 0);
    });

    btn.addEventListener("click", () => {
      const currentPrice = document.querySelector(".gift__item._active").dataset
        .price;
      const value = `Сертификат на сумму: ${currentPrice} рублей`;
      inputModal.value = value;
    });
  }
}
