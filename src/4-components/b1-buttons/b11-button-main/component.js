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
  <i class="fa-solid `+fontawesome+`"></i>
</button>
	`;
};
