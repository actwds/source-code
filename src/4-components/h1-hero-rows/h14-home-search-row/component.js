import { createS12 } from "../../../4-components/s1-search-elements/s12-search-bar/component";

export const createH14 = () => {

  const searchBarHTML = createS12();

  return `
<div class="act-hero-row__search">
  <div class="act-hero-row__search__container">
    <div class="act-col__cw-12">
      <div class="act-box">
        <div class="act-hero-row__search__position act-hero-row__search__position__demo">
          <div class="act-hero-row__search__frame act-hero-row__search__frame__demo">
            <div class="act-col__cw-6">
              <h3>An easier way to access government services</h3>
            </div>
            <div class="act-col__cw-6">
              `+searchBarHTML+`
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;};
