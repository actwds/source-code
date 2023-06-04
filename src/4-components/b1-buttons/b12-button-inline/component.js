export const createB12 = ({
  text,
  link,
  external,
}) => {

  var externalATTR;
  var externalICON;

  if ( external == "external link"){
    externalATTR = "_blank";
    externalICON = `<i class="fa-solid fa-up-right-from-square"></i>`;
  } else {
    externalATTR = "_self";
    externalICON = "";
  }

  return `
<p>
  Sed ut perspiciatis natus sit voluptatem <a href="`+link+`" target="`+externalATTR+`" title="`+text+`">`+text+externalICON+`</a> dicta sunt explicabo.
</p>
`;
};
