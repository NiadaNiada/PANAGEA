function scrollToTopFunction() {
    window.scrollTo(0, 0);
}

const scrollToTopButton = document.getElementById('scrollButton');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
        scrollToTopButton.className = "scroll-to-top show";
    } else {
        scrollToTopButton.className = "scroll-to-top hide";
    }
};

window.addEventListener("scroll", scrollFunc);