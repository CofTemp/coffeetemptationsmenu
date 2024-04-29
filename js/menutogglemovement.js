document.addEventListener("DOMContentLoaded", function() {
    const menuToggleButtons = document.querySelectorAll(".menu-toggle");

    menuToggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start" // Scroll to the top of the target element
                });
            }
        });
    });
});