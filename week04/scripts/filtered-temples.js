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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Toronto Ontario",
	location: "Brampton, Ontario, Canada",
	dedicated:"1990, August, 25",
	area:55558,
	imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-82529-wallpaper.jpg",
  },
  {
	templeName: "Calgary Alberta",
	location: "Calgary, Alberta, Canada",
	dedicated:"2012, October, 28",
	area:33000,
	imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg",
  },
  {
	templeName: "Manila Philippines",
	location: "Quezon City, Metro Manila, Philippines",
	dedicated: "1984, September, 25",
	area:152460,
	imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg",
  }
  
 

];

createTempleCard(temples);

function clearAlbum() {
    document.querySelector(".album").innerHTML = "";
}

function filterTemples(filter) {
    let filtered = temples;
    switch(filter) {
        case 'old':
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filtered = temples.filter(temple => temple.area < 10000);
    }
    clearAlbum();
    createTempleCard(filtered);
}

const nav = document.querySelectorAll('.navigation a');
nav.forEach(link => {
    link.addEventListener('click', (a) => {
        a.preventDefault();
        const text = link.textContent.toLowerCase();
        if (text === 'home') filterTemples('home');
        else if (text === 'old') filterTemples('old');
        else if (text === 'new') filterTemples('new');
        else if (text === 'large') filterTemples('large');
        else if (text === 'small') filterTemples('small');
    });
});

function createTempleCard(temples) {
	temples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class = "label">Size:</span> ${temple.area}`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".album").appendChild(card);
})};