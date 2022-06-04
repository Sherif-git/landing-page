/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const ul = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
    for (const section of sections) {
        // create anchor tag and li tag
        const li = document.createElement("li");
        li.innerHTML = `<a href="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        const link = li.querySelector("a");
        // Scroll to section on link click
        link.addEventListener("click", function (ev) {
            ev.preventDefault();
            //smooth scroll
            section.scrollIntoView({
                behavior: "smooth",
            });
        });
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
}

// Add class 'your-active-class' to section and class 'active' to links when near top of viewport
function toggleActiveClass() {
    for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        const link = document.querySelector(`a[href="${section.id}"]`);

        if (sectionTop > 0 && sectionTop <= 300) {
            section.classList.add("your-active-class");
            link.classList.add("active");
        }
        else {
            section.classList.remove("your-active-class");
            link.classList.remove("active");
        }
    }
}




/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
document.addEventListener("DOMContentLoaded", buildNav);

// Set sections as active
window.addEventListener("scroll", toggleActiveClass);