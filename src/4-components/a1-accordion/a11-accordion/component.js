export const createA11 = ({
  type,
  state,
}) => {
  let icon = "";
  if (state == "open"){
    icon = "fa-minus";
  } else {
    icon = "fa-xmark";
  }
  return `
<div class="act-accordion act-accordion__`+type+`">
  <div class="act-accordion__container">
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <div class="act-accordion__section__heading">
        <span class="act-h5">Section 1</span>
        <i aria-expanded="false" class="fa-solid `+icon+`"></i>
      </div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
    </div>
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <div class="act-accordion__section__heading">
        <span class="act-h5">Section 2</span>
        <i aria-expanded="false" class="fa-solid `+icon+`"></i>
      </div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
    </div>
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <div class="act-accordion__section__heading">
        <span class="act-h5">Section 3</span>
        <i aria-expanded="false" class="fa-solid `+icon+`"></i>
      </div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
    </div>
  </div>
</div>
	`;
};
