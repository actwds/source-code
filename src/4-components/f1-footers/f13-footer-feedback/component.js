import { createB11 } from "../../../4-components/b1-buttons/b11-button-main/component";
import { createF27 } from "../../../4-components/f2-form-elements/f27-form-textarea/component";

const formHTML = createF27({
  type: "text",
  width: "50%",
  label: "How could we improve this page?",
  required: true,
  value: "",
});

export const createF13 = () => {

  const buttonHTML = createB11({
    type: "primary",
    size: "default",
    icon: "no-icon",
    label: "Submit",
  });

  return `
<div class="act-flex act-flex-light-purple">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-12">
          <div class="act-box">

            <div class="act-footer-feedback">
              <div class="act-footer-feedback__title">
                <div class="act-footer-feedback__block">
                  <div class="act-h4">Was this page useful?</div>
                </div>
                <div class="act-footer-feedback__block">
                  <input class="act-footer-feedback__radio act-form__field__radio" type="radio" name="grpPageHelpful" id="feedback-yes"><label class="act-footer-feedback__block__label" for="radioPageHelpfulYes">Yes</label>
                  <input class="act-footer-feedback__radio act-form__field__radio" type="radio" name="grpPageHelpful" id="feedback-no"><label class="act-footer-feedback__block__label" for="radioPageHelpfulNo">No</label>
                </div>
              </div>
              <div class="act-footer-feedback__text">
                <p>If you want to hear back, please contact us</p>
              </div>
              <div class="act-footer-feedback__form">
                <form class="act-form">
                  `+formHTML+`
                  `+buttonHTML+`
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
};
