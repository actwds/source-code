export const createL22 = ({
  alt1,
  alt2,
  colour,
  cobrand,
  label,
  type1,
  type2,
}) => {
  return `
<div class="act-logos">
  <div class="act-logos__container">
    <a class="act-logo-`+type1+`" href="#" target="_blank" title="`+alt1+`">
      <img src="/logos/act-govt-`+colour+`-`+type1+`.svg" alt="`+alt1+`"/>
    </a>
    <a class="act-logo-`+type2+`" href="#" target="_self" title="`+alt2+`">
      <img src="/logos/`+cobrand+`-`+colour+`-`+type1+`.svg" alt="`+alt2+`"/>
    </a>
  </div>
</div>
	`;
};
