document.addEventListener("DOMContentLoaded", function() {
    function openMenu() {
        var footer = document.getElementById("main-footer");
        footer.classList.remove("extended");
        footer.classList.add("minimized");
    }

    function openLunchDinnerMenu() {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
        breakfastButton.click(); 

        var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
        lunchDinnerButton.click(); 
        
        openMenu(); 
    }

    var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
    var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
    
    breakfastButton.addEventListener("click", openMenu);
    lunchDinnerButton.addEventListener("click", openMenu);

    var lunchDinnerMenuButton = document.getElementById("lunch-dinner-menu-button");
    lunchDinnerMenuButton.addEventListener("click", openLunchDinnerMenu);
});





document.addEventListener("DOMContentLoaded", function() {
    function openMenu() {
        var footer = document.getElementById("main-footer");
        footer.classList.remove("extended");
        footer.classList.add("minimized");
    }

    function openBreakfastMenu() {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
        lunchDinnerButton.click(); 

        var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
        breakfastButton.click(); 
        
        openMenu(); 
    }

    var breakfastButton = document.querySelector('[data-target="breakfast-menu"]');
    var lunchDinnerButton = document.querySelector('[data-target="lunch-dinner-menu"]');
    
    breakfastButton.addEventListener("click", openMenu);
    lunchDinnerButton.addEventListener("click", openMenu);

    var breakfastMenuButton = document.getElementById("breakfast-menu-button");
    breakfastMenuButton.addEventListener("click", openBreakfastMenu);
});