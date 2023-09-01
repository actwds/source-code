import { createS12 } from "../../../4-components/s1-search-elements/s12-search-bar/component";

export const createH14 = () => {

  const searchBarHTML = createS12();

  return `
<div class="act-box">
  <div class="act-hero-row__search">
    <div class="act-hero-row__search__container">
      <div class="act-col__cw-12">
        <div class="act-box">
          <div class="act-hero-row__search__position">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="act-hero-row__container">
    <div class="act-hero-row__search__frame">
      <div class="act-col__cw-6">
        <span class="act-h3">An easier way to access government services</span>
      </div>
      <div class="act-col__cw-6">
        `+searchBarHTML+`
      </div>
    </div>
  </div>
</div>
`;};


