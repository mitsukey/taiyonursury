window.addEventListener("load", function () {
  const scheduleModalButton = document.getElementById("scheduleModalButton");
  const modalScheduleBackground = document.querySelector(
    "#modal-schedule .modal-background"
  );
  const modalScheduleWindow = document.querySelector(
    "#modal-schedule .modal-window"
  );
  const modalScheduleWindowClose = document.querySelector(
    "#modal-schedule .modal-window-close"
  );

  if (scheduleModalButton) {
    scheduleModalButton.addEventListener("click", () => {
      modalScheduleBackground.style.display = "block";
    });
  }
  modalScheduleBackground.addEventListener("click", () => {
    modalScheduleBackground.style.display = "none";
  });
  if (modalScheduleWindowClose) {
    modalScheduleWindowClose.addEventListener("click", () => {
      modalScheduleBackground.style.display = "none";
    });
  }
  modalScheduleWindow.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
