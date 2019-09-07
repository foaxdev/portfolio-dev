window.addEventListener("DOMContentLoaded", function () {
  let elMap = document.querySelector(".map__wrap");
  let elInteractiveMap = document.querySelector(".map__interactive-map");

  if (elMap && elInteractiveMap) {
    initializeInteractiveMap(elMap, elInteractiveMap);
  }

  let btnShowTariffs = document.querySelector(".js-tariffs-btn");
  if (btnShowTariffs) {
    btnShowTariffs.addEventListener("click", function (evt) {
      evt.preventDefault();
      let elModal = document.querySelector(".modal");
      if (elModal)
        initModalWindow(elModal);
    });
  }

  initializeMenu();

  let btnFilterCountries = document.querySelector(".js-filter-button");
  let elFilterMainland = document.querySelector(".js-filter-mainland");
  let elFilterAlphabet = document.querySelector(".js-filter-alphabet");
  let elFilterBody = document.querySelector(".js-filter-body");
  let btnFilterCountriesCollapse = document.querySelector(".js-filter-countries-collapse");
  let elFilterWrapper = document.querySelector(".js-filter-wrapper");

  if (btnFilterCountries && elFilterMainland && elFilterBody && btnFilterCountriesCollapse && elFilterWrapper && elFilterAlphabet)
    initializeFilterCountries(btnFilterCountries, elFilterMainland, elFilterAlphabet, elFilterBody, btnFilterCountriesCollapse, elFilterWrapper);

  let elsBtnFilter = document.querySelectorAll(".filter-options-list__title");

  if (elsBtnFilter)
    initializeCollapseAction(elsBtnFilter);

  let elsCheckboxes = document.querySelectorAll(".filter-options-list__checkbox");

  if (elsCheckboxes)
    addListenersForCheckboxes(elsCheckboxes);

  let elsTransportCheckboxes = document.querySelectorAll(".vehicles-list__checkbox");
  if (elsTransportCheckboxes)
    addListenersForTransportCheckboxes(elsTransportCheckboxes);

  let elKidsCheckbox = document.querySelector(".dates__checkbox");
  if (elKidsCheckbox)
    addListenersForKidsCheckboxes(elKidsCheckbox);

  let elsPlansTextAreas = document.querySelectorAll(".entertainment-list__plan");
  let elForm = document.querySelector(".add-plan__form");

  if (elsPlansTextAreas && elForm)
    initErrorStatus(elsPlansTextAreas, elForm);

  let elChooseCountryButton = document.querySelector(".country-adding__choose-country");

  if (elChooseCountryButton)
    expandCollapseChooseCountryMenu(elChooseCountryButton);

  let elsMainlandButtons = document.querySelectorAll(".mainland-list__link");
  if (elsMainlandButtons)
    initMainlandSwitcher(elsMainlandButtons);

  let elEmail = document.querySelector(".register__email");
  let elRegisterForm = document.querySelector(".register");

  if (elEmail && elRegisterForm)
    initErrorEmail(elEmail, elRegisterForm);
});

function initErrorEmail(elEmail, elRegisterForm) {
  elRegisterForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!elEmail.value) {
      evt.preventDefault();
      elEmail.classList.add("register__email--error");
      if (elEmail.parentElement)
        elEmail.parentElement.classList.add("register--error");
    }
  });

  elEmail.addEventListener("focus", function () {
    elEmail.classList.remove("register__email--error");
    if (elEmail.parentElement)
      elEmail.parentElement.classList.remove("register--error");
  });
}

function initMainlandSwitcher(elsMainlandButtons) {
  for (let i = 0; i < elsMainlandButtons.length; i++) {
    elsMainlandButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      for (let j = 0; j < elsMainlandButtons.length; j++) {
        elsMainlandButtons[j].classList.remove("mainland-list__link--selected");
      }
      elsMainlandButtons[i].classList.add("mainland-list__link--selected");
    });
  }
}

