export default function hiddenText() {
  const buttons = document.querySelectorAll(".hidden-text-button");

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".parent-hidden-text");
        const currentText = parent.querySelector(".hidden-text");

        currentText.classList.remove("hidden-text");
        btn.remove();
      })
    })
  }
}