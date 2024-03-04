/*****************************************/
/*									   */
/*  ACT Website Design System - spf3.js  */
/*									   */
/*****************************************/
//A11 - Accordion
document.addEventListener("DOMContentLoaded", function() {
	const sectionHeadings = document.querySelectorAll(".act-accordion__section__heading");
	sectionHeadings.forEach(function(heading) {
		heading.addEventListener("click", function(e) {
			e.preventDefault();
			const section = heading.parentElement;
			section.classList.toggle("act-accordion__section__open");
			section.classList.toggle("act-accordion__section__closed");
			const icon = heading.querySelector(".fa-solid");
		});
	});
});

//A21 - Global Alerts
function globalAlert() {
	const alertGlobal = document.querySelector(".act-alert-global");
	if (document.cookie.split(";").some((item) => item.trim().startsWith("globalAlertShut=True"))) {
		alertGlobal.remove();
	}
	let globalAlertDismiss = document.querySelectorAll("#global-alert-close");
	let alerts = globalAlertDismiss.forEach(function(alert, index) {
		alert.addEventListener("click", function(e) {
			e.preventDefault();
			document.cookie = "globalAlertShut=True";
			alertGlobal.remove();
		});
	});	
}
globalAlert();

//B13 - Back to top Button
const backToTopButton = document.querySelector("#back-to-top");
const backToTopTarget = "#act-header";
backToTopButton.addEventListener("click", function() {
	scrollToTarget(backToTopTarget);
});

function revealOnScroll() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		backToTopButton.classList.remove("act-button__back-to-top__hidden");
	} else {
		backToTopButton.classList.add("act-button__back-to-top__hidden");
	}
}

window.addEventListener("scroll", function() {
	revealOnScroll();
});

//P11 - Popover
function togglePopover() {
	const e = document.querySelector(".act-popup");
	e.remove();
}

//T21 - Tabs
document.addEventListener("DOMContentLoaded", function() {
	var tabs = document.querySelectorAll(".act-tabs__tab");
	var tabContents = document.querySelectorAll(".act-tabs__content");
	tabs.forEach(function(tab, index) {
		tab.addEventListener("click", function() {
			tabs.forEach(function(tab) {
				tab.classList.remove("act-tabs__tab__active");
				tab.setAttribute("aria-selected", "false");
			});
			this.classList.add("act-tabs__tab__active");
			this.setAttribute("aria-selected", "true");
			tabContents.forEach(function(tabContent) {
				tabContent.classList.remove("act-tabs__content__open");
				tabContent.classList.add("act-tabs__content__closed");
			});
			tabContents[index].classList.remove("act-tabs__content__closed");
			tabContents[index].classList.add("act-tabs__content__open");
		});
	});
});



//P-12 Cookie Consent
function toggleCookieConsent() {
	const e = document.querySelector(".act-popup.bottom");
	if (e) {
		if (e.style.visibility === "hidden") {
			e.style.visibility = "visible";
		} else {
			//find all the visible child links and hide them before closing the menu
			const visibleChildElements = document.querySelectorAll("[id^=child-links-]");
			for (const childElement of visibleChildElements) {
				childElement.style.display = "none";
			}

			//now close the menu
			e.style.visibility = "hidden";
		}
	}
}


//W-15 Mega menu
const megaMenu = document.querySelector(".act-megamenu");
const megaMenuToggle = document.querySelector(".act-navbar__menu");
const megaMenuIcon = document.querySelector(".act-navbar__menu .act-navbar__menu__container z");
const megaMenuText = document.querySelector(".act-navbar__menu__text");

function toggleSubMenu(open) {
	const mainMenu = document.querySelector(".act-megamenu__content__block-main-menu");
	const subMenu = document.querySelector(".act-megamenu__content__block-sub-menu");
	if(open) {
		subMenu.classList.remove("hidden-mobile");
		mainMenu.classList.add("hidden-mobile");
	} else {
		subMenu.classList.add("hidden-mobile");
		mainMenu.classList.remove("hidden-mobile");
	}
}

function openChildLinks(submenuTargetID, itemIDSplit) {
	// let itemID = item.id.split("-")[2];
	let itemTarget = document.querySelector("#sub-menu-"+itemIDSplit);
	let mainMenuItem = document.querySelector("#main-menu-link-"+itemIDSplit);
	if (submenuTargetID === itemIDSplit) {
		itemTarget.style.display = "grid";
		itemTarget.style.opacity = 1;
		mainMenuItem.setAttribute("aria-expanded", "true");
	} else {
		itemTarget.style.display = "none";
		itemTarget.style.opacity = 0;
		mainMenuItem.setAttribute("aria-expanded", "false");
	}
	toggleSubMenu(true);
}

