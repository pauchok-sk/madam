export default function inputFile() {
  const inputs = document.querySelectorAll(".input-file");

  if (inputs.length) {
    inputs.forEach(input => {
      const currentLabel = input.nextElementSibling;
      const nameHtml = currentLabel.querySelector(".label-file__title");

      input.addEventListener("change", (e) => {
        const name = e.target.files[0].name;

        nameHtml.textContent = name;
      })
    })
  }
}