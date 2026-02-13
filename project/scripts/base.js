
document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.getElementById("navButton");
    const siteName = document.getElementById("siteName");
    const navigation = document.querySelector(".navigation");

    navButton.addEventListener("click", () => {
        navButton.classList.toggle("show");
        navigation.classList.toggle("show");
        siteName.classList.toggle("remove"); 
    });
});