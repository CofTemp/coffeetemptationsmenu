document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.gluten-free-container, .vegan-container, .vegetarian-container, .kosher-friendly-container');
    
    containers.forEach(container => {
        const labels = container.querySelectorAll('.gluten-free-label, .vegan-label, .vegetarian-label, .kosher-friendly-label');

        if (labels.length > 1) {
            const firstLabel = labels[0];
            const secondLabel = labels[1];

            // Get the width of the first label
            const firstLabelWidth = firstLabel.offsetWidth;

            let margin = 80;

            // Check if the second label is "kosher-friendly" and adjust the margin accordingly
            if (secondLabel.classList.contains('kosher-friendly-label')) {
                margin = 85;
            }

            // Check if the second label is "kosher-friendly" and adjust the margin accordingly
            if (secondLabel.classList.contains('vegan-label')) {
                margin = 85;
            }

            if (secondLabel.classList.contains('vegetarian-label')) {
                margin = 85;
            }

            // Set the margin-left for the second label
            secondLabel.style.left = (firstLabel.offsetLeft + firstLabelWidth + margin) + 'px';
        }
    });
});