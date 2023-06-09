/*****************************************/
/*                                       */
/*  ACT Website Design System - spf3.js  */
/*                                       */
/*****************************************/
//A11 - Accordion
document.addEventListener("DOMContentLoaded", function() {
	const sectionHeadings = document.querySelectorAll(".act-accordion__section__heading");
	sectionHeadings.forEach(function(heading) {
		heading.addEventListener("click", function() {
			const section = heading.parentElement;
			section.classList.toggle("act-accordion__section__open");
			const icon = heading.querySelector(".fa-solid");
			if (section.classList.contains("act-accordion__section__open")) {
				icon.classList.remove("fa-xmark");
				icon.classList.add("fa-minus");
			} else {
				icon.classList.remove("fa-minus");
				icon.classList.add("fa-xmark");
			}
		});
	});
});

//A21 - Global Alerts
function dismissGlobalAlbert() {
	const e = document.querySelector(".act-alert-global");
	e.remove();
}

//B11 - Back to top Button
function backToTop() {
	window.scrollTo(0, 0);
}

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

	//make sub-menu visible
	toggleSubMenu(true);
    
	const visibleChildElements = document.querySelectorAll("[id^=sub-menu-]");
	for (const childElement of visibleChildElements) {
		childElement.style.display = "none";
	}
	const childElement = document.querySelector("#sub-menu-" + num);
	if (!childElement) {
		return;
	}
	childElement.style.display = "grid";
}


document.addEventListener("DOMContentLoaded", function() {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuToggle = document.querySelectorAll(".act-navbar__menu");
	megaMenuToggle.forEach(function(button) {
		button.addEventListener("click", function() {
			if (!megaMenu.classList.contains("act-megamenu__open")) {
				megaMenu.classList.toggle("act-megamenu__open");
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
	const searchToggle = document.querySelectorAll(".act-navbar__search__container i");
	searchToggle.forEach(function(button) {
		button.addEventListener("click", function() {
			searchContainer.classList.toggle("act-search__open");
		});
	});
});


//Close events
document.addEventListener("keydown", function() {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	if(event.keyCode === 27) {
		if (megaMenu.classList.contains("act-megamenu__open")) {
			megaMenu.classList.toggle("act-megamenu__open");
		}

		if (searchContainer.classList.contains("act-search__open")) {
			searchContainer.classList.toggle("act-search__open");
		}
	}
	
});

document.addEventListener("click", function(e) {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	const navbar = document.getElementsByClassName("act-navbar")[0];
	if (!navbar.contains(e.target) && !megaMenu.contains(e.target)) {
		if (megaMenu.classList.contains("act-megamenu__open")) {
			megaMenu.classList.toggle("act-megamenu__open");
		}
	}
	if (!navbar.contains(e.target) && !searchContainer.contains(e.target)) {
		if (searchContainer.classList.contains("act-search__open")) {
			searchContainer.classList.toggle("act-search__open");
		}
	}	
});

