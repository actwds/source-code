import { createB11 } from "../../../4-components/b1-buttons/b11-button-main/component";
import { createF21 } from "../../../4-components/f2-form-elements/f21-form-inputs/component";
import { createF22a } from "../../../4-components/f2-form-elements/f22-form-checkboxes/f22a-component/component";
import { createF25a } from "../../../4-components/f2-form-elements/f25-form-radio-buttons/f25a-component/component";

export const createF20 = ({
  formTitle,
  field1,
  field2,
  field3,
  field4,
  field5,
  field6,
}) => {

  if (formTitle == undefined){
    formTitle = "Form Title";
  }
  if (field1 == undefined){
    field1 = {
      type: "text",
      width: "50%",
      label: "First Name",
      required: true,
      value: "James",
    };
  }
  if (field2 == undefined){
    field2 = {
      type: "text",
      width: "50%",
      label: "Last Name",
      required: false,
      value: "Smith",
    };
  }
  if (field3 == undefined){
    field3 = {
      type: "email",
      width: "100%",
      label: "Email Address",
      required: true,
      value: "john@smith.com",
    };
  }
  if (field4 == undefined){
    field4 = {
      type: "email",
      width: "100%",
      label: "Email Address",
      required: true,
      value: "john@smith.com",
    };
  }
  if (field5 == undefined){
    field5 = {
      type: "email",
      width: "100%",
      label: "Email Address",
      required: true,
      value: "john@smith.com",
    };
  }
  if (field6 == undefined){
    field6 = {
      type: "email",
      width: "100%",
      label: "Email Address",
      required: true,
      value: "john@smith.com",
    };
  }

  const field1HTML = createF21({
    type:     field1.type,
    width:    field1.width,
    label:    field1.label,
    required: field1.required,
    value:    field1.value,
    alert: true,
    alertIcon: "circle-exclamation",
    alertValue: "As per your driver licence",
  });
  const field2HTML = createF21({
    type:     field2.type,
    width:    field2.width,
    label:    field2.label,
    required: field2.required,
    value:    field2.value,
    description: true,
    descriptionValue: "As per your driver licence",
  });
  const field3HTML = createF21({
    type:     field3.type,
    width:    field3.width,
    label:    field3.label,
    required: field3.required,
    value:    field3.value,
  });
  const field4HTML = createF22a({
    type:     field4.type,
    width:    field4.width,
    label:    field4.label,
    required: field4.required,
    value:    field4.value,
  });
  const field5HTML = createF25a({
    type:     field5.type,
    width:    field5.width,
    label:    field5.label,
    required: field5.required,
    value:    field5.value,
  });
  const field6HTML = createF25a({
    type:     field6.type,
    width:    field6.width,
    label:    field6.label,
    required: field6.required,
    value:    field6.value,
  });
  const buttonHTML = createB11({
    type: "primary",
    size: "default",
    icon: "no-icon",
    label: "Submit",
  });

  return `
<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-12">
          <div class="act-box">
            <form class="act-form">
              <h2 class="act-form__title">`+formTitle+`</h2>
              <fieldset class="act-form__section">
                `+field1HTML+field2HTML+field3HTML+field4HTML+field5HTML+field6HTML+buttonHTML+`
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;};
