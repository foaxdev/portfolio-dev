import AbstractComponent from "./abstract-component";

const createCardTemplate = cardData => (
  `<li class="markups-list__item">
    <picture>
      <source type="image/webp" srcset="img/portfolio/preview-${cardData.alias}.webp">

      <img class="markups-list__image" src="img/portfolio/preview-${cardData.alias}.jpg" alt="Preview of markup ${cardData.title}" width="270" height="199">
    </picture>
    <div class="markups-list__links-wrap">
      <a class="markups-list__link" href="${cardData.prodLink}">Demo</a>
      <a class="markups-list__link" href="${cardData.sourceLink}">Source code</a>
    </div>
    <div class="markups-list__description-wrap">
      <button class="markups-list__description-button js-description-btn" type="button">Description</button>
      <div class="markups-list__description markups-list__description--hidden">${cardData.description}</div>
    </div>
  </li>`
);

export default class PortfolioCard extends AbstractComponent {

  constructor(cardData) {
    super();
    this._cardData = cardData;
  }

  getTemplate() {
    return createCardTemplate(this._cardData);
  }
}