function toggleMegamenu() {
	megaMenu.classList.toggle("act-megamenu__open");			
	if (!megaMenu.classList.contains("act-megamenu__open")) {
		megaMenuIcon.classList.add("fa-bars");
		megaMenuIcon.classList.remove("fa-xmark");
		megaMenuText.childNodes[0].replaceWith("Menu");
	} else {
		megaMenuIcon.classList.remove("fa-bars");
		megaMenuIcon.classList.add("fa-xmark");
		megaMenuText.childNodes[0].replaceWith("Close");
		megaMenu.querySelector("a").focus();
	}
}

document.addEventListener("DOMContentLoaded", function() {
	const megaMenuItem = document.querySelectorAll(".act-megamenu__link a");
	megaMenuItem.forEach(function(item) {
		item.addEventListener("click", function(e) {
			e.preventDefault();
		});
	});
});


//Search
document.addEventListener("DOMContentLoaded", function() {
	const searchContainer = document.querySelector(".act-navbar__search__container");
	const searchToggle = document.querySelectorAll(".act-navbar__search__container z");
	searchToggle.forEach(function(button) {
		button.addEventListener("click", function() {
			searchContainer.classList.toggle("act-search__open");
		});
	});
});


//Close events
document.addEventListener("keydown", function(e) {
	const megaMenu = document.querySelector(".act-megamenu");
	const megaMenuIcon = document.querySelector(".act-navbar__menu .act-navbar__menu__container z");
	const megaMenuText = document.querySelector(".act-navbar__menu__text");
	const searchContainer = document.querySelector(".act-navbar__search__container");
	if(e.key === "Escape") {
		if (megaMenu.classList.contains("act-megamenu__open")) {
			megaMenu.classList.toggle("act-megamenu__open");
			megaMenuIcon.classList.add("fa-bars");
			megaMenuIcon.classList.remove("fa-xmark");
			megaMenuText.childNodes[0].replaceWith("Menu");
		}

		if (searchContainer.classList.contains("act-search__open")) {
			searchContainer.classList.toggle("act-search__open");
		}
	}
	
});

document.addEventListener("click", function(e) {
	const megaMenu = document.querySelector(".act-megamenu");
	const megaMenuIcon = document.querySelector(".act-navbar__menu .act-navbar__menu__container z");
	const megaMenuText = document.querySelector(".act-navbar__menu__text");
	const searchContainer = document.querySelector(".act-navbar__search__container");
	const navbar = document.querySelector(".act-navbar");
	if (!navbar.contains(e.target) && !megaMenu.contains(e.target)) {
		if (megaMenu.classList.contains("act-megamenu__open")) {
			megaMenu.classList.toggle("act-megamenu__open");
			megaMenuIcon.classList.add("fa-bars");
			megaMenuIcon.classList.remove("fa-xmark");
			megaMenuText.childNodes[0].replaceWith("Menu");
		}
	}
	if (!navbar.contains(e.target) && !searchContainer.contains(e.target)) {
		if (searchContainer.classList.contains("act-search__open")) {
			searchContainer.classList.toggle("act-search__open");
		}
	}	
});

function getScreenWidth() {
	return screen.width;
}

function megamenuMoveLeft(i) {
	if (i % 2 == 0 || getScreenWidth() < 991) { //left col
		document.querySelector(".act-megamenu__content__block-sub-menu").classList.add("hidden-mobile");
		Array.from(document.querySelectorAll(".act-megamenu__sub-menu-link-container")).forEach(function(container) {
			container.style.display = "none";
		});
		let numMega = document.activeElement.closest(".act-megamenu__sub-menu-link-container").id.split("-")[2];
		toggleSubMenu(false);
		document.querySelector("#main-menu-link-" + numMega).focus();
	} else {
		//right col
		document.activeElement.previousElementSibling.focus();
	}	
}

function megamenuMoveUp(i) {
	if (getScreenWidth() < 991 && i != 0) {
		document.activeElement.previousElementSibling.focus();
	} else if (i == 0 || i == 1) {
		if (!document.activeElement.parentNode.classList.contains("section-heading")) {
			document.activeElement.parentNode.previousElementSibling.querySelector("a").focus();
		}
	} else {
		document.activeElement.previousElementSibling.previousElementSibling.focus();
	}				
}

