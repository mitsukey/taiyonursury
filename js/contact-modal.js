window.addEventListener("load", function () {
  const contactModalButton = document.getElementById("contactModalButton");
  const contactModalButtonBottoms = document.querySelectorAll(
    ".contactModalButtonBottom"
  );
  const modalBackground = document.querySelector(
    "#modal-contactform .modal-background"
  );
  const modalWindow = document.querySelector(
    "#modal-contactform .modal-window"
  );
  const modalWindowClose = document.querySelector(
    "#modal-contactform .modal-window-close"
  );

  const showContactModal = () => {
    modalBackground.style.display = "block";
    const textAreaHeight = document.querySelector("textarea").offsetHeight;
    document.querySelector(".fig-message").style.height = textAreaHeight + "px";
  };

  if (contactModalButton) {
    contactModalButton.addEventListener("click", () => {
      showContactModal();
    });
  }

  contactModalButtonBottoms.forEach((contactModalButtonBottom) => {
    contactModalButtonBottom.addEventListener("click", () => {
      showContactModal();
    });
  });

  modalBackground.addEventListener("click", () => {
    modalBackground.style.display = "none";
  });
  modalWindowClose.addEventListener("click", () => {
    modalBackground.style.display = "none";
  });
  modalWindow.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
window.addEventListener("resize", () => {
  const textAreaHeight = document.querySelector("textarea").offsetHeight;
  document.querySelector(".fig-message").style.height = textAreaHeight + "px";
});
