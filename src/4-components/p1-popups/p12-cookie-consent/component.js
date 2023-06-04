import { createB11 } from "../../b1-buttons/b11-button-main/component";

export const createP12 = ({
  type,
}) => {

  const buttonPrimaryHTML = createB11({
    type: "primary",
    size: "default",
    icon: "no-icon",
    label: "Accept",
  });
  const buttonSecondaryHTML = createB11({
    type: "secondary",
    size: "default",
    icon: "no-icon",
    label: "Secondary Button",
  });

  return `
<div class="act-popup bottom">
  <div class="act-popup__container act-cookie-consent">
    <div class="act-popup__content">
      <div class="act-popup__block ">
        <div class="act-h4">Cookie Consent Banner</div>
        <div class="act-popup__close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="act-popup__block">
        <p>This is a cookie consent banner where you can explain why you are using cookies here.</p>
        <div class="act-button-group">
        `+buttonPrimaryHTML+``+buttonSecondaryHTML+`
        </div>
      </div>
    </div>
  </div>
</div>
`;
};
