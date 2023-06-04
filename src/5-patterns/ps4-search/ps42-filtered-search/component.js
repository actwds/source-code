import { createS11 } from "../../../4-components/s1-search-elements/s11-search-result/component";
import { createS12 } from "../../../4-components/s1-search-elements/s12-search-bar/component";
import { createS13 } from "../../../4-components/s1-search-elements/s13-search-stats/component";
import { createS14 } from "../../../4-components/s1-search-elements/s14-search-filter/component";

export const createPS42 = () => {

  const searchResultHTML = createS11({});
  const searchBarHTML = createS12({});
  const searchStatsHTML = createS13({});
  const searchFilterHTML = createS14({});

  const contentHTML = `
<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-8">
          <div class="act-box">
            `+searchBarHTML+`
            `+searchStatsHTML+`
            <div class="act-search-results-container">
              `+searchResultHTML+`
              `+searchResultHTML+`
              `+searchResultHTML+`
              `+searchResultHTML+`
              `+searchResultHTML+`
            </div>
          </div>
        </div>
        <div class="act-col__cw-4">
          <div class="act-box">
            `+searchFilterHTML+`
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
