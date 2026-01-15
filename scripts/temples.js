const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');

const mainNav = document.querySelector('nav');
const menuButton = document.querySelector('#menuButton');
const templeId = document.querySelector('#templeId');

//Set the current year
currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

menuButton.addEventListener('click', function() {
    mainNav.classList.toggle('show');
    menuButton.classList.toggle('show');
    templeId.classList.toggle('remove');
})