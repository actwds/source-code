export const createT31 = ({
  tag1,
  style,
}) => {

  return `
<div class="act-tag act-tag__`+style+`">
 `+tag1+`
</div>
<div class="act-tag act-tag__`+style+`">
 `+tag1+`
</div>
`;
};
