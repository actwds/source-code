export const createA22 = ({
  alert,
  description,
  fontawesome,
  icon,
  type,
}) => {
  return `
<div class="act-alert-inpage act-alert-inpage__`+type+` act-alert-inpage__`+icon+`" role="alert">
  <div class="act-alert-inpage__container">
    <div class="act-alert-inpage__content act-alert-inpage__icon">
      <z class="fa-solid `+fontawesome+`"></z>
    </div>
    <div class="act-alert-inpage__content">
      <div class="title">`+alert+`</div>
      `+description+`
    </div>
  </div>
</div>
`;
};
