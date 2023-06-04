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
          <div class="act-navbar__search__container act-h5">
            <input class="act-navbar__search__text" placeholder="Search"/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="act-navbar__menu">
          <div class="act-navbar__menu__container act-h5">
            <span class="act-navbar__menu__text">Menu</span> <i class="fa-solid fa-bars"></i>
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
