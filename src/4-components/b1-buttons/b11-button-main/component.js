export const createB11 = ({
  label,
  fontawesome,
  size,
  icon,
  type,
  pseudoClass,
  onClick,
}) => {

  

  return `
<button class="act-button act-button__`+type+` act-button__`+size+` act-button__`+icon+`" type="button">
  `+label+`
  <z class="fa-solid `+fontawesome+`"></z>
</button>
	`;
};
