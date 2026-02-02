const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const select = document.getElementById("product");

if (select) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option)
    })
}

const form = document.getElementById("myForm");
if (form) {
    form.addEventListener("submit", function () {
        let count = parseInt(localStorage.getItem("formCount")) || 0;
        count++;
        localStorage.setItem("formCount", count);
    });
}

const reviewCount = document.getElementById("reviewCount");
if (reviewCount) {
    let count = parseInt(localStorage.getItem("formCount")) || 0;
    reviewCount.textContent = `You have submitted the form ${count} times.`;

    window.addEventListener("load", function () {
        setTimeout(function () {
            window.location.href = "form.html";
        }, 7000);
    });
}

const dateInput = document.getElementById("installedDate");
if (dateInput) {
    dateInput.addEventListener("click", () => {
        dateInput.showPicker?.();
    });
}