function addListenerForMenuButton(btnToggle, elNavigation) {
  btnToggle.addEventListener("click", function () {
    btnToggle.classList.toggle("header__toggle--show");
    elNavigation.classList.toggle("main-nav--hidden");
  });
}

function hideNavigation(btnToggle, elNavigation) {
  btnToggle.classList.remove("header__toggle--show");
  elNavigation.classList.add("main-nav--hidden");
}

let btnToggle = document.querySelector(".js-toggle-btn");
let elNavigation = document.querySelector(".js-nav");
hideNavigation(btnToggle, elNavigation);
addListenerForMenuButton(btnToggle, elNavigation);
