
export const createC29= ({
  type,
}) => {
  var typeHTML = "";
  if (type == "grid"){
    typeHTML = `-grid`;
  }

  return `
<div class="act-links-list">
  <ul class="act-links-list__content`+typeHTML+`">
    <li class="act-links-list__content`+typeHTML+`__item">
      <a href="#" class="act-links-list__content`+typeHTML+`__item__text">Link #1
        <div class="act-links-list__content`+typeHTML+`__item__icon">
          <z class="fa-solid fa-arrow-right"></z>
        </div>
      </a>
    </li>
    <li class="act-links-list__content`+typeHTML+`__item">
      <a href="#" class="act-links-list__content`+typeHTML+`__item__text">Link #2
        <div class="act-links-list__content`+typeHTML+`__item__icon">
          <z class="fa-solid fa-arrow-right"></z>
        </div>
      </a>
    </li>
    <li class="act-links-list__content`+typeHTML+`__item">
      <a href="#" class="act-links-list__content`+typeHTML+`__item__text">Link #3
        <div class="act-links-list__content`+typeHTML+`__item__icon">
          <z class="fa-solid fa-arrow-right"></z>
        </div>
      </a>
    </li>
    <li class="act-links-list__content`+typeHTML+`__item">
      <a href="#" class="act-links-list__content`+typeHTML+`__item__text">Link #4
        <div class="act-links-list__content`+typeHTML+`__item__icon">
          <z class="fa-solid fa-arrow-right"></z>
        </div>
      </a>
    </li>
  </ul>
</div>
`;
};