import AbstractComponent from "./abstract-component";
import {createItems} from "../utils";

const getMenuItemHtml = menuData => `<li class="nav-list_item"><a class="nav-list_link" href="#${menuData.alias}">${menuData.title}</a></li>`;

const createMenuTemplate = menuData => (
  `<nav class="main-nav js-nav">
    <ul class="nav-list">
      ${createItems(menuData, getMenuItemHtml)}
    </ul>
  </nav>`
);

export default class Menu extends AbstractComponent {

  constructor(menuTitles) {
    super();
    this._menuTitles = menuTitles;
  }

  getTemplate() {
    return createMenuTemplate(this._menuTitles);
  }
}
