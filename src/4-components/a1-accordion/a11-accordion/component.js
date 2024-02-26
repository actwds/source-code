export const createA11 = ({
  type,
  state,
  heading,
}) => {
  let icon = "";
  if (state == "open"){
    icon = "fa-chevron-down";
  } else {
    icon = "fa-chevron-down";
  }
  if (heading == "h2") {
    heading = "h2";
  } else if (heading == "h3") {
    heading = "h3";
  } else if (heading == "h4") {
    heading = "h4";
  } else if (heading == "h5") {
    heading = "h5";
  } else {
    heading = "span";
  }
  return `
<div class="act-accordion act-accordion__`+type+`">
  <div class="act-accordion__container">
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <a href="#" class="act-accordion__section__heading">
        <`+heading+` class="act-h5">Section 1</`+heading+`>
        <z aria-expanded="false" class="fa-solid `+icon+`"></z>
      </a>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
    </div>
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <a href="#" class="act-accordion__section__heading">
        <`+heading+` class="act-h5">Section 2</`+heading+`>
        <z aria-expanded="false" class="fa-solid `+icon+`"></z>
      </a>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
    </div>
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <a href="#" class="act-accordion__section__heading">
        <`+heading+` class="act-h5">Section 3</`+heading+`>
        <z aria-expanded="false" class="fa-solid `+icon+`"></z>
      </a>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
      <div class="act-accordion__section__content">Content</div>
    </div>
  </div>
</div>
	`;
};
