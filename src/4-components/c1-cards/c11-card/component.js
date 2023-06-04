import { createT31 } from "../../../4-components/t3-tags/t31-tags/component";

export const createC11 = ({
  type,
  feature,
  icon,
  tag,
  dateVisible,
  tagVisible,
  tag1,
  tag2,
  header,
  description,
  ctaVisible,
  ctaText,
}) => {

  const tags1HTML = createT31({
    style: "stroke",
    tag1: tag1,
  });
  const tags2HTML = createT31({
    style: "stroke",
    tag2: tag2,
  });

  var featureImageHTML = "";
  var featureIconHTML = "";
  var featureTagHTML = "";
  var featureDateHTML = "";
  var featureHeaderHTML = `<div class="act-card__title">`+header+`</div>`;
  var featureDescriptionHTML = `<div class="act-card__description">`+description+`</div>`;
  var featureCTAHTML = "";

  if (type != "homepage"){
    if (feature == "image"){
      if (type == "primary"){
        if (tagVisible == true){
          featureTagHTML = `<div class="act-tag__container">` + tags1HTML + tags2HTML + `</div>` ;
        } else {
          featureTagHTML = "";
        }
        featureImageHTML = `<div class="act-card__image" style="background-image: url('/images/purple.jpg');">
        &nbsp;
      </div>`;} else {
        featureImageHTML = "";
      }
    } else if (feature == "icon"){
      featureIconHTML = `<div class="act-card__icon"><i class="fa-solid `+icon+`"></i></div>`;
    }
  }

  if (type == "homepage"){
    featureIconHTML = `<div class="act-card__icon"><i class="fa-solid `+icon+`"></i></div>`;
  }

  if (dateVisible == true){
    featureDateHTML = `<div class="act-card__timestamp">20 Sept 2022</div>`;
  }





  if (ctaVisible == true){
    featureCTAHTML = `<div class="act-card__cta">
      <i class="fa-solid fa-arrow-right"></i>
      <span>`+ctaText+`</span>
    </div>`;
  }

  return `
<a class="act-card act-card__`+type+` act-card__feature--`+feature+`" href="#" title="Card Link">
  <div class="act-card__container">
    `+featureImageHTML+`
    <div class="act-card__content">
      `+featureIconHTML+`
      `+featureDateHTML+`
      `+featureTagHTML+`
      `+featureHeaderHTML+`
      `+featureDescriptionHTML+`
      `+featureCTAHTML+`
    </div>
  </div>
</a>
`;
};
