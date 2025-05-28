const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

currentyear.innerHTML = new Date().getFullYear();
lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});