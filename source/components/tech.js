import AbstractComponent from "./abstract-component";
import {createItems} from "../utils";

const getTechHtml = techData => `<li class="tech-list__item">${techData}</li>`;

const createTechTemplate = techData => (
  `<ul class="tech-list">
    ${createItems(techData, getTechHtml)}
  </ul>`
);

export default class Tech extends AbstractComponent {

  constructor(techData) {
    super();
    this._techData = techData;
  }

  getTemplate() {
    return createTechTemplate(this._techData);
  }
}
