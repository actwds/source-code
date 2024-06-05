import { createT31 } from "../../t3-tags/t31-tags/component";

export const createC210 = ({
  heading,
  headingLevel,
  iconVisible,
  icon,
  imageVisible,
  description,
  linksVisible,
  links1,
  links2,
  links3,
  links4,
}) => {
  let iconVisibleHTML = ``;
  let featureIconHTML = ``;
  let imageVisibleHTML = ``;
  let featureImageHTML = ``;
  let linksListVisibleHTML = ``;
  let featureDescriptionHTML = description;
  let linksHTML = ``;

  if (headingLevel == "h2") {
    headingLevel = "h2";
  } else {
    headingLevel = "h3";
  }
  
  if (iconVisible == true) {
    iconVisibleHTML = `act-content-block__feature--icon`;
    featureIconHTML = `<div class="act-content-block__icon"><z class="fa-solid `+icon+`"></z></div>`;
  } else {
    iconVisibleHTML = ``;
    featureIconHTML = ``;
  }

  if (imageVisible == true) {
    imageVisibleHTML = `act-content-block__feature--image`;
    featureImageHTML = `<div class="act-content-block__image" style="background-image: url('/images/purple.jpg');"></div>`;
  } else {
    imageVisibleHTML = ``;
    featureImageHTML = ``;
  }

  if (linksVisible == true) {
    linksListVisibleHTML = `act-content-block__feature--links-list`;
    linksHTML = `
    <div class="act-links-list">
      <div class="act-links-list__container">
        <ul class="act-links-list__content">
          <li class="act-links-list__content__item">
            <a href="#" class="act-links-list__content__item__text">`+links1+`
              <div class="act-links-list__content__item__icon">
                <z class="fa-solid fa-arrow-right"></z>
              </div>
            </a>
          </li>
          <li class="act-links-list__content__item">
            <a href="#" class="act-links-list__content__item__text">`+links2+`
              <div class="act-links-list__content__item__icon">
                <z class="fa-solid fa-arrow-right"></z>
              </div>
            </a>
          </li>
          <li class="act-links-list__content__item">
            <a href="#" class="act-links-list__content__item__text">`+links3+`
              <div class="act-links-list__content__item__icon">
                <z class="fa-solid fa-arrow-right"></z>
              </div>
            </a>
          </li>
          <li class="act-links-list__content__item">
            <a href="#" class="act-links-list__content__item__text">`+links4+`
              <div class="act-links-list__content__item__icon">
                <z class="fa-solid fa-arrow-right"></z>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>`;
  }

  return `
  <div class="act-content-block `+imageVisibleHTML+` `+iconVisibleHTML+` `+linksListVisibleHTML+`">
    <div class="act-content-block__container">
      <div class="act-content-block__content">
        `+featureIconHTML+`
        `+featureImageHTML+`
        <`+headingLevel+` class="act-content-block__title">`+heading+`</`+headingLevel+`>
        <span class="act-content-block__description">`+featureDescriptionHTML+`</span>
      </div>
      `+linksHTML+`
    </div>
  </div>
`;
};
