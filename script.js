document.addEventListener("DOMContentLoaded", function () {

    // STAR RATING FUNCTION
    const ratingGroups = document.querySelectorAll(".rating");

    ratingGroups.forEach(function (ratingGroup) {
        const stars = ratingGroup.querySelectorAll(".star-button");

        stars.forEach(function (star) {
            star.addEventListener("click", function () {
                const selectedRating = Number(star.dataset.value);

                stars.forEach(function (item) {
                    const starValue = Number(item.dataset.value);

                    if (starValue <= selectedRating) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });
            });
        });
    });

    // FAVORITE HEART FUNCTION
    const favoriteButtons = document.querySelectorAll(".favorite");

    favoriteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("active");

            if (button.classList.contains("active")) {
                button.textContent = "♥";
            } else {
                button.textContent = "♡";
            }
        });
    });

    // ADD TO CART FUNCTION
    let cart = [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartCount = document.getElementById("cart-count");

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            const existingProduct = cart.find(function (item) {
                return item.name === name;
            });

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });
            }

            const totalItems = cart.reduce(function (total, item) {
                return total + item.quantity;
            }, 0);

            cartCount.textContent = totalItems;

            alert(name + " added to cart!");
        });
    });

});