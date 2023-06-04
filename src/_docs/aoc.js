import React from "react";
import LinkTo from "@storybook/addon-links/react";

const AoC = () => {
	return (
		<div className="act-flex act-flex-middle-dark-grey">
			<div className="act-flex__container">
				<div className="act-flex__grid">
					<div className="act-flex__row">
						<div className="act-col__cw-12">
							<div className="act-box">
								<div className="act-footer-aoc">
									<div className="act-footer-aoc__title">
										<div className="act-footer-aoc__icon">
											<img src="/icons/footer-aoc-icon.svg" alt="symbol"/>
										</div>
										<h4 className="act-h4-white">Acknowledgement of Country</h4>
									</div>
									<div className="act-footer-aoc__body">
										<p className="act-p-large act-p-white">
											We acknowledge the Traditional Custodians of the ACT, the Ngunnawal people. We acknowledge and respect their continuing culture and the contribution they make to the life of this city and this region.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AoC;
