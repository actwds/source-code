export const createB13 = ({
  label,
  fontawesome,
  size,
  icon,
  type,
  pseudoClass,
  onClick,
}) => {

  var pseudoClassHTML;

  if ( pseudoClass != ""){pseudoClassHTML = "act-button__"+type+"-"+pseudoClass;
  } else {pseudoClassHTML = "";
  }

  //TODO: remove all the customisations from the button and make it a generic button

  return `
<button class="act-button act-button__primary act-button__default act-button__back-to-top act-button__back-to-top__`+size+` act-button__icon-right" type="button">
  <z class="fa-solid fa-arrow-up"></z>
</button>
	  `;
};
