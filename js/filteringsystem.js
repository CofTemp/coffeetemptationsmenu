document.addEventListener("DOMContentLoaded", function() {
    const glutenFreeButton = document.querySelector('.filter-button-gluten-free');
    const menuItemsContainer = document.querySelector('.menus-container');


    glutenFreeButton.addEventListener('click', function() {
        // Hide all menu items initially
        const menuItems = menuItemsContainer.querySelectorAll('.menus');
        menuItems.forEach(item => {
            item.style.display = 'none';
        });

        // Show only the menu items with the "gluten-free" label
        const glutenFreeItems = menuItemsContainer.querySelectorAll('.gluten-free-container');
        glutenFreeItems.forEach(item => {
            item.style.display = 'block';
        });
    });

    // Similarly, you can add event listeners and filtering logic for other buttons (vegan, vegetarian, kosher-friendly).
});