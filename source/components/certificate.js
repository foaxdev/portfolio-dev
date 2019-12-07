import AbstractComponent from "./abstract-component";
import {createItems} from "../utils";

const getCertificateHtml = certificateData => (
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

const createCertificateTemplate = certificateData => (
  `<ul class="certificates-list">
    ${createItems(certificateData, getCertificateHtml)}
  </ul>`
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
