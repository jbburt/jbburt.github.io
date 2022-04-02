const nav = document.querySelector("nav");

function toggleMenu(x) {
  x.classList.toggle("menu-click");
  nav.classList.toggle("menu-click");
  // console.log(nav.classList);
}
