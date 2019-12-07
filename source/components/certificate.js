import AbstractComponent from "./abstract-component";

const createCertificateTemplate = certificateData => (
  `<li class="certificates-list__item">
    <a class="certificates-list__link" href="${certificateData.link}">
      <picture>
        <source type="image/webp" media="(min-width: 768px)" srcset="img/certificates/${certificateData.alias}-tablet.webp">
        <source type="image/webp" srcset="img/certificates/${certificateData.alias}-mobile.webp">

        <source media="(min-width: 768px)" srcset="img/certificates/${certificateData.alias}-tablet.png">
        <img class="certificates-list__image" src="img/certificates/${certificateData.alias}-mobile.png" alt="Certificate" width="125" height="175">
      </picture>
      <p class="certificates-list__title">${certificateData.title}</p>
    </a>
  </li>`
);

export default class Certificate extends AbstractComponent {
  constructor(certificateData) {
    super();
    this._certificateData = certificateData;
  }

  getTemplate() {
    return createCertificateTemplate(this._certificateData);
  }
}
