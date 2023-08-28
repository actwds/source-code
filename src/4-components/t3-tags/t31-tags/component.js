export const createT31 = ({
  tag1,
  tag2,
  style,
  colour,
  type,
}) => {

  var tagTypeOpen = "div";
  var tagTypeClose = "div";
  if (type == "text"){ 
    tagTypeOpen = `div`;
    tagTypeClose = `div`;
  } else if (type == "link"){ 
    tagTypeOpen = `a href="#"`;
    tagTypeClose = `a`;
  } else if  (type == "checkbox"){ 
    tagTypeOpen = `a href="#"`;
    tagTypeClose = `a`;
  }

  return `
<`+tagTypeOpen+` class="act-tag act-tag__`+style+`__`+colour+`">
 `+tag1+`
</`+tagTypeClose+`>
<`+tagTypeOpen+` class="act-tag act-tag__`+style+`__`+colour+`">
 `+tag2+`
</`+tagTypeClose+`>
`;



};
