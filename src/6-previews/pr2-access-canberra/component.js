import { createH14 } from "../../4-components/h1-hero-rows/h14-home-search-row/component";
import { createW18 } from "../../4-components/w1-wayfinding/w18-popular-links/component";
import { createPC11 } from "../../5-patterns/pc1-card-grid/pc11-default-card-grid/component";
import { createPT1 } from "../../5-patterns/pt1-topbar/component";
import { createPF2 } from "../../5-patterns/pf2-footers/component";
import { createC31 } from "../../4-components/c3-case-study/c31-case-study/component";
import { createC210 } from "../../4-components/c2-content/c210-content-block/component";


export const createPR2 = () => {

  const homeSearchRow = createH14({});


  const popularPages = createW18({
  });

  const cards = createPC11({
    type: "primary",
    feature: "image",
    icon: "fa-pizza-slice",
    tag: "Gamburra",
    dateVisible: "True",
    tagVisible: "True",
    tag1: "Gamby",
    tag2: "Mulleun",
    header: "Card Header",
    description: "Card description",
    ctaVisible: "True",
    ctaText: "Learn more",
  });

  const cards2 = createPC11({
    type: "homepage",
    feature: "image",
    icon: "fa-pizza-slice",
    tag: "Gamburra",
    dateVisible: "True",
    tagVisible: "True",
    tag1: "Gamby",
    tag2: "Mulleun",
    header: "Card Header",
    description: "Card description",
    ctaVisible: "True",
    ctaText: "Learn more",
  });
  
  const caseStudy = createC31({
    heading: "Case study",
    tagVisible: true,
    tag1: "Case study",
    tag2: "Case study",
    imageVisible: true,
    buttonVisible: true,
  });

  const contentBlock = createC210({
    heading: "Content block",
    iconVisible: true,
    icon: "fa-pizza-slice",
    imageVisible: true,
    linksVisible: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum a felis porta vulputate. Etiam condimentum blandit tellus, in molestie purus fermentum et. Nunc vestibulum sapien sit amet ex facilisis, et malesuada sapien malesuada.",
    links1: "Link #1",
    links2: "Link #2",
    links3: "Link #3",
    links4: "Link #4",
  });

  const topbarHTML = createPT1({
    title: "An ACT Government Website",
    buttonText: "Log In",
  });

  const footerHTML = createPF2({
    type: "primary",
  });

  const accessCanberraHTML =
  topbarHTML +
  `<main class="act-body"><h1 class="sr-only">Home</h1>`
  + homeSearchRow + popularPages + 
  `<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-12">
          <div class="act-box">
          <h2>Browse services</h2>`
  + cards2 + cards2 +
  `<h2>Latest</h2>`
  + cards +
          `
          <h2>Case study</h2>`
          + caseStudy +
          `
          <h2>Content block</h2>`
          + contentBlock +
          `
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </main>`
  + footerHTML;

  const accessCanberra = document.createElement("div");
  accessCanberra.className = "sb-import-container";
  accessCanberra.innerHTML = accessCanberraHTML;
  const accessCanberraExport = accessCanberra.innerHTML;
  return accessCanberraExport;

};