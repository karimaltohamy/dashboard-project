//   checkbox select
const selectAll = document.querySelector("#select_all");
const checkboxsCourses = document.querySelectorAll(".checkboxCourse");

selectAll.addEventListener("click", () => {
  checkboxsCourses.forEach((item) => {
    if (selectAll.checked === true) {
      item.checked = true;
      item.parentElement.parentElement.classList.add("select");
    } else {
      item.checked = false;
      item.parentElement.parentElement.classList.remove("select");
    }
  });
});

checkboxsCourses.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.checked == true) {
      item.parentElement.parentElement.classList.add("select");
    } else {
      item.parentElement.parentElement.classList.remove("select");
    }
  });
});
