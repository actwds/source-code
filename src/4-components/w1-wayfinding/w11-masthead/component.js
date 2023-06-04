import { createB11 } from "../../b1-buttons/b11-button-main/component";

export const createW11 = ({
  title,
  buttonText,
}) => {

  const button = createB11({
    type: "primary",
    size: "xsmall",
    icon: "no-icon",
    label: buttonText,
  });

  const mastheadHTML = `
  <div class="act-masthead">
    <div class="act-masthead__container">
      <div class="act-masthead__content left">
        <span class="sr-only">
          `+title+`
        </span>
      </div>
      <div class="act-masthead__content right">
        <div class="act-masthead__nav">
          <a class="act-button act-button__inline act-button__inline-white act-button__inline-small" href="#" target="_self" title="Accessibility">
            Accessibility
          </a>
          <a class="act-button act-button__inline act-button__inline-white act-button__inline-small" href="#" target="_self" title="Language">
            Language
          </a>
          <a class="act-button act-button__inline act-button__inline-white act-button__inline-small" href="#" target="_self" title="Contact us">
            Contact us
          </a>
        </div>
        `+button+`
      </div>
    </div>
  </div>
	`;
  const masthead = document.createElement("div");
  masthead.className = "sb-act-masthead";
  masthead.innerHTML = mastheadHTML;
  const mastheadExport = masthead.innerHTML;
  return mastheadExport;
};
