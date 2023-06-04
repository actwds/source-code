export const createL23 = ({
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
    <a class="act-logo-`+type2+` act-p-large" href="#" target="_self" title="`+alt2+`">
      `+alt2+`
    </a>
  </div>
</div>
	`;
};
