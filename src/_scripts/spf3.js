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
function backToTop() {
	document.getElementById("act-header").scrollIntoView({
		behavior: "smooth",
	});
}
const backToTopButton = document.getElementById("back-to-top");
backToTopButton.addEventListener("click", function() {
	backToTop();
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

function openChildLinks(e) {
	const element = e.currentTarget;
	const num = element.id.split("-")[3];
	
	
	const visibleChildElements = document.querySelectorAll("[id^=sub-menu-]");
	for (const childElement of visibleChildElements) {
		childElement.style.display = "none";
	}
	const childElement = document.querySelector("#sub-menu-" + num);

	//make sub-menu visible
	if (childElement) {
		childElement.style.display = "grid";
		toggleSubMenu(true);

		const megaMenuLinks = document.querySelectorAll(".act-megamenu__link-container>.act-megamenu__link");
		megaMenuLinks.forEach(function(link) {
			link.setAttribute("aria-expanded", "false");
		});

		e.currentTarget.setAttribute("aria-expanded", "true");
	} else if (!childElement) {
		toggleSubMenu(false);
	}
}


document.addEventListener("DOMContentLoaded", function() {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuToggle = document.querySelectorAll(".act-navbar__menu");
	const megaMenuIcon = document.querySelectorAll(".act-navbar__menu .act-navbar__menu__container z")[0];
	const megaMenuText = document.getElementsByClassName("act-navbar__menu__text")[0];
	megaMenuToggle.forEach(function(button) {
		button.addEventListener("click", function(e) {
			e.preventDefault();
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
		});
	});
});

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
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	const searchInput = document.getElementsByClassName("act-navbar__search__text")[0];
	const searchToggle = document.querySelectorAll(".act-navbar__search__container z");
	searchToggle.forEach(function(button) {
		button.addEventListener("click", function() {
			searchContainer.classList.toggle("act-search__open");
		});
	});
});


