//   checkbox select
const selectAll = document.querySelector("#select_all");
const checkboxsCourses = document.querySelectorAll(".checkboxCourse");
const selectAll2 = document.querySelector("#select_all2");
const checkboxsCourses2 = document.querySelectorAll(".checkboxCourse2");

selectAll.addEventListener("click", () => {
  checkboxsCourses.forEach((item) => {
    if (selectAll.checked === true) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
});

selectAll2.addEventListener("click", () => {
  checkboxsCourses2.forEach((item) => {
    if (selectAll2.checked === true) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
});

// head select table
const itemsSelectHead = document.querySelectorAll(".head_select_table .item");
const subscribersTable = document.querySelector(".subscribers_table_container");
const unsubscribersTable = document.querySelector(
  ".unsubscribers_table_container"
);
const rejectedTable = document.querySelector(".rejected_table_container");
const tablesSelect = document.querySelectorAll(".table_select");

itemsSelectHead.forEach((item) => {
  item.addEventListener("click", () => {
    itemsSelectHead.forEach((ele) => ele.classList.remove("active"));
    item.classList.add("active");

    tablesSelect.forEach((ele) => ele.classList.remove("active"));

    if (item.getAttribute("data-tableSelect") === "subscribers") {
      subscribersTable.classList.add("active");
    } else if (item.getAttribute("data-tableSelect") === "unsubscribers") {
      unsubscribersTable.classList.add("active");
    } else if (item.getAttribute("data-tableSelect") === "rejected") {
      rejectedTable.classList.add("active");
    } else {
      return null;
    }
  });
});
// popup filter
const overflow = document.querySelector(".overflow");
const btnFilter = document.querySelector(".btn_filter");
const popupFilter = document.querySelector(".popup_filter");
const btnCloseFilter = document.querySelector(".close_popup_filter");
const btnFilter2 = document.querySelectorAll(".btn_filter2");
const popupFilter2 = document.querySelector(".popup_filter2");
const btnCloseFilter2 = document.querySelector(".close_popup_filter2");

btnFilter.addEventListener("click", () => {
  popupFilter.classList.add("active");
  overflow.classList.add("active");
});

btnCloseFilter.addEventListener("click", () => {
  popupFilter.classList.remove("active");
  overflow.classList.remove("active");
});

btnFilter2.forEach((btnFilter) => {
  btnFilter.addEventListener("click", () => {
    popupFilter2.classList.add("active");
    overflow.classList.add("active");
  });
});

btnCloseFilter2.addEventListener("click", () => {
  popupFilter2.classList.remove("active");
  overflow.classList.remove("active");
});
