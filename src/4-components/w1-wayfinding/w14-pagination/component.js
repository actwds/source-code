export const createW14 = ({
  style,
}) => {
  var health = "";
  if (style == "health"){ 
    health = `act-pagination__health`;
  } else {
    health = ``;
  }

  return `
<div class="act-pagination `+health+`">
  <div class="act-pagination__title">
    Pages
  </div>
  <div class="act-page-marker act-page-marker__current">
    1
  </div>
  <div class="act-page-marker">
    2
  </div>
  <div class="act-page-marker">
    3
  </div>
  <div class="act-page-marker">
    4
  </div>
  <div class="act-page-marker act-page-marker__more">
    ...
  </div>
  <div class="act-page-marker">
    99
  </div>
  <div class="act-page-marker">
    <z class="fa-solid fa-angle-right"></z>
  </div>
</div>
`;
};
