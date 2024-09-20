export const createW16 = ({
  crumb1,
  crumb1link,
  crumb2,
  crumb2link,
  crumb3,
  crumb3link,
  crumb4,
  crumb4link,
  crumb5,
  crumb5link,
  listItemsAdditionalClass="",
}) => {

  function crumbHTML(label,link,listItemsAdditionalClass){
    // Indentation here needs to line up with code inside the return statement below
    var html = `
    <li class="act-breadcrumbs__crumb `+listItemsAdditionalClass+`">
      <a class="act-breadcrumbs__crumb__link" href="`+link+`" target="_self" title="`+label+`">
        `+label+` <z class="fa-solid fa-angle-right"></z>
      </a>
    </li>
    `;
    return html;
  }

  var crumb1HTML = "";
  var crumb2HTML = "";
  var crumb3HTML = "";
  var crumb4HTML = "";
  var crumb5HTML = "";

  if (crumb1 != "" && crumb1 != undefined){
    crumb1HTML = crumbHTML(crumb1,crumb1link,listItemsAdditionalClass);
  }
  if (crumb2 != "" && crumb2 != undefined){
    crumb2HTML = crumbHTML(crumb2,crumb2link,listItemsAdditionalClass);
  }
  if (crumb3 != "" && crumb3 != undefined){
    crumb3HTML = crumbHTML(crumb3,crumb3link,listItemsAdditionalClass);
  }
  if (crumb4 != "" && crumb4 != undefined){
    crumb4HTML = crumbHTML(crumb4,crumb4link,listItemsAdditionalClass);
  }
  if (crumb5 != "" && crumb5 != undefined){
    crumb5HTML = crumbHTML(crumb5,crumb5link,listItemsAdditionalClass);
  }

  return `
<nav class="act-breadcrumbs">
  <ul class="act-breadcrumbs__container">
    `+crumb1HTML+crumb2HTML+crumb3HTML+crumb4HTML+crumb5HTML+`
  </ul>
</nav>
`;
};
