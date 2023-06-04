export const createC12 = ({
  header,
  description,
}) => {
  return `
<a class="act-card act-card__featured" href="#" title="Card Link">
  <div class="act-card__container">
    <div class="act-card__content">
      <div class="act-card__title">`+header+`</div>
      <div class="act-card__description">`+description+`</div>
      <div class="act-card__cta">
        <i class="fa-solid fa-arrow-right"></i>
        <span>Learn more</span>
      </div>
    </div>
  </div>
</a>
`;
};