function megamenuMoveRight(i, activeSubnavCount) {
	if (i % 2 == 1) {
		document.activeElement.focus();
	} else if (i < (activeSubnavCount-1)) {		
		document.activeElement.nextElementSibling.focus();
	}
}

function megamenuMoveDown(i, activeSubnavCount) {
	if (document.activeElement.parentNode.classList.contains("section-heading") && document.activeElement.parentNode.parentNode.children[1].children.length > 0) {
		document.activeElement.parentNode.nextElementSibling.querySelector("a").focus();
	} else if (getScreenWidth() < 991 && (activeSubnavCount-1) != i) {
		document.activeElement.nextElementSibling.focus();
	} else if ((activeSubnavCount-2) == i || (activeSubnavCount-1) == i) {
		document.activeElement.focus();
	} else {
		document.activeElement.nextElementSibling.nextElementSibling.focus();
	}
}

//W-15 Mega Menu keyboard arrow navigation
document.addEventListener("keydown", function(e) {
	if(e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "ArrowRight" || e.key === "ArrowDown") {
		if (document.querySelector(".act-megamenu").classList.contains("act-megamenu__open")) {
			e.preventDefault();
		}
	}
	if (document.activeElement.closest(".act-megamenu__open")) {
		if (document.activeElement.closest(".act-megamenu__sub-menu-link-container")) {
			let active = document.activeElement;
			let activeSubnavCount = document.activeElement.parentNode.childElementCount;
			let i = Array.from(active.parentNode.children).indexOf(active);
			let screenWidth = screen.width;
			if(e.key === "ArrowLeft") {
				megamenuMoveLeft(i);	
			}
			if(e.key === "ArrowUp") {
				megamenuMoveUp(i);
			}
			if(e.key === "ArrowRight") {
				megamenuMoveRight(i, activeSubnavCount);				
			}
			if(e.key === "ArrowDown") {
				megamenuMoveDown(i, activeSubnavCount);
			}
		} else if (document.activeElement.closest(".act-megamenu__link-container")) {
			let active = document.activeElement;
			let activeCount = active.closest(".act-megamenu__link-container").childElementCount;
			let i = Array.from(active.closest(".act-megamenu__link-container").children).indexOf(active.closest(".act-megamenu__link"));
			if(e.key === "ArrowUp") {
				if (!i == 0) {
					active.previousElementSibling.focus();
				}
			}
			if(e.key === "ArrowRight" || e.key === "Enter") {
				let active = document.activeElement;
				let activeID = active.closest(".act-megamenu__link").id.split("-")[3];
				let submenuTarget = document.querySelector("#sub-menu-"+activeID);
				let submenuTargetID = document.querySelector("#sub-menu-"+activeID).id.split("-")[2];
				openChildLinks(submenuTargetID, activeID);
				toggleSubMenu(true);
				submenuTarget.querySelector("a").focus();
			}
			if(e.key === "ArrowDown") {
				if ((activeCount-1) != i) {
					active.nextElementSibling.focus();				
				} else {
					document.querySelector(".act-megamenu__content__block-main-menu__additional-links a").focus();
				}
			}
		} else if (document.activeElement.closest(".act-megamenu__content__block-main-menu__additional-links")) {
			let active = document.activeElement;
			let activeCount = active.closest(".act-megamenu__content__block-main-menu__additional-links").childElementCount;
			let i = Array.from(active.closest(".act-megamenu__content__block-main-menu__additional-links").children).indexOf(active.closest(".act-megamenu__link"));
			if(e.key === "ArrowUp") {
				if (!i == 0) {
					active.previousElementSibling.focus();
				} else {
					let x = document.querySelector(".act-megamenu__link-container").childElementCount -1;
					document.querySelectorAll(".act-megamenu__link-container a")[x].focus();
				}
			}

			if(e.key === "ArrowDown") {
				if ((activeCount-1) != i) {
					if (active.nextElementSibling != null) {
						active.nextElementSibling.focus();
					}
				} else {
					document.querySelector(".act-megamenu__content__block-main-menu__additional-links a").focus();
				}
			}
		}
	}
});