function expandCollapseChooseCountryMenu(elChooseCountryButton) {
  elChooseCountryButton.addEventListener("click", function () {
    elChooseCountryButton.classList.toggle("country-adding__choose-country--expand");

    if (elChooseCountryButton.parentElement)
      elChooseCountryButton.parentElement.classList.toggle("country-adding--expand");

    let elDropdownCountries = document.querySelector(".country-adding__available-countries");
    if (elDropdownCountries)
      elDropdownCountries.classList.toggle("country-adding__available-countries--show");
  });
}

function initErrorStatus(elsPlansTextAreas, elForm) {
  elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    for (let i = 0; i < elsPlansTextAreas.length; i++) {
      if (!elsPlansTextAreas[i].value)  {
        evt.preventDefault();
        elsPlansTextAreas[i].classList.add("entertainment-list__plan--error");
        if (elsPlansTextAreas[i].parentElement)
          elsPlansTextAreas[i].parentElement.classList.add("entertainment-list__item--error");
      }
    }
  });

  for (let i = 0; i < elsPlansTextAreas.length; i++) {
    elsPlansTextAreas[i].addEventListener("focus", function () {
      elsPlansTextAreas[i].classList.remove("entertainment-list__plan--error");
      if (elsPlansTextAreas[i].parentElement)
        elsPlansTextAreas[i].parentElement.classList.remove("entertainment-list__item--error");
    });
  }
}

function addListenersForKidsCheckboxes(elCheckbox) {
  elCheckbox.addEventListener("keydown", function (evt) {
    if (evt.key === " ") {
      evt.preventDefault();
      changeKidsCheckbox(elCheckbox, elCheckbox.querySelector("input"));
    }
  });
  elCheckbox.addEventListener("click", function () {
    changeKidsCheckbox(elCheckbox, elCheckbox.querySelector("input"));
  });
}

function changeKidsCheckbox(checkbox, input) {
  switch (checkbox.getAttribute("aria-checked")) {
    case "true":
      checkbox.setAttribute("aria-checked", "false");
      input.removeAttribute("checked");
      checkbox.querySelector("span").classList.add("dates__checkbox-indicator--selected");
      break;
    case "false":
      checkbox.setAttribute("aria-checked", "true");
      input.setAttribute("checked", "checked");
      checkbox.querySelector("span").classList.remove("dates__checkbox-indicator--selected");
      break;
  }
}

function addListenersForTransportCheckboxes(arrCheckboxes) {
  for (let i = 0; i < arrCheckboxes.length; i++) {
    arrCheckboxes[i].addEventListener("keydown", function (evt) {
      if (evt.key === " ") {
        evt.preventDefault();
        changeTransportCheckbox(arrCheckboxes[i], arrCheckboxes[i].querySelector("input"));
      }
    });
    arrCheckboxes[i].addEventListener("click", function () {
      changeTransportCheckbox(arrCheckboxes[i], arrCheckboxes[i].querySelector("input"));
    });
  }
}

function changeTransportCheckbox(checkbox, input) {
  switch (checkbox.getAttribute("aria-checked")) {
    case "true":
      checkbox.setAttribute("aria-checked", "false");
      input.removeAttribute("checked");
      checkbox.querySelector("div").classList.add("transport--inactive");
      break;
    case "false":
      checkbox.setAttribute("aria-checked", "true");
      input.setAttribute("checked", "checked");
      checkbox.querySelector("div").classList.remove("transport--inactive");
      break;
  }
}

function addListenersForCheckboxes(arrCheckboxes) {
  for (let i = 0; i < arrCheckboxes.length; i++) {
    arrCheckboxes[i].addEventListener("keydown", function (evt) {
      if (evt.key === " ") {
        evt.preventDefault();
        changeCheckbox(arrCheckboxes[i], arrCheckboxes[i].querySelector("input"));
      }
    });
    arrCheckboxes[i].addEventListener("click", function () {
      changeCheckbox(arrCheckboxes[i], arrCheckboxes[i].querySelector("input"));
    });
  }
}

