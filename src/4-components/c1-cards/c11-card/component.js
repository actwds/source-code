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
    tag2: tag2,
    colour: "black",
  });

  var featureImageHTML = "";
  var featureIconHTML = "";
  var featureTagHTML = "";
  var featureDateHTML = "";
  var featureHeaderHTML = `<span class="act-card__title">`+header+`</span>`;
  var featureDescriptionHTML = `<span class="act-card__description">`+description+`</span>`;
  var featureCTAHTML = "";
  var tagTypeOpen = "a";
  var tagTypeClose = "as";

  if (type != "homepage"){
    if (feature == "image"){
      if (type == "bordered"){
        if (tagVisible == true){
          featureTagHTML = `<div class="act-tag__container">` + tags1HTML +  `</div>` ;
        } else {
          featureTagHTML = "";
        }
        featureImageHTML = `<div class="act-card__image" style="background-image: url('/images/purple.jpg');">
        &nbsp;
      </div>`;} else if (type == "borderless") {
        featureImageHTML = `<div class="act-card__image" style="background-image: url('/images/purple.jpg');">
        &nbsp;
      </div>`;
      } else {
        featureImageHTML = "";
      }
    } else if (feature == "icon"){
      featureIconHTML = `<div class="act-card__icon"><z class="fa-solid `+icon+`"></z></div>`;
    }
  }

  if (type == "homepage"){
    featureIconHTML = `<div class="act-card__icon"><z class="fa-solid `+icon+`"></z></div>`;
  }

  if (dateVisible == true){
    featureDateHTML = `<div class="act-card__timestamp">20 Sept 2022</div>`;
  }





  if (ctaVisible == true){
    featureCTAHTML = `<span class="act-card__cta">
      <z class="fa-solid fa-arrow-right"></z>
      <span>`+ctaText+`</span>
    </span>`;
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
