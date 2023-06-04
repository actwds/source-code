export const createA21 = ({
  alert,
  dismissible,
  fontawesome,
  icon,
  type,
}) => {

  var dismissibleHTML;

  if ( dismissible == true){
    dismissibleHTML = "act-alert-global__dismiss-true";
  } else {
    dismissibleHTML = "act-alert-global__dismiss-false";
  }

  return `
<div class="act-alert-global act-alert-global__`+type+` act-alert-global__`+icon+` `+dismissibleHTML+`" role="alert">
  <div class="act-alert-global__container">
    <div class="act-alert-global__content">
      <i class="fa-solid `+fontawesome+`"></i> <a class="" href="#" target="_self" title="">`+alert+`</a>
    </div>
    <div class="act-alert-global__content">
      <i class="fa-solid fa-xmark act-alert-global__dismiss"></i>
    </div>
  </div>
</div>
`;
};
