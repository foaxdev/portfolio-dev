import AbstractComponent from "./abstract-component";

const createAboutMeTemplate = portfolioData => (
  `<b class="about-me__name">${portfolioData.name}</b>
  <p class="about-me__age">${portfolioData.age}</p>
  <p class="about-me__location">${portfolioData.location}</p>
  <p class="about-me__profession">${portfolioData.position}</p>`
);

export default class AboutMe extends AbstractComponent {

  constructor(myData) {
    super();
    this._myData = myData;
  }

  getTemplate() {
    return createAboutMeTemplate(this._myData);
  }
}
