import AbstractComponent from "./abstract-component";
import {createItems} from "../utils";

const getPortfolioCardHtml = portfolioData => (
  `<li class="markups-list__item">
    <picture>
      <source type="image/webp" srcset="img/portfolio/preview-${portfolioData.alias}.webp">

      <img class="markups-list__image" src="img/portfolio/preview-${portfolioData.alias}.jpg" alt="Preview of markup ${portfolioData.title}" width="270" height="199">
    </picture>
    <div class="markups-list__links-wrap">
      <a class="markups-list__link" href="${portfolioData.prodLink}">Demo</a>
      <a class="markups-list__link" href="${portfolioData.sourceLink}">Source code</a>
    </div>
    <div class="markups-list__description-wrap">
      <button class="markups-list__description-button js-description-btn" type="button">Description</button>
      <div class="markups-list__description markups-list__description--hidden">${portfolioData.description}</div>
    </div>
  </li>`
);

const createPortfolioTemplate = portfolioData => (
  `<ul class="markups-list">
    ${createItems(portfolioData, getPortfolioCardHtml)}
  </ul>`
);

export default class Portfolio extends AbstractComponent {

  constructor(portfolioData) {
    super();
    this._portfolioData = portfolioData;
  }

  getTemplate() {
    return createPortfolioTemplate(this._portfolioData);
  }
}
