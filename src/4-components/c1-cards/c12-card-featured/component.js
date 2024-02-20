export const createC12 = ({
  header,
  description,
}) => {
  return `
<a class="act-card act-card__featured" href="#" title="Card Link">
  <div class="act-card__container">
    <div class="act-card__content">
      <span class="act-card__title">`+header+`</span>
      <span class="act-card__description">`+description+`</span>
      <span class="act-card__cta">
        <z class="fa-solid fa-arrow-right"></z>
        <span>Learn more</span>
      </span>
    </div>
  </div>
</a>
`;
};
