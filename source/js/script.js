window.addEventListener("DOMContentLoaded", function () {
  let btnToggle = document.querySelector(".js-toggle-btn");
  let elNavigation = document.querySelector(".js-nav");
  hideNavigation(btnToggle, elNavigation);
  addListenerForMenuButton(btnToggle, elNavigation);
});

function addListenerForMenuButton(btnToggle, elNavigation) {
  btnToggle.addEventListener("click", function () {
    btnToggle.classList.toggle("header__toggle--close");
    elNavigation.classList.toggle("main-nav--hidden");
  });
}

function hideNavigation(btnToggle, elNavigation) {
  btnToggle.classList.add("header__toggle--show");
  elNavigation.classList.add("main-nav--hidden");
}
