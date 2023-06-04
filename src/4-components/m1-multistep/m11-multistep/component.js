export const createM11 = ({
  type,
}) => {

  return `
<div class="act-multi-step">
  <div class="act-multi-step__container">
      <div class="act-multi-step__header">
        <h5>Heading will go here</h5>
        <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tempor consectetur commodo id cursus sit. Id malesuad.</p>
      </div>
      <div class="act-multi-step__content">
        <div class="act-multi-step__content__step" id="step-1">
          <!-- this content is for demo purposes only and should be replaced with your own components -->
          <div class="act-form__container act-form__container__cw-4">
            <label class="act-form__field__label" for="select_3Q1AD">
              Field Label
            </label>
            <select class="act-form__field__textarea default" type="textarea" value="" placeholder="Placeholder Text"  />
              <option value="">--1: Please choose an option--</option>
              <option value="1">Dropdown Option 1</option>
              <option value="2">Dropdown Option 1</option>
              <option value="3">Dropdown Option 1</option>
            </select>
          </div>
        </div>
        <div class="act-multi-step__content__step active" id="step-2">
          <!-- this content is for demo purposes only and should be replaced with your own components -->
          <div class="act-form__container act-form__container__cw-4">
            <label class="act-form__field__label" for="select_3Q1AD">
                Field Label
            </label>
            <select class="act-form__field__textarea default" type="textarea" value="" placeholder="Placeholder Text"  />
              <option value="">--2: Please choose an option--</option>
              <option value="1">Dropdown Option 1</option>
              <option value="2">Dropdown Option 1</option>
              <option value="3">Dropdown Option 1</option>
            </select>
          </div>
        </div>
        <div class="act-multi-step__content__step" id="step-3">
          <!-- this content is for demo purposes only and should be replaced with your own components -->
          <div class="act-form__container act-form__container__cw-4">
            <label class="act-form__field__label" for="select_3Q1AD">
              Field Label
            </label>
            <select class="act-form__field__textarea default" id="select_VFSVL"  type="textarea" value="" placeholder="Placeholder Text"  />
              <option value="">--3: Please choose an option--</option>
              <option value="1">Dropdown Option 1</option>
              <option value="2">Dropdown Option 1</option>
              <option value="3">Dropdown Option 1</option>
            </select>
          </div>
        </div>
      </div>
      <div class="act-multi-step__navigation">
        <div class="act-progress hide-scroll">
          <div class="act-progress__step complete">
            <div class="act-progress__step__icon">
              <span class="act-p-small">
                <i class="fa-solid fa-pen multi-step-icon-edit"></i>
                <i class="fa-solid fa-check multi-step-icon-check"></i>
              </span>
            </div>
            <div class="act-progress__step__text">
              <p class="small">Step #1</p>
            </div>
          </div>
          <div class="act-progress__step complete">
            <div class="act-progress__step__icon">
              <span class="act-p-small">
                <i class="fa-solid fa-pen multi-step-icon-edit"></i>
                <i class="fa-solid fa-check multi-step-icon-check"></i>
              </span>
            </div>
            <div class="act-progress__step__text">
              <p class="small">Step #2</p>
            </div>
          </div>
          <div class="act-progress__step">
            <div class="act-progress__step__icon">
              <span class="act-p-small">
                <i class="fa-solid fa-pen multi-step-icon-edit"></i>
                <i class="fa-solid fa-check multi-step-icon-check"></i>
              </span>
            </div>
            <div class="act-progress__step__text">
              <p class="small">Step #3</p>
            </div>
          </div>
          <div class="act-progress__step">
            <div class="act-progress__step__icon">
              <span class="act-p-small">
                <i class="fa-solid fa-pen multi-step-icon-edit"></i>
                <i class="fa-solid fa-check multi-step-icon-check"></i>
              </span>
            </div>
            <div class="act-progress__step__text">
              <p class="small">Step #4</p>
            </div>
          </div>
          <div class="act-progress__step">
            <div class="act-progress__step__icon">
              <span class="act-p-small">
                <i class="fa-solid fa-pen"></i>
              </span>
            </div>
            <div class="act-progress__step__text">
              <p class="small">Step #5</p>
            </div>
          </div>
        </div>
        <div class="act-multi-step__navigation__buttons">
           <button class="act-button act-button__secondary act-button__default act-button__no-icon act-button__secondary-undefined" type="button">
                  Previous
							<i class="fa-solid undefined"></i>
						</button>
						<button class="act-button act-button__primary act-button__default act-button__no-icon act-button__primary-undefined" type="button">
							Next
							<i class="fa-solid undefined"></i>
						</button>
      </div>
  </div>
</div>
`;
};
