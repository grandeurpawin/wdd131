const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menuButton');
const headingTwo = document.querySelector('h2')

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
    headingTwo.classList.toggle('remove');
});