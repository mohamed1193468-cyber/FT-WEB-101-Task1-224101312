document.addEventListener("DOMContentLoaded", () => {
const toggleButton = document.getElementById("theme-toggle-btn");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
});