import { createC22 } from "../../../4-components/c2-content/c22-key-message/component";
import { createC23 } from "../../../4-components/c2-content/c23-quote/component";
import { createC24 } from "../../../4-components/c2-content/c24-service-card/component";
import { createW13 } from "../../../4-components/w1-wayfinding/w13-sidebar/component";

export const createPC31 = () => {

  const keyMessageHTML = createC22({});
  const quoteHTML = createC23({
    content: "Some quote",
  });
  const serviceCardHTML = createC24({});
  const sidebarHTML = createW13({});

  const contentHTML = `
<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-8">
          <div class="act-box act-box__content">
            `+ keyMessageHTML +`
            <h1>Heading 1</h1>
            <p>The death cap mushroom (amanita phalloides) is a deadly fungus that is found across the Canberra region.</p>
            <p>There have been multiple incidents and fatalities associated with death cap mushrooms in the ACT.</p>
            <p>Death cap mushrooms can grow anywhere in our region, at any time. All parts of the death cap mushroom are poisonous. Eating even a small amount of a death cap mushroom can kill you. Death cap mushrooms remain potentially lethal, even if cooked.</p>
            `+ quoteHTML +`
            <ul>
              <li>Do not touch or eat wild mushrooms.</li>
              <li>Talk to your family and friends about staying away from any wild mushrooms.</li>
              <li>Remind visitors and people new to the ACT that death cap mushrooms grow in Canberra.</li>
              <li>Keep children and pets away from wild mushrooms.</li>
            </ul>
            <h2>Heading 2</h2>
            <p>Death cap mushrooms can grow anywhere in our region, at any time. All parts of the death cap mushroom are poisonous. Eating even a small amount of a death cap mushroom can kill you. Death cap mushrooms remain potentially lethal, even if cooked.</p>
            <p>Death cap mushrooms can grow anywhere in our region, at any time. All parts of the death cap mushroom are poisonous. Eating even a small amount of a death cap mushroom can kill you. Death cap mushrooms remain potentially lethal, even if cooked.</p>
            `+ serviceCardHTML +`
            <p>Death cap mushrooms can grow anywhere in our region, at any time. All parts of the death cap mushroom are poisonous. Eating even a small amount of a death cap mushroom can kill you. Death cap mushrooms remain potentially lethal, even if cooked.</p>
            <p>Death cap mushrooms can grow anywhere in our region, at any time. All parts of the death cap mushroom are poisonous. Eating even a small amount of a death cap mushroom can kill you. Death cap mushrooms remain potentially lethal, even if cooked.</p>
          </div>
        </div>
        <div class="act-col__cw-4">
          <div class="act-box">
          `+ sidebarHTML +`
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  const content = document.createElement("div");
  content.class = "sb-act-bottom";
  content.innerHTML = contentHTML;
  const contentExport = content.innerHTML;
  return contentExport;

};
