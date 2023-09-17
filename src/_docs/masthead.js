import React from "react";
import LinkTo from "@storybook/addon-links/react";

const Masthead = () => {
	return (
		<div className="act-masthead">
			<div className="act-masthead__container">
				<div className="act-masthead__content left">
					ACT Government Website Design System (ACTWDS)
				</div>
				<div className="act-masthead__content right">
					<div className="act-masthead__nav">
					</div>
					<a className="act-button act-button__primary act-button__xsmall act-button__icon-right" type="button" href="https://github.com/ACTWDS/source-code" target="_blank" rel="noreferrer">
						GitHub
						<z className="fa-solid fa-arrow-up-right-from-square"></z>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
