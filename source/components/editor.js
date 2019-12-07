import {createElement} from "../utils";
import AbstractComponent from "./abstract-component";

const createEditorTemplate = editorData => (
  `<li class="graphic-editors-list__item">
    <picture>
      <source type="image/webp" srcset="img/graphic-editors/logo-${editorData.alias}.webp">

      <img class="graphic-editors-list__image" src="img/graphic-editors/logo-${editorData.alias}.png" alt="${editorData.title} logotype" width="60" height="60">
    </picture>
    <span class="graphic-editors-list__title">${editorData.title}</span>
  </li>`
);

export default class Editor extends AbstractComponent {
  constructor(editorData) {
    super();
    this._editorData = editorData;
  }

  getTemplate() {
    return createEditorTemplate(this._editorData);
  }
}