function changeCheckbox(checkbox, input) {
  switch (checkbox.getAttribute("aria-checked")) {
    case "true":
      checkbox.setAttribute("aria-checked", "false");
      input.removeAttribute("checked");
      checkbox.classList.remove("filter-options-list__checkbox--selected");
      break;
    case "false":
      checkbox.setAttribute("aria-checked", "true");
      input.setAttribute("checked", "checked");
      checkbox.classList.add("filter-options-list__checkbox--selected");
      break;
  }
}

function initializeCollapseAction(elsBtnFilter) {
  for (let i = 0; i < elsBtnFilter.length; i++) {
    elsBtnFilter[i].addEventListener("click", function () {
      if(elsBtnFilter[i].children[0])
        elsBtnFilter[i].children[0].classList.toggle("filter-options-list__button--collapse");
      if (elsBtnFilter[i].nextElementSibling.nextElementSibling)
        elsBtnFilter[i].nextElementSibling.nextElementSibling.classList.toggle("js-collapse");

      if (elsBtnFilter[i].nextElementSibling.nextElementSibling) {
        if (elsBtnFilter[i].nextElementSibling.nextElementSibling.classList.contains("filter-options-list__wrapper--numbers"))
          elsBtnFilter[i].nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("js-collapse");
      }
    });
  }
}

function initializeFilterCountries(btnFilterCountries, elFilterMainland, elFilterAlphabet, elFilterBody, btnFilterCountriesCollapse, elFilterWrapper) {
  btnFilterCountries.classList.add("filter__btn--show");
  elFilterMainland.classList.add("mainland-list--hidden");
  elFilterAlphabet.classList.add("alphabet-list--hidden");
  elFilterBody.classList.add("filter__by-countries--hidden");
  elFilterWrapper.classList.add("filter__wrapper--show");

  btnFilterCountries.addEventListener("click", function () {
    collapseExpandFilterCountries(btnFilterCountries, elFilterMainland, elFilterAlphabet, elFilterBody, btnFilterCountriesCollapse);
  });

  btnFilterCountriesCollapse.addEventListener("click", function () {
    collapseExpandFilterCountries(btnFilterCountries, elFilterMainland, elFilterAlphabet, elFilterBody, btnFilterCountriesCollapse);
  });
}

function collapseExpandFilterCountries(btnFilterCountries, elFilterMainland, elFilterAlphabet, elFilterBody, btnFilterCountriesCollapse) {
  btnFilterCountries.classList.toggle("filter__btn--close");
  elFilterMainland.classList.toggle("mainland-list--hidden");
  elFilterAlphabet.classList.toggle("alphabet-list--hidden");
  elFilterBody.classList.toggle("filter__by-countries--hidden");
  btnFilterCountriesCollapse.classList.toggle("filter__btn-collapse--show");

  if (btnFilterCountries.classList.contains("filter__btn--close"))
    btnFilterCountries.innerText = "Свернуть";
  else
    btnFilterCountries.innerText = "Показать все";
}

