import { createC210 } from "../../4-components/c2-content/c210-content-block/component";

export const createPC210 = ({
  heading,
  iconVisible,
  icon,
  imageVisible,
  description,
  linksVisible,
  links1,
  links2,
  links3,
  links4,
}) => {
  const contentBlock1HTML = createC210({
    heading,
    iconVisible,
    icon,
    imageVisible,
    description,
    linksVisible,
    links1,
    links2,
    links3,
    links4,
  });

  return `
    <div class="act-content-block-grid">
      `+contentBlock1HTML+contentBlock1HTML+contentBlock1HTML+contentBlock1HTML+`
    </div>
  `;
};