const btnOpen = document.querySelector(".btn_add");
const popup = document.querySelector(".add_popup");
const overflow = document.querySelector(".overflow");
const btnClose = document.querySelector(".close_popup");

btnOpen.addEventListener("click", () => {
  popup.classList.add("active");
  overflow.classList.add("active");
});

btnClose.addEventListener("click", () => {
  popup.classList.remove("active");
  overflow.classList.remove("active");
});

// popup filter
const btnFilter = document.querySelector(".btn_filter");
const popupFilter = document.querySelector(".popup_filter");
const btnCloseFilter = document.querySelector(".close_popup_filter");

btnFilter.addEventListener("click", () => {
  popupFilter.classList.add("active");
  overflow.classList.add("active");
});

btnCloseFilter.addEventListener("click", () => {
  popupFilter.classList.remove("active");
  overflow.classList.remove("active");
});
