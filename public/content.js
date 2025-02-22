// Wait for the page to load before modifying it
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector("textarea[name='q']");
    if (searchBox) {
        searchBox.style.backgroundColor = "#ffeb3b"; // Change search box color to yellow
    }

    const results = document.querySelectorAll(".tF2Cxc");
    results.forEach(result => {
        result.style.border = "2px solid red"; // Add a red border to each search result
    });

    console.log("Google Search Modifier: Page modified.");
});
