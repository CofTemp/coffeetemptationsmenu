function toggleToppingsList(button, toppingsList) {
    if (toppingsList.style.display === 'none' || toppingsList.style.display === '') {
        toppingsList.style.display = 'block';
        toppingsList.style.animation = 'pushDown 0.5s ease forwards';
        button.textContent = 'Hide Toppings';
    } else {
        toppingsList.style.animation = 'pushUp 0.5s ease forwards';
        setTimeout(() => {
            toppingsList.style.display = 'none';
        }, 500); 
        button.textContent = 'Add Toppings';
    }

    button.classList.toggle("active");

    adjustLayout();
}

function adjustLayout() {
    var toppingsLists = document.querySelectorAll('.toppings-list');
    toppingsLists.forEach(function(toppingsList) {
        var toppingsItems = toppingsList.querySelectorAll('.toppings.d-flex.ftco-animate');
        if (toppingsItems.length > 2) {
             toppingsList.classList.add('big-toppings');
        } else {
            toppingsList.classList.remove('big-toppings');
        }
    });
}

document.getElementById("burger-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("burger-toppings-list"); 
    toggleToppingsList(this, toppingsList);
});

document.getElementById("pizza-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("pizza-toppings-list"); 
    toggleToppingsList(this, toppingsList);
});

document.getElementById("potato-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("potato-toppings-list"); 
    toggleToppingsList(this, toppingsList);
});
document.getElementById("toast-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("toast-toppings-list");
    toggleToppingsList(this, toppingsList);
});
document.getElementById("bowls-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("bowls-toppings-list");
    toggleToppingsList(this, toppingsList);
});
document.getElementById("omelette-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("omelette-toppings-list"); 
    toggleToppingsList(this, toppingsList);
});

document.getElementById("daily-toppings-toggle").addEventListener("click", function() {
    var toppingsList = document.getElementById("daily-toppings-list"); 
    toggleToppingsList(this, toppingsList);
});


