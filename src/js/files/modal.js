export default function modal() {
  const buttonsModal = document.querySelectorAll("[data-modal-btn]");

  if (buttonsModal.length) {
    buttonsModal.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        const modalId = btn.dataset.modalBtn;
        handleOpenModal(modalId);
      });
    });
  }

  function handleOpenModal(modalId) {
    const currentModalOpen = document.querySelector(".modal._open");

    if (currentModalOpen) {
      currentModalOpen.classList.remove("_open");
    }

    const currentModal = document.querySelector(
      `[data-modal="${modalId}"]`
    );
    const modalWindow = currentModal.querySelector(".modal__window");
    const btnClose = currentModal.querySelector(".modal__close");

    modalTop(modalWindow);

    btnClose.addEventListener("click", handleCloseModal);

    document.addEventListener("click", handleCloseModal);
    modalWindow.addEventListener("click", (e) => e.stopPropagation());

    currentModal.classList.add("_open");
    document.body.classList.add("body-hidden");
  }

  function modalTop(modalWindow) {
    if (window.matchMedia("(min-width: 768px)").matches && !modalWindow.closest(".modal-sect")) {
      const windowHeight = document.documentElement.clientHeight;
      const modalHeight = modalWindow.clientHeight;

      const offsetTop = (windowHeight - modalHeight) / 2;
      const marginTop = offsetTop > 20 ? `${offsetTop}px` : "50px";

      modalWindow.style.marginTop = marginTop;
    }
  }

  function handleCloseModal(e) {
    let currentModal = e.target.closest("[data-modal]");

    if (!currentModal) currentModal = document.querySelector("[data-modal]._open");

    currentModal.classList.add("_hide");
    setTimeout(() => {
      document.body.classList.remove("body-hidden");
      currentModal.classList.remove("_open");
      currentModal.classList.remove("_hide");
    }, 300);

    return document.removeEventListener("click", handleCloseModal);
  }
}