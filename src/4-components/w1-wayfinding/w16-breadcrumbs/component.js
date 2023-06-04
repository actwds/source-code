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
}) => {

  function crumbHTML(label,link){
    // Indentation here needs to line up with code inside the return statement below
    var html = `
    <li class="act-breadcrumbs__crumb">
      <a class="act-breadcrumbs__crumb__link" href="`+link+`" target="_self" title="`+label+`">
        `+label+` <i class="fa-solid fa-angle-right"></i>
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
    crumb1HTML = crumbHTML(crumb1,crumb1link);
  }
  if (crumb2 != "" && crumb2 != undefined){
    crumb2HTML = crumbHTML(crumb2,crumb2link);
  }
  if (crumb3 != "" && crumb3 != undefined){
    crumb3HTML = crumbHTML(crumb3,crumb3link);
  }
  if (crumb4 != "" && crumb4 != undefined){
    crumb4HTML = crumbHTML(crumb4,crumb4link);
  }
  if (crumb5 != "" && crumb5 != undefined){
    crumb5HTML = crumbHTML(crumb5,crumb5link);
  }

  return `
<nav class="act-breadcrumbs">
  <ul class="act-breadcrumbs__container">
    `+crumb1HTML+crumb2HTML+crumb3HTML+crumb4HTML+crumb5HTML+`
  </ul>
</nav>
`;
};
