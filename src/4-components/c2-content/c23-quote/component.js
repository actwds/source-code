export const createC23 = ({
  content,
}) => {
  return `
<div class="act-quote">
  <div class="act-quote__icon">
    <i class="fa-solid fa-quote-left"></i>
  </div>
  <div class="act-quote__content">
    `+content+`
  </div>
</div>
`;
};
