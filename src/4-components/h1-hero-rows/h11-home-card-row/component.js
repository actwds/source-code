import { createC11 } from "../../../4-components/c1-cards/c11-card/component";

export const createH11 = () => {

  const card1HTML = createC11({
    type: "homepage",
    feature: "icon",
    icon: "fa-pizza-slice",
    dateVisible: false,
    tagVisible: false,
    header: "Card 1",
    description: "Card 1",
    ctaVisible: true,
  });

  return `
<div class="act-hero-row__cards">
  <div class="act-hero-row__cards__container">
    <div class="act-box">
      <h1>Homepage Card Row</h1>
      <h4>H4 Subheading</h4>
      <div class="act-card-grid">
        `+card1HTML+`
        `+card1HTML+`
        `+card1HTML+`
        `+card1HTML+`
      </div>
    </div>
  </div>
</div>
`;};
