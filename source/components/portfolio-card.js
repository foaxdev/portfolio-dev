import {createElement} from "../utils";
import {lang} from "../data/lang";

const createCardTemplate = cardData => (
  `<li class="markups-list__item">
    <picture>
      <source type="image/webp" srcset="img/portfolio/preview-${cardData.alias}.webp">

      <img class="markups-list__image" src="img/portfolio/preview-${cardData.alias}.jpg" alt="<?=$lang[$language]["previewOfMarkup"];?> <?=$lang[$language][$project_name]["title"];?>" width="270" height="199">
    </picture>
    <div class="markups-list__links-wrap">
      <a class="markups-list__link" href="${cardData.prodLink}">${lang.en.demo}</a>
      <a class="markups-list__link" href="${cardData.sourceLink}">${lang.en.sourceCode}</a>
    </div>
    <div class="markups-list__description-wrap">
      <button class="markups-list__description-button js-description-btn" type="button">${lang.en.description}</button>
      <div class="markups-list__description markups-list__description--hidden"><?=$lang[$language][$project_name]["description"];?></div>
    </div>
  </li>`
);

export default class PortfolioCard {
  constructor(cardData) {
    this._cardData = cardData;
    this._element = null;
  }

  getTemplate() {
    return createCardTemplate(this._cardData);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
