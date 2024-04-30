document.addEventListener("DOMContentLoaded", function() {
    const menuToggleButtons = document.querySelectorAll(".menu-toggle");

    menuToggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Toggle active class for clicked button
            button.classList.toggle("active");

            // Toggle the target menu section
            if (targetSection) {
                targetSection.classList.toggle("active-menu");

                // If the menu is being opened, scroll to the target position after the transition ends
                if (targetSection.classList.contains("active-menu")) {
                    targetSection.addEventListener("transitionend", function() {
                        scrollToTargetPosition(targetSection);
                    }, { once: true }); // Remove the event listener after it's fired once
                }
            }
        });
    });

    // Function to scroll to the target position
    function scrollToTargetPosition(targetSection) {
        const targetPosition = targetSection.offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
});