//Close events
document.addEventListener("keydown", function() {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuIcon = document.querySelectorAll(".act-navbar__menu .act-navbar__menu__container z")[0];
	const megaMenuText = document.getElementsByClassName("act-navbar__menu__text")[0];
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	if(event.keyCode === 27) {
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
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuIcon = document.querySelectorAll(".act-navbar__menu .act-navbar__menu__container z")[0];
	const megaMenuText = document.getElementsByClassName("act-navbar__menu__text")[0];
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	const navbar = document.getElementsByClassName("act-navbar")[0];
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

//W-15 Mega Menu keyboard arrow navigation
document.addEventListener("keydown", function(e) {
	if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
		if (document.querySelector(".act-megamenu").classList.contains("act-megamenu__open")) {
			e.preventDefault();
		}
	}
	if (document.activeElement.closest(".act-megamenu__open")) {
		if (document.activeElement.closest(".act-megamenu__sub-menu-link-container")) {
			let active = document.activeElement;
			let activeSubnavCount = document.activeElement.parentNode.childElementCount;
			let i = Array.from(active.parentNode.children).indexOf(active);
			let sw = screen.width;
			//left
			if(event.keyCode === 37) {
				if (i % 2 == 0 || sw < 991) { //left col
					//
					document.getElementsByClassName("act-megamenu__content__block-sub-menu")[0].classList.add("hidden-mobile");
					Array.from(document.getElementsByClassName("act-megamenu__sub-menu-link-container")).forEach(function(container) {
						container.style.display = "none";
					});
					let numMega = document.activeElement.closest(".act-megamenu__sub-menu-link-container").id.split("-")[2];
					// 	document.querySelector("#main-menu-link-" + numMega).focus();
					toggleSubMenu(false);
					document.querySelector("#main-menu-link-" + numMega).focus();
				} else {
					//right col
					document.activeElement.previousElementSibling.focus();
				}				
			}
			//up
			if(event.keyCode === 38) {
				if (sw < 991 && i != 0) {
					document.activeElement.previousElementSibling.focus();
				} else if (i == 0 || i == 1) {
					if (!active.parentNode.classList.contains("section-heading")) {
						document.activeElement.parentNode.previousElementSibling.querySelector("a").focus();
					}
				} else {
					document.activeElement.previousElementSibling.previousElementSibling.focus();
				}
			}
			//right
			if(event.keyCode === 39) {
				if (i % 2 == 1) {
					active.focus();
				} else if (i < (activeSubnavCount-1)) {		
					document.activeElement.nextElementSibling.focus();
				}				
			}
			//down
			if(event.keyCode === 40) {
				if (active.parentNode.classList.contains("section-heading")) {
					document.activeElement.parentNode.nextElementSibling.querySelector("a").focus();
				} else if (sw < 991 && (activeSubnavCount-1) != i) {
					document.activeElement.nextElementSibling.focus();
				} else if ((activeSubnavCount-2) == i || (activeSubnavCount-1) == i) {
					active.focus();
				} else {
					document.activeElement.nextElementSibling.nextElementSibling.focus();
				}
			}
		} else if (document.activeElement.closest(".act-megamenu__link-container")) {
			let active = document.activeElement;
			let activeCount = active.closest(".act-megamenu__link-container").childElementCount;
			let i = Array.from(active.closest(".act-megamenu__link-container").children).indexOf(active.closest(".act-megamenu__link"));
			//up
			if(event.keyCode === 38) {
				if (!i == 0) {
					active.previousElementSibling.focus();
				}
			}
			//right
			if(event.keyCode === 39 || event.keyCode === 13) {
				let active = document.activeElement;
				let activeID = active.closest(".act-megamenu__link").id.split("-")[3];
				toggleSubMenu(true);
				const visibleChildElements = document.querySelectorAll("[id^=sub-menu-]");
				for (const childElement of visibleChildElements) {
					childElement.style.display = "none";
				}
				const childElement = document.querySelector("#sub-menu-" + activeID);
				if (!childElement) {
					return;
				}
				childElement.style.display = "grid";
				childElement.querySelector("a").focus();
			}
			//down
			if(event.keyCode === 40) {
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
			//up
			if(event.keyCode === 38) {
				if (!i == 0) {
					active.previousElementSibling.focus();
				} else {
					let x = document.querySelector(".act-megamenu__link-container").childElementCount -1;
					document.querySelectorAll(".act-megamenu__link-container a")[x].focus();
				}
			}

			//down
			if(event.keyCode === 40) {
				if ((activeCount-1) != i) {
					active.nextElementSibling.focus();				
				} else {
					document.querySelector(".act-megamenu__content__block-main-menu__additional-links a").focus();
				}
			}
		}
	}
});


//W-15 Mega Menu close submenu when left portion clicked
document.addEventListener("DOMContentLoaded", function() {
	const megaMenuLeft = document.querySelectorAll(".has-children");
	megaMenuLeft.forEach(function(item) {
		item.addEventListener("click", function(e) {
			e.preventDefault();
			if (e.target.closest(".act-megamenu__link")) {
				return;
			} 
			document.getElementsByClassName("act-megamenu__content__block-sub-menu")[0].classList.add("hidden-mobile");
			Array.from(document.getElementsByClassName("act-megamenu__sub-menu-link-container")).forEach(function(container) {
				container.style.display = "none";
			});
		});
	});
});


document.querySelectorAll(".act-megamenu__sub-menu-link-container").forEach(function(item) {
	document.querySelectorAll(".act-megamenu__link").addEventListener("click", function(e) {
		if (item.style.opacity == "1") {
			item.style.opacity = "0";
		} else {
			item.style.opacity = "1";
		}
	});
});


// F2 - AJAX Search
document.addEventListener("DOMContentLoaded", function() {
    let urlString;
    let ajaxForm = document.querySelector('.ajax-form');
	let ajaxFormInputs = ajaxForm.querySelectorAll('input, select');
    let inputsValueArray = [];
    let inputsParameterArray = [];
	let targetSelectors = ['#search-outer-wrapper', '#search-matching'];



    function setURLPath() {
        let formAction = document.querySelector('.ajax-form').getAttribute('action');
        let hostName = window.location.hostname;
        urlString = `https://${hostName}${formAction}`;
    }

	function setInputParameters() {
        getInputValues();
        getInputParameters();
        for (i=0; i < inputsParameterArray.length; i++) {
            if (i === 0) {
                urlString += `?${inputsParameterArray[i]}=${inputsValueArray[i]}`
            } else {
                urlString += `&${inputsParameterArray[i]}=${inputsValueArray[i]}`
            }
        }
	}

    function getInputParameters() {
        inputsParameterArray = [];
        ajaxFormInputs.forEach(function(input) {
            let inputType = input.getAttribute('type');
            let inputParameter = input.getAttribute('name');
            if (inputType != null) {
                if (inputType.toLowerCase() === 'submit') {
                    // Do nothing
                } else {
                    inputsParameterArray.push(inputParameter);
                }
            } else {
                inputsParameterArray.push(inputParameter);
            }
        })
    }

    function getInputValues() {
        inputsValueArray = [];
        ajaxFormInputs.forEach(function(input) {
            let inputType = input.getAttribute('type');
            let inputValue = input.value;
			// If null, most likely a select element
            if (inputType != null) {
                if (inputType.toLowerCase() != 'submit') {
                    inputsValueArray.push(inputValue);
                }
            } else {
                inputsValueArray.push(inputValue);
            }
        })
    }

    function resetInputs() {
        getInputParameters();
        for (i=0; i < inputsParameterArray.length; i++) {
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
        let textToFilter = document.createElement('textToFilter');
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
				})
            })
            .catch((error) => {
                // didn't work
            })
    }

    function initAJAXForm(resultSelector) {
        let formInputs = document.querySelectorAll('.ajax-form input, .ajax-form select');
        formInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                submitAJAXForm(resultSelector);
            })
        })
    }

    function bindResetButton() {
        let resetButton = document.querySelector('.ajax-form .button-reset');
        resetButton.addEventListener('click', function(e) {
            e.preventDefault();
            resetInputs();
        })
    }
    
    if (ajaxForm) {
        initAJAXForm(targetSelectors);
        bindResetButton();
    }
})






/* Custom GA Tracking */
// document.addEventListener("DOMContentLoaded", function() {
// 	function feedbackYes(e) {
// 		gtag("event", "click", {feedback_type: "Yes"});
// 		document.getElementById("feedback-yes").removeEventListener("click", feedbackYes);
// 		document.getElementById("feedback-no").removeEventListener("click", feedbackNo);
// 	}
	
// 	function feedbackNo(e) {
// 		gtag("event", "click", {feedback_type: "No"});
// 		document.getElementById("feedback-yes").removeEventListener("click", feedbackYes);
// 		document.getElementById("feedback-no").removeEventListener("click", feedbackNo);
// 	}
// 	if (document.querySelectorAll(".act-footer-feedback").length > 0) {
// 		document.getElementById("feedback-yes").addEventListener("click", feedbackYes);
// 		document.getElementById("feedback-no").addEventListener("click", feedbackNo);
// 	}
// });