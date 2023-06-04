export const createF25a = ({
  name,
  label,
  required,
  pseudoClass,
}) => {

  var requiredData = "";
  if ( required == true){
    requiredData = `required="required"`;
  }

  var disabledData = "";
  if (pseudoClass == "disabled"){disabledData = "disabled";} else {disabledData = "";}

  var readonlyData = "";
  if (pseudoClass == "read-only"){readonlyData = "readonly";}

  function makeid(length) {
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  var id = "radio_" + makeid(5);

  return `
  <div class="act-form__container act-form__container__radio act-form__container__cw-12" id="container_`+id+`">
    <label class="act-form__field__label" for="`+id+`">
      `+label+`
    </label>
    <input class="act-form__field__radio `+pseudoClass+`" id="`+id+`" `+requiredData+` type="radio" `+readonlyData+` `+disabledData+` name="`+name+`"/>
  </div>
`;};
