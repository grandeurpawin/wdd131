const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const mainNav = document.querySelector('nav');
const hamButton = document.querySelector('#menuButton');
const headingTwo = document.querySelector('#temple-id');

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
    headingTwo.classList.toggle('remove');
});