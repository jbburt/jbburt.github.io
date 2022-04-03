const nav = document.querySelector("nav");

function toggleMenu(x) {
  x.classList.toggle("menu-click");
  nav.classList.toggle("menu-click");
  // console.log(nav.classList);
}

function toggleDark(x) {
  x.classList.toggle("dark-mode");
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// add event listener for scroll
window.addEventListener("scroll", function (e) {
  // translateY
  const target = document.querySelectorAll(".scroll");
  var index = 0,
    length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;
    let transform = "translate3d(0px, " + pos + "px, 0px)";
    console.log(target[index].classList.contains("rotate"));
    if (target[index].classList.contains("rotate")) {
      transform += " rotate(" + 2 * pos + "deg)";
    }
    target[index].style.transform = transform;
  }
});
