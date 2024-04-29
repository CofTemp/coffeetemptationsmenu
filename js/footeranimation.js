document.addEventListener("DOMContentLoaded", function() {
    // Function to check if the user has scrolled to the bottom of the page
    function isScrolledToBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    // Function to toggle footer size and content based on scroll position
    function toggleFooterSize() {
        var footer = document.getElementById("main-footer");
        var minimizedContent = footer.querySelector(".minimized-content");
        var extendedContent = footer.querySelector(".extended-content");

        if (isScrolledToBottom()) {
            footer.classList.remove("minimized");
            footer.classList.add("extended");
            minimizedContent.style.display = "none";
            extendedContent.style.display = "block";
        } else {
            footer.classList.remove("extended");
            footer.classList.add("minimized");
            minimizedContent.style.display = "block";
            extendedContent.style.display = "none";
        }
    }

    // Toggle footer size and content when the page is loaded
    toggleFooterSize();

    // Toggle footer size and content when the user scrolls
    window.addEventListener("scroll", toggleFooterSize);

    // Function to toggle footer size when no menu is opened
    function closeMenu() {
        var footer = document.getElementById("main-footer");
        var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
        var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
        
        // Check if both menu buttons are not active
        if (!breakfastButton.classList.contains("active") && !lunchDinnerButton.classList.contains("active")) {
            footer.classList.remove("minimized");
            footer.classList.add("extended");
            toggleFooterSize();
        }
    }

    // Call the closeMenu() function when no BREAKFAST/LUNCH & DINNER buttons are pressed
    var mainSection = document.querySelector("main");
    mainSection.addEventListener("click", closeMenu);

    // Function to open menu and toggle footer size immediately
    function openMenu() {
        var footer = document.getElementById("main-footer");
        footer.classList.remove("extended");
        footer.classList.add("minimized");
        toggleFooterSize(); // Toggle footer size immediately
    }

    // Call the openMenu() function when BREAKFAST/LUNCH & DINNER buttons are pressed
    var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
    var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
    
    breakfastButton.addEventListener("click", openMenu);
    lunchDinnerButton.addEventListener("click", openMenu);
});