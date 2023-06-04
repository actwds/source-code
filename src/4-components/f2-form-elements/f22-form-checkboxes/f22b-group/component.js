import { createF22a } from "../f22a-component/component";

export const createF22b = ({
  legend,
  field1,
  field2,
  required,
}) => {

  var legendHTML = legend;
  var requiredData;
  if ( required == true){
    legendHTML = legend + `<span class="required">*</span>`;
    requiredData = `required="required" aria-required="true"`;
  }

  const field1HTML = createF22a({
    type:     "radio",
    width:    "100%",
    label:    "Checkbox 1",
    name:    "Checkbox",
    required: required,
    value:    "Checkbox 1",
  });
  const field2HTML = createF22a({
    type:     "radio",
    width:    "100%",
    label:    "Checkbox 2",
    name:    "Checkbox",
    required: required,
    value:    "Checkbox 2",
  });

  return `
<fieldset class="act-form__section">
  <legend>`+legendHTML+`</legend>
  `+field1HTML+field2HTML+`
</fieldset>
`;};
