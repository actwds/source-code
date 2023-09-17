export const createC23 = ({
  content,
}) => {
  return `
<div class="act-quote">
  <div class="act-quote__icon">
    <z class="fa-solid fa-quote-left"></z>
  </div>
  <div class="act-quote__content">
    `+content+`
  </div>
</div>
`;
};
