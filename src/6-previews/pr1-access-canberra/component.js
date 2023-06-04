import { createL22 } from "../../4-components/l2-logos/l22-cobranded-logo/component";
import { createA21 } from "../../4-components/a2-alerts/a21-alert-global/component";
import { createF20 } from "../../4-components/f2-form-elements/f20-form-structure/component";
import { createH15 } from "../../4-components/h1-hero-rows/h15-page-title-row/component";
import { createPT1 } from "../../5-patterns/pt1-topbar/component";
import { createPF2 } from "../../5-patterns/pf2-footers/component";


export const createPR1 = () => {

  const alertHTML = createA21({
    type: "success",
    alert: "<span>Free registration</span> for zero emission vehicles for two years",
    fontawesome: "fa-leaf",
    icon: "icon-left",
    dismissible: true,
  });
  const topbarHTML = createPT1({
    title: "An ACT Government Website",
    buttonText: "Log In",
  });
  const inPageBannerHTML = createH15({
    heading1: "Motor vehicle registration and renewal",
    crumb1: "Home",
    crumb1link: "#",
    crumb2: "Transport",
    crumb2link: "#",
    crumb3: "Registration",
    crumb3link: "#",
  });
  const formHTML = createF20({
    formTitle: "Renewal Form",
    field1: {
      type: "text",
      width: "50%",
      label: "First Name",
      required: true,
      value: "James",
    },
    field2: {
      type: "text",
      width: "50%",
      label: "Last Name",
      required: true,
      value: "Smith",
    },
    field3: {
      type: "email",
      width: "100%",
      label: "Email Address",
      required: true,
      value: "john@smith.com",
    },
    field4: {
      type: "checkbox",
      width: "100%",
      label: "Email Address",
      required: false,
      value: "john@smith.com",
    },
    field5: {
      type: "radio",
      width: "100%",
      label: "Email Address",
      name: "email",
      required: false,
      value: "john@smith.com",
    },
    field6: {
      type: "radio",
      width: "100%",
      label: "Email Address",
      name: "email",
      required: false,
      value: "john@smith.com",
    },
  });
  const footerHTML = createPF2({
    heading1: "Motor vehicle registration and renewal",
    crumb1: "Home",
    crumb1link: "#",
    crumb2: "Transport",
    crumb2link: "#",
    crumb3: "Registration",
    crumb3link: "#",
  });

  const accessCanberraHTML =
  topbarHTML +
  `<main class="act-body">`
  + inPageBannerHTML + formHTML +
  `</main>`
  + footerHTML;

  const accessCanberra = document.createElement("div");
  accessCanberra.className = "sb-import-container";
  accessCanberra.innerHTML = accessCanberraHTML;
  const accessCanberraExport = accessCanberra.innerHTML;
  return accessCanberraExport;

};
