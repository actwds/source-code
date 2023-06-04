import { createB11 } from "../../../4-components/b1-buttons/b11-button-main/component";

export const createC24 = ({
  content,
}) => {

  const button1HTML = createB11({
    type: "primary",
    size: "small",
    icon: "no-icon",
    label: "Action 1",
  });
  const button2HTML = createB11({
    type: "secondary",
    size: "small",
    icon: "no-icon",
    label: "Action 2",
  });

  return `
<div class="act-service-card">
  <div class="act-service-card__title">
    Title
  </div>
  <div class="act-service-card__body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
  <div class="act-service-card__cta">
    `+button1HTML+button2HTML+`
  </div>
</div>
`;
};
