const iconSidebar = document.querySelector(".icon_sidebar");
const leftSection = document.querySelector("main .content .left");
const rightSection = document.querySelector("main .content .right");
const contentSection = document.querySelector("main .content");

iconSidebar.addEventListener("click", () => {
  leftSection.classList.toggle("close");
  rightSection.classList.toggle("scale");

  if (innerWidth < 991) {
    contentSection.classList.toggle("open-shadow");
  }
});
