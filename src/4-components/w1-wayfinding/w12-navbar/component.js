import { createL22 } from "../../l2-logos/l22-cobranded-logo/component";

export const createW12 = ({
  title,
}) => {

  const logo = createL22({
    colour: "black",
    cobrand: "access-canberra",
    type1: "horizontal",
    type2: "cobrand-logo",
    alt1: "ACT Government",
    alt2: "Access Canberra",
  });

  const navbarHTML = `
  <div class="act-navbar">
    <div class="act-navbar__container">
      <div class="act-navbar__content">
        `+logo+`
      </div>
      <div class="act-navbar__content">
        <div class="act-navbar__search">
          <div class="act-navbar__search__container">
            <form class="act-navbar__search__container__form" action="/search">
              <input class="act-navbar__search__text" placeholder="Search"/>
              <z class="fa-solid fa-magnifying-glass"></z>
            </form>
          </div>
          <div class="act-navbar__search__container">
            <z class="fa-solid fa-magnifying-glass"></z>
          </div>
        </div>
        <div class="act-navbar__menu">
          <div class="act-navbar__menu__container">
            <span class="act-navbar__menu__text">Menu</span> <z class="fa-solid fa-bars"></z>
          </div>
        </div>
      </div>
    </div>
  </div>
	`;

  const navbar = document.createElement("div");
  navbar.className = "sb-act-navbar";
  navbar.innerHTML = navbarHTML;
  const navbarExport = navbar.innerHTML;
  return navbarExport;

};
