const menu_bar = document.getElementById("menu_bar");
const menu_list = document.querySelector(".menu_list");

menu_bar.addEventListener("click", () => {
  menu_list.classList.toggle("show_menu");
  windowMenu();
});

function windowMenu() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      menu_list.classList.add("show_menu");
    } else {
      menu_list.classList.remove("show_menu");
    }
  });
}
