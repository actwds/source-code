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
			<z class="fa-solid fa-pen multi-step-icon-edit"></z>
			<z class="fa-solid fa-check multi-step-icon-check"></z>
			<z class="fa-regular fa-circle multi-step-icon-circle"></z>
		</span>
		</div>
		<div class="act-progress__step__text">
		<p class="small">${label}</p>
		</div>
	</div>
`;
};
  