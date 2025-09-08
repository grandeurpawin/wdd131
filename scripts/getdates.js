const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");

currentyear.innerHTML = new Date().getFullYear();
lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;