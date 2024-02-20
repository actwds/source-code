export const createW13 = () => {

  return `
<div class="act-sidebar">
  <div class="act-sidebar__title">
    <a href="#">Title - Level 1</a>
  </div>
  <details class="act-sidebar__item">
    <summary class="act-sidebar__item__summary">
      <a href="#">Dropdown - Level 2</a>
      <div class="summary-chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </summary>
    <details class="act-sidebar__item">
      <summary class="act-sidebar__item__summary has-children">
        <a href="#" class="act-sidebar__item__dropdown__child-link">Current page - Level 3</a>
        <div class="summary-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </summary>
        <ul class="act-sidebar__item__dropdown">
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link active hierarchy has-children">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
        </ul>
    </details>
  </details>
  <details class="act-sidebar__item">
    <summary class="act-sidebar__item__summary has-children">
      <a href="#">Dropdown - Level 2</a>
      <div class="summary-chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </summary>
    <details class="act-sidebar__item">
      <summary class="act-sidebar__item__summary has-children">
        <a href="#" class="act-sidebar__item__dropdown__child-link">Current page - Level 3</a>
        <div class="summary-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </summary>
        <ul class="act-sidebar__item__dropdown">
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link active hierarchy has-children">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
        </ul>
    </details>
  </details>
  <details class="act-sidebar__item" open>
    <summary class="act-sidebar__item__summary selected has-children">
      <a href="#">Current page - Level 2</a>
      <div class="summary-chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </summary>
    <details class="act-sidebar__item" open>
      <summary class="act-sidebar__item__summary has-children selected">
        <a href="#" class="act-sidebar__item__dropdown__child-link">Current page - Level 3</a>
        <div class="summary-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </summary>
        <ul class="act-sidebar__item__dropdown">
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link active hierarchy has-children selected">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
        </ul>
    </details>
    <details class="act-sidebar__item">
      <summary class="act-sidebar__item__summary">
        <a href="#" class="act-sidebar__item__dropdown__child-link">Link - Level 3</a>
        <div class="summary-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </summary>
    </details>
    <details class="act-sidebar__item">
      <summary class="act-sidebar__item__summary has-children">
        <a href="#" class="act-sidebar__item__dropdown__child-link">Link - Level 3</a>
        <div class="summary-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </summary>
        <ul class="act-sidebar__item__dropdown">
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link active hierarchy has-children">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
          <li class="act-sidebar__item__dropdown__item">
            <a href="#" class="act-sidebar__item__dropdown__child-link normal">Level 4</a>
          </li>
        </ul>
      </details>
  </details>
</div>
`;
};
