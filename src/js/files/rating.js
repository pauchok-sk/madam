export default function rating() {
  const ratings = document.querySelectorAll("[data-rating]");

  if (ratings.length) {
    ratings.forEach(r => {
      const radios = r.querySelectorAll("input[type='radio']");

      radios.forEach(input => {
        input.addEventListener("change", () => r.setAttribute("data-rating", input.value));
      })
    })
  }
}