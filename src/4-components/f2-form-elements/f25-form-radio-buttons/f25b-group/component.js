import { createF25a } from "../f25a-component/component";

export const createF25b = ({
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

  const field1HTML = createF25a({
    type:     "radio",
    width:    "100%",
    label:    "Radio 1",
    name:    "Radio",
    required: required,
    value:    "Option 1",
  });
  const field2HTML = createF25a({
    type:     "radio",
    width:    "100%",
    label:    "Radio 1",
    name:    "Radio",
    required: required,
    value:    "Option 1",
  });

  return `
<fieldset class="act-form__section">
  <legend>`+legendHTML+`</legend>
  `+field1HTML+field2HTML+`
</fieldset>
`;};
