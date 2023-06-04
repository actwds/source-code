import React from "react";
import LinkTo from "@storybook/addon-links/react";

const Footer = () => {
	return (
		<div className="act-flex act-flex-middle-dark-grey">
			<div className="act-flex__container">
				<div className="act-flex__grid">
					<div className="act-flex__row">
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										<LinkTo kind="about-about--page">
											About
										</LinkTo>
									</h4>
									<ul>
										<li>
											<LinkTo kind="about-what-is-the-design-system--page">
												What is the Design System
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="about-technical-info--page">
												Technical Info
											</LinkTo>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										<LinkTo kind="design-overview--page">
											Design
										</LinkTo>
									</h4>
									<ul>
										<li>
											<LinkTo kind="design-breakpoints--page">
												Breakpoints
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="design-colours--page">
												Colours
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="design-radius--page">
												Radius
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="design-shadows--page">
												Shadows
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="design-spacing--page">
												Spacing
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="design-typography--page">
												Typography
											</LinkTo>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										<LinkTo kind="layout-overview--page">
											Layout
										</LinkTo>
									</h4>
									<ul>
										<li>
											<LinkTo kind="layout-overview--page">
												Overview
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="layout-page-layout--grid">
												Grid
											</LinkTo>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										<LinkTo kind="components-overview--page">
											Components
										</LinkTo>
									</h4>
									<ul>
										<li>
											<LinkTo kind="components-accordion-overview--page">
												Accordion
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-alerts-overview--page">
												Alerts
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-buttons-overview--page">
												Buttons
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-cards-overview--page">
												Cards
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-content-overview--page">
												Content
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-footers-overview--page">
												Footers
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-form-elements-overview--page">
												Form Elements
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-hero-rows-overview--page">
												Hero Rows
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-form-elements-input-fields--input-fields">
												Loaders
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-logos-act-government--horizontal">
												Logos
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-logos-act-government--horizontal">
												Popups
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-search-elements-overview--page">
												Search Elements
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-tables--table">
												Tables
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-tags--default">
												Tabs
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-tags--default">
												Tags
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-tags--default">
												Tooltips
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="components-wayfinding-masthead--masthead">
												Wayfinding
											</LinkTo>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										<LinkTo kind="patterns-overview--page">
											Patterns
										</LinkTo>
									</h4>
									<ul>
										<li>
											<LinkTo kind="patterns-card-grids-default-card-grid--default-card-grid">
												Default Card Grid
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="patterns-card-grids-feature-card-grid--feature-card-grid">
												Featured Card Grid
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="patterns-content-content-article--content-article">
												Content Article
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="patterns-footers--footers">
												Footers
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="patterns-search-basic-search--basic-search">
												Basic Search
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="patterns-search-filtered-search--filtered-search">
												Filtered Search
											</LinkTo>
										</li>
										<li>
											<LinkTo kind="patterns-wayfinding-top-bar--top-bar">
												Top Bar
											</LinkTo>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										<LinkTo kind="previews-overview--page">
											Previews
										</LinkTo>
									</h4>
									<ul>
										<li>
											<LinkTo kind="previews-access-canberra--access-canberra">
												Access Canberra
											</LinkTo>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="act-col__cw-3">
							<div className="act-box">
								<div className="act-footer-nav">
									<h4>
										Links
									</h4>
									<ul>
										<li>
											<a href="https://www.act.gov.au" target="_blank" title="ACT Government" rel="noreferrer">
												ACT Government
											</a>
										</li>
										<li>
											<a href="https://www.act.gov.au/branding" target="_blank" title="ACT Government Brand Guardian" rel="noreferrer">
												ACT Brand Guardian
											</a>
										</li>
										<li>
											<a href="https://github.com/ACTGov-Design-System" target="_blank" title="ACT Government GitHub" rel="noreferrer">
												GitHub <i className="fa-solid fa-arrow-up-right-from-square"></i>
											</a>
										</li>
										<li>
											<a href="https://www.pollen.com.au" target="_blank" title="Pollen" rel="noreferrer">
												Pollen <i className="fa-solid fa-arrow-up-right-from-square"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="act-flex__row">
						<div className="act-col__cw-12">
							<div className="act-box">
								<div className="act-footer-main">
									<div className="act-footer-main__container">
										<div className="act-footer-main__content">
										</div>
										<div className="act-footer-main__content">
											<div className="act-footer-main__socials">
												<h5>Follow us</h5>
												<a className="act-footer-main__socials__icon" href="#" target="_blank" title="Facebook">
													<i className="fa-brands fa-facebook-f"></i>
												</a>
												<a className="act-footer-main__socials__icon" href="#" target="_blank" title="Twitter">
													<i className="fa-brands fa-twitter"></i>
												</a>
												<a className="act-footer-main__socials__icon" href="#" target="_blank" title="Linkedin">
													<i className="fa-brands fa-linkedin-in"></i>
												</a>
												<a className="act-footer-main__socials__icon" href="#" target="_blank" title="YouTube">
													<i className="fa-brands fa-youtube"></i>
												</a>
											</div>
										</div>
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

export default Footer;