function initializeMenu() {
  let btnToggleMenu = document.querySelector(".js-toggle");
  let elMenu = document.querySelector(".js-menu");
  let imgLogo = document.querySelector(".js-logo");
  let elHeader = document.querySelector(".js-header");
  let btnAuth = document.querySelector(".js-auth-button");
  let btnAuthNoJS = document.querySelectorAll(".contacts-list__auth-button")[1];

  btnToggleMenu.classList.add("header__toggle--show");
  btnToggleMenu.classList.add("header__toggle--open");
  btnAuth.classList.add("button--clone-visible");
  btnAuthNoJS.classList.add("contacts-list__auth-button--hidden");

  let isMenuColorWhite = true;

  btnToggleMenu.addEventListener("click", function () {
    elMenu.classList.toggle("main-nav--hidden");
    elHeader.classList.toggle("header__wrapper--blue");

    (btnToggleMenu.classList.contains("header__toggle--scrollable") || !btnToggleMenu.classList.contains("header__toggle--opened")) ? isMenuColorWhite = false : isMenuColorWhite = true;

    btnToggleMenu.classList.toggle("header__toggle--opened");
    setImagesToWhite(isMenuColorWhite, imgLogo);
    isMenuColorWhite = !isMenuColorWhite;

    checkIfPageIsOnTheTop(btnToggleMenu, imgLogo, elHeader);
  });

  elMenu.classList.add("main-nav--hidden");
  elHeader.classList.add("header__wrapper--blue");

  setImagesToWhite(isMenuColorWhite, imgLogo);
  isMenuColorWhite = !isMenuColorWhite;

  window.addEventListener("scroll", function () {
    checkIfPageIsOnTheTop(btnToggleMenu, imgLogo, elHeader);
  });
}

function checkIfPageIsOnTheTop(btnToggleMenu, imgLogo, elHeader) {
  if (window.pageYOffset === 0 && !btnToggleMenu.classList.contains("header__toggle--opened")) {
    elHeader.classList.remove("header__wrapper--scrollable");
    btnToggleMenu.classList.remove("header__toggle--scrollable");
    setImagesToWhite(true, imgLogo);
    isMenuColorWhite = true;
  } else {
    elHeader.classList.add("header__wrapper--scrollable");
    btnToggleMenu.classList.add("header__toggle--scrollable");
    setImagesToWhite(false, imgLogo);
    isMenuColorWhite = false;
  }
}

function setImagesToWhite(isWhite, imgLogo) {
  let color = "blue";
  if (isWhite)
    color = "white";

  imgLogo.src = "img/logo-mobile-" + color + "@1x.png";
  imgLogo.srcset = "img/logo-mobile-" + color + "@2x.png 2x";

  document.querySelector(".js-header-logo-tablet-png").srcset = "img/logo-tablet-" + color + "@1x.png 1x, img/logo-tablet-" + color + "@2x.png 2x";
  document.querySelector(".js-header-logo-desktop-png").srcset = "img/logo-desktop-" + color + "@1x.png 1x, img/logo-desktop-" + color + "@2x.png 2x";

  document.querySelector(".js-header-logo-mobile-webp").srcset = "img/logo-mobile-" + color + "@1x.webp 1x, img/logo-mobile-" + color + "@2x.webp 2x";
  document.querySelector(".js-header-logo-tablet-webp").srcset = "img/logo-tablet-" + color + "@1x.webp 1x, img/logo-tablet-" + color + "@2x.webp 2x";
  document.querySelector(".js-header-logo-desktop-webp").srcset = "img/logo-desktop-" + color + "@1x.webp 1x, img/logo-desktop-" + color + "@2x.webp 2x";
}

function initModalWindow(elModal) {
  elModal.classList.add("modal--show");

  let btnClose = elModal.querySelector(".js-close-btn");
  btnClose.addEventListener("click", function () {
    elModal.classList.remove("modal--show");
  });

  document.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
      elModal.classList.remove("modal--show");
    }
  });
}

function initializeInteractiveMap(elMap, elInteractiveMap) {
  ymaps.ready(init);

  function init() {

    elMap.classList.toggle("map__wrap--hide");
    elInteractiveMap.classList.toggle("map__interactive-map--show");

    let map = new ymaps.Map("map", {
        center: [59.936250, 30.321222],
        zoom: 16,
        controls: []
      }, {
        searchControlProvider: "yandex#search"
      }),

      MyIconContentLayout = new ymaps.templateLayoutFactory.createClass(
        "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
      ),

      myPlacemark = new ymaps.Placemark([59.936309, 30.321222], {
        hintContent: "",
        balloonContent: ""
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [54, 54],
        iconImageOffset: [-27, -27]
      });

    map.geoObjects.add(myPlacemark);
  }
}
