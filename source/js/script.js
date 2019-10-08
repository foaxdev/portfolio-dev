let elButtonToggle = document.querySelector(".js-toggle-btn");
let elNavigation = document.querySelector(".js-nav");
let elsMenuLinks = document.querySelectorAll(".nav-list_link");
let elsDescriptionButtons = document.querySelectorAll(".js-description-btn");
console.log(elsDescriptionButtons);

hideNavigation();
addListenerForMenuButton();
addListenersForDescriptionButtons();

function addListenersForDescriptionButtons() {
  for (let i = 0; i < elsDescriptionButtons.length; i++) {
    elsDescriptionButtons[i].addEventListener('click', function () {
      let elMarkupDescription = elsDescriptionButtons[i].nextElementSibling;
      elMarkupDescription.classList.toggle("markups-list__description--hidden");
    });
  }
}

function addListenerForMenuButton() {
  elButtonToggle.addEventListener("click", function () {
    elButtonToggle.classList.toggle("header__toggle--show");
    elNavigation.classList.toggle("main-nav--hidden");

    if (elButtonToggle.classList.contains("header__toggle--show")) {
      addListenersForMenuLinks();
    }
  });
}

function addListenersForMenuLinks() {
  for (let i = 0; i < elsMenuLinks.length; i++) {
    elsMenuLinks[i].addEventListener('click', hideNavigation);
  }
}

function removeListenersFromMenuLinks() {
  for (let i = 0; i < elsMenuLinks.length; i++) {
    elsMenuLinks[i].removeEventListener('click', hideNavigation);
  }
}

function hideNavigation() {
  elButtonToggle.classList.remove("header__toggle--show");
  elNavigation.classList.add("main-nav--hidden");
  removeListenersFromMenuLinks();
}
