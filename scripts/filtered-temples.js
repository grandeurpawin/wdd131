const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menuButton');
const headingTwo = document.querySelector('h1')

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
    headingTwo.classList.toggle('remove');
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
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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

const allTemples = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

// oldTemples.addEventListener("click", () => {
//   createTempleCard(
//     temples.filter(t => {
//       const year = parseInt(t.dedicated.split(",")[0].trim());
//       return year < 1900
//     })
//   )
// });

// newTemples.addEventListener("click", () => {
//   createTempleCard(
//     temples.filter(t => {
//       const year = parseInt(t.dedicated.split(",")[0].trim());
//     return year > 2000
//     })
//   )
// });

// largeTemples.addEventListener("click", () => {
//   createTempleCard(temples.filter(t => t.area > 90000));
// });

// smallTemples.addEventListener("click", () => {
//   createTempleCard(temples.filter(t => t.area < 10000));
// });

// allTemples.addEventListener("click", () => {
//   createTempleCard(temples);
// });

const buttons = [allTemples, oldTemples, newTemples, largeTemples, smallTemples];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let filteredTemples;

    document.querySelector("#section-title").textContent = button.textContent;


    switch (button.id) {
      case "old":
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated.split(",")[0].trim());
          return year < 1900;
        });
        break;

      case "new":
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated.split(",")[0].trim());
          return year > 2000;
        });
        break;
 case "large":
        filteredTemples = temples.filter(t => t.area > 90000);
        break;

      case "small":
        filteredTemples = temples.filter(t => t.area < 10000);
        break;

      case "home":
      default:
        filteredTemples = temples;
        break;
    }

    createTempleCard(filteredTemples);
  });
});



function createTempleCard(filteredTemples) {
  document.querySelector(".album").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3")
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".album").appendChild(card);

  });
}