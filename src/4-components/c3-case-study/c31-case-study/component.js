import { createT31 } from "../../../4-components/t3-tags/t31-tags/component";

export const createC31 = ({
  heading,
  tagVisible,
  imageVisible,
  buttonVisible,
  tag1,
  tag2,
}) => {

  const tags1HTML = createT31({
    style: "stroke",
    tag1: tag1,
    tag2: tag2,
    colour: "purple",
  });

  let featureTagHTML = ``;
  let featureImageHTML = ``;
  let buttonHTML = ``;
  let featureDescriptionHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum a felis porta vulputate. Etiam condimentum blandit tellus, in molestie purus fermentum et. Nunc vestibulum sapien sit amet ex facilisis, et malesuada sapien malesuada. In bibendum eget sem sit amet tempor. Cras fringilla enim a lacus fringilla, vitae aliquam nulla gravida. Vestibulum feugiat sed est quis sagittis. Proin eu leo ac metus varius malesuada. Sed imperdiet pulvinar orci vel euismod. Nullam placerat mollis nisl, quis rutrum nisi varius eget. Maecenas quis ex at libero blandit convallis id ut massa. Sed efficitur neque eu enim rhoncus posuere. Integer at dolor facilisis, vestibulum massa quis, ornare orci. Nullam suscipit non neque nec elementum. Vivamus et lacus metus. Sed tempus ac dolor id commodo. Pellentesque lacus urna, tempor sit amet libero vel, finibus ultrices ex.</p>`;

  if (tagVisible == true){
    featureTagHTML = `<div class="act-tag__container">` + tags1HTML +  `</div>`;
  } else {
    featureTagHTML = ``;
  }

  if (imageVisible == true){
    featureImageHTML = `<div class="act-case-study__image""><img src="/images/purple.jpg" alt=""></div>`;
  } else {
    featureImageHTML = ``;
  }

  if (buttonVisible == true){
    buttonHTML = `
    <a class="act-button act-button__secondary act-button__default act-button__icon-right" type="button">
      Read more <z class="fa-solid fa-arrow-right"></z>
      </a>`;
  } else {
    buttonHTML = ``;
  }

  return `
  <div class="act-case-study">
    <div class="act-case-study__container">
      <div class="act-case-study__content">
      `+featureTagHTML+`
        <span class="act-case-study__title">`+heading+`</span>
        `+featureImageHTML+`
        <div class="act-case-study__description">
        `+featureDescriptionHTML+`
        </div>
        `+buttonHTML+`
      </div>    
    </div>
  </div>
`;
};
