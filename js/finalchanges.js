document.addEventListener("DOMContentLoaded", function() {
    const menuToggleButtons = document.querySelectorAll(".menu-toggle");

    menuToggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Close other menu if it's open
            const otherButtonId = targetId === "breakfast-menu" ? "lunch-dinner-menu" : "breakfast-menu";
            const otherButton = document.querySelector(`[data-target="${otherButtonId}"]`);
            const otherSection = document.getElementById(otherButtonId);

            if (otherButton.classList.contains("active")) {
                otherButton.classList.remove("active");
                otherSection.classList.remove("active-menu");
            }

            // Toggle active class for clicked button
            button.classList.toggle("active");

            // Toggle the target menu section
            if (targetSection) {
                targetSection.classList.toggle("active-menu");
            }
        });
    });

    // Function to toggle footer size when menu is opened
    function toggleFooterSize() {
        // Modify this function according to your requirements
        // For now, it only toggles between the "extended" and "minimized" classes for the footer
        var footer = document.getElementById("main-footer");
        footer.classList.toggle("extended");
        footer.classList.toggle("minimized");
    }

    // Call the toggleFooterSize() function when BREAKFAST/LUNCH & DINNER buttons are pressed
    var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
    var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
    
    breakfastButton.addEventListener("click", toggleFooterSize);
    lunchDinnerButton.addEventListener("click", toggleFooterSize);

    // Function to open the Lunch & Dinner menu
    function openLunchDinnerMenu() {
        // Modify this function according to your requirements
        // For now, it only logs a message indicating that the Lunch & Dinner menu is being opened
        console.log("Opening Lunch & Dinner menu");
    }

    // Call the openLunchDinnerMenu() function when the button to try the Lunch & Dinner menu is clicked
    var lunchDinnerMenuButton = document.getElementById("lunch-dinner-menu-button");
    lunchDinnerMenuButton.addEventListener("click", openLunchDinnerMenu);
});
