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


/*
 * ----------------------------------------------------
 *
 *   Thanks for your FeedBack.
 *   I Wish to meet your Expectations.
 *   Thanks for your time.
 *   Waiting your Approval.
 *
 * ----------------------------------------------------

/**
##################################################################################################
#                                   (^_^)                                                        #
#---REferences:                                                                                  #
#---Udacity NanoDegree Professional Course                                                       #
#---https://developer.mozilla.org/en-US/docs/Web/JavaScript                                      #
#---https://www.w3schools.com/js/default.asp                                                     #
#---https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv ** Osama El-Zero ** #
#---// Thanks to you I had to Search and Eventually found the Great "IntersectionObserver"       #
#---// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API                #
#                                                                                              #
##################################################################################################
*/
/**
 * Define Global Variables
 * 
*/

// Declare Navigation Bar 
const navbar__List = document.getElementById("navbar__list");
// Declare section
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// NavBar Biulding Function
function buildNavBar() {
    // For Loop through Sections
    for (var i = 0; i < sections.length; i++) {
        // Declare and Create "li" element
        const listLi = document.createElement('li');
        // Declare and Create "a" element
        const anchor = document.createElement('a');
        // Declare and Set "Section Name" Attrebute of "a" element
        let sectionName = sections[i].getAttribute('data-nav');
        // Declare and Set "Section ID" Attrebute of "a" element
        let IdofSection = sectionName.replace(/\s/g, '').toLowerCase();
        // Declare and Set "href" Attrebute of "a" element
        anchor.setAttribute('href', "#" + IdofSection);
        // Declare and Set "class" Attrebute of "a" element to get Styles from "style.css" file
        anchor.setAttribute('class', 'menu__link');
        // Declare and Set "text" Attrebute of "a" element
        anchor.innerText = sectionName;
        // Append "a" element to "li" element
        listLi.appendChild(anchor);
        // Append "li" element element to Navigation Bar 
        navbar__List.appendChild(listLi);
    }
}
// Starting the Function to work
buildNavBar();

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Thanks to you I had to Search and Eventually found the Great "IntersectionObserver"
//
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// Declare the Function "ActiveSection"
const ActiveSection = () => {
    // Declare the "observer" variable as a new "IntersectionObserver" 
    const observer = new IntersectionObserver(
        // Declare local function with parameter "Sections" 
        function (Sections) {
            // Iterate through the "Sections"
            Sections.forEach((Section) => {
                // Checking If the Section is in intersection Area
                if (Section.isIntersecting) {
                    // If True then add the Class "your-active-class"
                    Section.target.classList.add('your-active-class');
                    
                } else {  // If the Section is out of intersection Area then another one is active and this one is out of intersection
                    // If false then remove the Class "your-active-class"
                    Section.target.classList.remove('your-active-class');
                }

            });
        },
        {
            // Numeric value representing percentages of the target element which are visible to the user to activate 
            threshold: 0.6,
        }
    );
    // return the "observer" to observe every "section".
    return document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    });
};
// Activate the "ActiveSection" Function
ActiveSection();

// End Setting Active State 


// Declare a function to scroll to top Using "Top" Button.
function topFunction() {
    document.documentElement.scrollTop = 0;
}