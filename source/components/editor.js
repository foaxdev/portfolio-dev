import {createElement} from "../utils";

const createEditorTemplate = editorData => (
  `<li class="graphic-editors-list__item">
    <picture>
      <source type="image/webp" srcset="img/graphic-editors/logo-${editorData.alias}.webp">

      <img class="graphic-editors-list__image" src="img/graphic-editors/logo-${editorData.alias}.png" alt="${editorData.title} logotype" width="60" height="60">
    </picture>
    <span class="graphic-editors-list__title">${editorData.title}</span>
  </li>`
);

export default class Editor {
  constructor(editorData) {
    this._editorData = editorData;
    this._element = null;
  }

  getTemplate() {
    return createEditorTemplate(this._editorData);
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
