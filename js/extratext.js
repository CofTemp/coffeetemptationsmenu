document.addEventListener("DOMContentLoaded", function() {
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(button => {
        const descriptionContainer = button.parentElement.querySelector('.description-container');
        const fullDescription = descriptionContainer.querySelector('.full-description');
        const shortDescription = descriptionContainer.querySelector('.short-description');

        button.addEventListener('click', function() {
            if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
                fullDescription.style.display = 'block';
                button.textContent = 'Read Less';
                button.style.bottom = ''; // Reset bottom position
            } else {
                fullDescription.style.display = 'none';
                button.textContent = 'Read More';
                button.style.bottom = '0'; // Move button to bottom
            }
        });

        // Set initial state
        fullDescription.style.display = 'none'; // Initially hide full description
        shortDescription.style.display = 'block'; // Initially show short description
    });
});