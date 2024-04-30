document.addEventListener("DOMContentLoaded", function() {
    const breakfastMenuToggleBtn = document.getElementById("breakfast-menu-toggle-btn");
    const breakfastMenuSidebar = document.getElementById("breakfast-menu-sidebar");

    const lunchDinnerMenuToggleBtn = document.getElementById("lunch-dinner-menu-toggle-btn");
    const lunchDinnerMenuSidebar = document.getElementById("lunch-dinner-menu-sidebar");

    breakfastMenuToggleBtn.addEventListener("click", function() {
        breakfastMenuSidebar.classList.toggle("expanded");
    });

    lunchDinnerMenuToggleBtn.addEventListener("click", function() {
        lunchDinnerMenuSidebar.classList.toggle("expanded");
    });

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href");

            if (targetId) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    // Close both sidebars after scrolling to the target section
                    breakfastMenuSidebar.classList.remove("expanded");
                    lunchDinnerMenuSidebar.classList.remove("expanded");
                }
            }
        });
    });
});