//W-15 Mega Menu close submenu when left portion clicked
function closeMegamenuSubmenu(e) {
	if (e.target.classList.contains("act-megamenu__content__block-main-menu")) {
		document.querySelector(".act-megamenu__content__block-sub-menu").classList.add("hidden-mobile");
		Array.from(document.querySelectorAll(".act-megamenu__sub-menu-link-container")).forEach(function(container) {
			container.style.display = "none";
		});
	}
}

document.querySelector(".act-megamenu__link-container").addEventListener("click", function(e) {
	e.preventDefault();
	let currentItemID = e.target.closest("a").id.split("-")[3];
	let submenuTargetID = document.querySelector("#sub-menu-"+currentItemID).id.split("-")[2];
	document.querySelectorAll(".act-megamenu__sub-menu-link-container").forEach(function(item) {
		let itemIDSplit = item.id.split("-")[2];
		openChildLinks(submenuTargetID, itemIDSplit);
	});
});

document.addEventListener("DOMContentLoaded", function() {
	megaMenuToggle.addEventListener("click", function(e) {
		e.preventDefault();
		toggleMegamenu();
		document.querySelector(".act-megamenu__content__block-main-menu").addEventListener("click", function(e) {
			closeMegamenuSubmenu(e);
		});
	});
});

// F2 - AJAX Search
document.addEventListener("DOMContentLoaded", function() {
	function ajaxForm() {
		let urlString;
		let ajaxForm = document.querySelector(".ajax-form");
		let ajaxFormInputs = ajaxForm.querySelectorAll("input, select");
		let inputsValueArray = [];
		let inputsParameterArray = [];
		let targetSelectors = ["#search-outer-wrapper", "#search-matching",];
	
		function setURLPath() {
			const formAction = document.querySelector(".ajax-form").getAttribute("action");
			const hostName = window.location.hostname;
			// urlString = `https://${hostName}${formAction}`;
			urlString = "https://"+hostName+formAction;
		}
	
		function setInputParameters() {
			getInputValues();
			getInputParameters();
			for (let i=0; i < inputsParameterArray.length; i++) {
				if (i === 0) {
					// urlString += `?${inputsParameterArray[i]}=${inputsValueArray[i]}`;
					urlString += "?"+inputsParameterArray[i]+"="+inputsValueArray[i];
				} else {
					// urlString += `&${inputsParameterArray[i]}=${inputsValueArray[i]}`;
					urlString += "&"+inputsParameterArray[i]+"="+inputsValueArray[i];
				}
			}
		}
	
		function getInputParameters() {
			inputsParameterArray = [];
			ajaxFormInputs.forEach(function(input) {
				let inputType = input.getAttribute("type");
				let inputParameter = input.getAttribute("name");
				// If null, most likely a select element
				if (inputType != null) {
					if (inputType.toLowerCase() != "submit") {
						inputsParameterArray.push(inputParameter);
					}
				} else {
					inputsParameterArray.push(inputParameter);
				}
			});
		}
	
		function getInputValues() {
			inputsValueArray = [];
			ajaxFormInputs.forEach(function(input) {
				let inputType = input.getAttribute("type");
				let inputValue = input.value;
				// If null, most likely a select element
				if (inputType != null) {
					if (inputType.toLowerCase() != "submit") {
						inputsValueArray.push(inputValue);
					}
				} else {
					inputsValueArray.push(inputValue);
				}
			});
		}
	
		function resetInputs() {
			getInputParameters();
			for (let i=0; i < inputsParameterArray.length; i++) {
				if (document.querySelector(`.ajax-form input[name=${inputsParameterArray[i]}`) === document.querySelector(`.ajax-form input[type='hidden']`)) {
					continue;
				}
				if (document.querySelector(`.ajax-form input[name=${inputsParameterArray[i]}`)) {
					document.querySelector(`.ajax-form input[name=${inputsParameterArray[i]}`).value = "";
				} else if (document.querySelector(`.ajax-form select[name=${inputsParameterArray[i]}`)) {
					document.querySelector(`.ajax-form select[name=${inputsParameterArray[i]}`).value = "";
				}
			}
			submitAJAXForm(targetSelectors);
		}
	
		function filterResults(elementID, responseText) {
			let textToFilter = document.createElement("textToFilter");
			textToFilter.innerHTML = responseText;
			let filteredResult = textToFilter.querySelector(elementID);
			document.querySelector(elementID).innerHTML = filteredResult.innerHTML;            
		}
		
		function submitAJAXForm(resultSelector) {
			setURLPath();
			setInputParameters();
			fetch(urlString)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error: ${response.status}`);
					}
					return response.text();
				})
				.then((text) => {
					// hide loading
					resultSelector.forEach(function(item) {
						filterResults(item, text);
					});
				})
				.catch((error) => {
					// didn't work
				});
		}
	
		function initAJAXForm(resultSelector) {
			let formInputs = document.querySelectorAll(".ajax-form input, .ajax-form select");
			formInputs.forEach(function(input) {
				input.addEventListener("change", function() {
					submitAJAXForm(resultSelector);
				});
			});
		}
	
		function bindResetButton() {
			let resetButton = document.querySelector(".ajax-form .button-reset");
			resetButton.addEventListener("click", function(e) {
				e.preventDefault();
				resetInputs();
			});
		}
		
		if (ajaxForm) {
			initAJAXForm(targetSelectors);
			bindResetButton();
		}
	}
	if (document.querySelector(".ajax-form")) {
		ajaxForm();
	}
});

// C28 - Table of Contents
let scrollTarget = "";
function processDynamicAnchors() {
	/* Detect all second level headings (H2) within the scannable div. If more than one H2 exists then generate and add hyperlinks in the Table Of Contents (TOC) div For H2, H3's and manual TOC entries */
	const CONST_H2_THRESHOLD = 8; //Do not show hyperlinks for H3 headings if  total number of H2 headings on the page exceeds this threshold
	let divTOCScannableArea = document.querySelectorAll(".toc-page #TOCScannableArea");
	let divTOC = document.querySelectorAll("#TOC");
	if ((divTOCScannableArea.length > 0) && (divTOC.length > 0)) {
		let allHeadings = document.querySelectorAll(".toc-page #TOCScannableArea h2");
        
		// Commented out the jQuery version, need to consider if the manual headings are still required and update to accommodate them
		// var allHeadings =  $(divTOCScannableArea).find('h2, .manual-TOC-entry').not('.spf-article-box h2,.uikit-accordion__body-wrapper h2,.toc-hide');
		// var H2_Headings = allHeadings.filter('h2');
		// var Manual_Headings = allHeadings.filter('.manual-TOC-entry');
		// var count_H2_Headings = H2_Headings.length;
		// var count_Manual_Headings = Manual_Headings.length;
		// var count_All_Headings = count_H2_Headings + count_Manual_Headings;
        
		let count_All_Headings = allHeadings.length;
        
		if (count_All_Headings == 0) {
			// Hide TOC if there are no headings on the page
			document.querySelector("#TOC").remove();
		} else {
			//Hide the TOC if metadata field 'showTOC' is set to false
			const showTOC = document.querySelectorAll("meta[name=showTOC]");
			if (showTOC.length < 1) {
				return;
			} 
			if (document.querySelector("meta[name=showTOC]").getAttribute("content").toLowerCase().trim() === "true") {
				if (count_All_Headings > 1) {
					let newContent = "";
					newContent+="<div class=\"act-table-contents\"><div class=\"act-table-contents__container\"><h2 class=\"act-table-contents__title act-h5\">On this page</h2>";
					newContent+="<ul class=\"act-table-contents__content\">";
					for(let i=0; i < count_All_Headings; i++) {
						let currentItem = allHeadings[i];
						let newDynamicAnchorID = currentItem.textContent.replace(/[_\W]+/g, "-").replace(/â€™/g,"-").replace(/'/g,"-");
						currentItem.setAttribute("id", newDynamicAnchorID);
						currentItem.classList.add("dynamicAnchor");
                            
						//Only add hyperlinks pointing to H3's to the TOC if H2 Threshold has not been breached
						newContent+= "<li class=\"act-table-contents__content__item\"><a href='#";
						newContent+= newDynamicAnchorID;
						newContent+= "'";
						newContent+= " class='dynamicLink'>";
						newContent+= currentItem.textContent;
						newContent+= "</a></li>";
					}   
					newContent+="</ul></div></div>";
					// divTOC.append(newContent);
					document.querySelector("#TOC").insertAdjacentHTML("beforeend", newContent);
				}
			} else {
				document.querySelector("#TOC").remove();
			}
            
		}
	}
}

function setScrollTarget(target) {
	if (target === undefined) {
		scrollTarget = window.location.hash;
	} else {
		scrollTarget = target;
	}

}

function checkTarget(target) {
	setScrollTarget(target);
	if (scrollTarget != "" && document.querySelector(scrollTarget)) { 
		return true;
	} 
	return false;
	
}

function setHeadingHighlight(target) {
	if (checkTarget(target)) { 
		let h2List = document.querySelectorAll("h2");
		h2List.forEach(function(heading) {
			heading.classList.remove("toc__highlight");
		});
		document.querySelector(target).classList.add("toc__highlight");
	}
}

function scrollToTarget(target) {
	if (target.length > 0) {
		document.querySelector(target).scrollIntoView({ 
			behavior: "smooth",
		});
	}
}

function setTOCListeners() {
	let tocLinks = document.querySelectorAll("#TOC a");
	tocLinks.forEach(function(item) {
		item.addEventListener("click", function(e) {
			e.preventDefault();
			let target = item.getAttribute("href");
			history.replaceState(null,null,target);
			if (checkTarget(target)) {
				scrollToTarget(target);
				setHeadingHighlight(target);
			}
		});
	});
}

document.addEventListener("DOMContentLoaded", function() {
	processDynamicAnchors();
	scrollToTarget(window.location.hash);
	setHeadingHighlight(window.location.hash);
	setTOCListeners();
});

// Q1 - Quick Exit
function initQuickExit() {
	let quickExitToggle = document.querySelector(".act-quick-exit__button");
	let html = document.querySelector("html");
	
	if (document.querySelectorAll(".act-quick-exit__button").length > 0) {
		quickExitToggle.addEventListener("click", function(e) {
			e.preventDefault();
			html.remove();
			window.open("http://www.bom.gov.au/", "_blank");
			window.location.replace("http://www.bom.gov.au/");
		});
	}
}

document.addEventListener("DOMContentLoaded", function() {
	initQuickExit();
});


// W11 - Google Translate
let observerCheck = false;
function googleTranslateUpdates() {
	let googleTranslateElement = document.querySelector("#google_translate_element");
	let googleTranslateElementDropdown = googleTranslateElement.querySelector("select");
	googleTranslateElement.querySelector("span").remove();
	translateChange();
}

function translateChange() {
	let googleTranslateElementDropdown = document.querySelector("#google_translate_element select");
	googleTranslateElementDropdown.addEventListener("change", function(e) {
		addObserver(e);
		observerCheck = false;
	});
}

function googleTranslatePrependEnglish(languageCheck) {
	let googleTranslateElementDropdown = document.querySelector("#google_translate_element select");
	let englishOption = document.createElement("option");
	englishOption.setAttribute("value", "en");
	englishOption.textContent = "English";
	googleTranslateElementDropdown.prepend(englishOption);
	if (languageCheck === true) {
		document.querySelector("#google_translate_element select").value = "en";
	}
}

function googleTranslateRemoveEnglish(e) {
	let languageCheck = false;
	if (e.target.value === "en") {
		languageCheck = true;
	}
	let googleTranslateLanguages = document.querySelectorAll("#google_translate_element select option");
	if (googleTranslateLanguages.length > 0) {
		googleTranslateLanguages.forEach(function(language) {
			if (language.value === "en") {
				language.remove();
				googleTranslatePrependEnglish(languageCheck);
			}
		});
	}
}

function addObserver(e) {
	const targetNode = document.querySelector("#google_translate_element select");
	const config = { childList: true,};
	const callback = (mutationList, observer) => {
		if (observerCheck === false) {
			googleTranslateRemoveEnglish(e);
			observerCheck = true;
		}
	};
      
	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback);
    
	// Start observing the target node for configured mutations
	observer.observe(targetNode, config);
}


/* Custom GA Tracking */
// document.addEventListener("DOMContentLoaded", function() {
// 	function feedbackYes(e) {
// 		gtag("event", "click", {feedback_type: "Yes",});
// 		document.getElementById("feedback-yes").removeEventListener("click", feedbackYes);
// 		document.getElementById("feedback-no").removeEventListener("click", feedbackNo);
// 	}
	
// 	function feedbackNo(e) {
// 		gtag("event", "click", {feedback_type: "No",});
// 		document.getElementById("feedback-yes").removeEventListener("click", feedbackYes);
// 		document.getElementById("feedback-no").removeEventListener("click", feedbackNo);
// 	}
// 	if (document.querySelectorAll(".act-footer-feedback").length > 0) {
// 		document.getElementById("feedback-yes").addEventListener("click", feedbackYes);
// 		document.getElementById("feedback-no").addEventListener("click", feedbackNo);
// 	}
// });