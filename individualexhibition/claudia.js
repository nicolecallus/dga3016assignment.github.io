document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".scroll-images");
    const scrollAmount = 300;

    document.getElementById("left-arrow").addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    document.getElementById("right-arrow").addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });
});

