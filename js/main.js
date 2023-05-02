const iconSidebar = document.querySelector(".icon_sidebar");
const leftSection = document.querySelector("main .content .left");
const rightSection = document.querySelector("main .content .right");
const contentSection = document.querySelector("main .content");

// open and close sidebar
iconSidebar.addEventListener("click", () => {
  leftSection.classList.toggle("close");
  rightSection.classList.toggle("scale");

  if (innerWidth < 991) {
    contentSection.classList.toggle("open-shadow");
  }
});

// oprn and close mini list in sidebar
const items = document.querySelectorAll(".mini_list .item_list");
const lists = document.querySelectorAll(".mini_list .list");

items.forEach((item) => {
  item.addEventListener("click", () => {
    let num = item.getAttribute("data-num");

    document.querySelector(`.list${num}`).classList.toggle("open");
  });
});

// toggle active check box excle
const checkExcle = document.querySelector(".check_excle");
const importFromExcel = document.querySelector(".import_from_excel");

checkExcle.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    importFromExcel.classList.add("active");
  } else {
    importFromExcel.classList.remove("active");
  }
});
