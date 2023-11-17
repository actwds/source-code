import { createC29 } from "../../../4-components/c2-content/c29-links-list/component";

export const createW18 = () => {

  const linksListHTML = createC29({});

  const contentHTML = `
<div class="act-flex act-flex-light-grey act-popular-links">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-4">
          <div class="act-box act-box__content">
            <h2>Popular links</h2>
          </div>
        </div>
        <div class="act-col__cw-4">
          <div class="act-box act-box__content">
            ` + linksListHTML +`
          </div>
        </div>
        <div class="act-col__cw-4">
          <div class="act-box act-box__content">
            `+ linksListHTML +`
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  const content = document.createElement("div");
  content.class = "sb-act-bottom";
  content.innerHTML = contentHTML;
  const contentExport = content.innerHTML;
  return contentExport;

};
