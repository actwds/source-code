export const createL21 = ({
  alt,
  colour,
  label,
  type,
}) => {
  return `
<div class="act-logos">
  <div class="act-logos__container">
    <div class="act-logo-`+type+`">
      <img src="/logos/act-govt-`+colour+`-`+type+`.svg" alt="`+alt+`"/>
    </div>
  </div>
</div>
	`;
};
