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
      <z class="fa-solid `+fontawesome+`"></z> <a class="" href="#" target="_self" title=""><p>`+alert+`</p></a>
    </div>
    <div class="act-alert-global__content">
      <button href="#" class="act-alert-global__content__button" id="global-alert-close" aria-label="Dismiss global alert"><z class="fa-solid fa-xmark act-alert-global__dismiss"></z></button>
    </div>
  </div>
</div>
`;
};
