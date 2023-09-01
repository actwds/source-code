export const createS12 = () => {

  return `
<div class="act-search-bar">
  <form action="/search">
    <input class="act-search-bar__input" placeholder="Search..." type="text" name="query" aria-label="Search box"/>
    <button class="act-search-bar__button" aria-label="Search button">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</div>
`;};
