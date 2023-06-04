import { createA21 } from "../../4-components/a2-alerts/a21-alert-global/component";
import { createW11 } from "../../4-components/w1-wayfinding/w11-masthead/component";
import { createW12 } from "../../4-components/w1-wayfinding/w12-navbar/component";

export const createPT1 = () => {

  const alertHTML = createA21({
    type: "success",
    alert: "<span>Free registration</span> for zero emission vehicles for two years",
    fontawesome: "fa-leaf",
    icon: "icon-left",
    dismissible: true,
  });
  const mastheadHTML = createW11({
    title: "An ACT Government Website",
    buttonText: "Log In",
  });
  const navbarHTML = createW12({
    title: "An ACT Government Website1",
  });

  const topbarHTML = alertHTML + `
<header class="act-header">
  ` + mastheadHTML + navbarHTML + `
</header>
`;

  const topbar = document.createElement("div");
  topbar.className = "sb-act-topbar";
  topbar.innerHTML = topbarHTML;
  const topbarExport = topbar.innerHTML;
  return topbarExport;

};
