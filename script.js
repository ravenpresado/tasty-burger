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
});