export const createF26a = (
  {label,
    substep,
    stage,
    large,
  }) => {
  return `
	<div class="act-progress__step ${stage} 
	${substep ? "substep" : ""} ${large ? "large" : ""}">
		<div class="act-progress__step__icon ">
		<span class="act-p-small">
			<i class="fa-solid fa-pen multi-step-icon-edit"></i>
			<i class="fa-solid fa-check multi-step-icon-check"></i>
			<i class="fa-regular fa-circle multi-step-icon-circle"></i>
		</span>
		</div>
		<div class="act-progress__step__text">
		<p class="small">${label}</p>
		</div>
	</div>
`;
};
  