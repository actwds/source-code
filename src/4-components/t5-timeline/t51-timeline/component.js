export const createT51 = ({
  state,
  item1Heading,
  item1Description,
  item2Heading,
  item2Description,
  item3Heading,
  item3Description,
  item4Heading,
  item4Description,
}) => {

  let stateHTML = "";
  if (state === "complete") {
    stateHTML = "complete";
  } else if (state === "inactive") {
    stateHTML = "inactive";
  } else if (state === "current") {
    stateHTML = "current";
  } else {
    stateHTML = "";
  }
  
  
  return `
  <ul class="act-timeline">
    <li class="`+stateHTML+`">
        <div class="content">
            <h3>`+item1Heading+`</h3>
            <p>`+item1Description+`</p>
        </div>
    </li>
    <li class="`+stateHTML+`">
        <div class="content">
            <h3>`+item2Heading+`</h3>
            <p>`+item2Description+`</p>
        </div>
    </li>
    <li class="`+stateHTML+`">
        <div class="content">
            <h3>`+item3Heading+`</h3>
            <p>`+item3Description+`</p>
        </div>
    </li>
    <li class="`+stateHTML+`">
        <div class="content">
            <h3>`+item4Heading+`</h3>
            <p>`+item4Description+`</p>
        </div>
    </li>
  </ul>
  `;
};
  