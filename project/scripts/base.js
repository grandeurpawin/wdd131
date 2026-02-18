
document.addEventListener("DOMContentLoaded", () => {

    const navButton = document.getElementById("navButton");
    const siteName = document.getElementById("siteName");
    const navigation = document.querySelector(".navigation");

    navButton.addEventListener("click", () => {
        navButton.classList.toggle("show");
        navigation.classList.toggle("show");
        siteName.classList.toggle("remove");
    });

    const coffeeMenuContainer = document.getElementById("coffeeMenu");
    const filterButtons = document.querySelectorAll(".menuFilters button");

    const coffeeMenu = [
        {
            coffeeName: "Foggy Mountain Delight",
            imageUrl: "images/foggy_mountain_delight.webp",
            category: "mountain",
            description: "A special signature blend with aromatic spices that capture the essence of our misty mountainside.",
            price: 160,
            badges: ["Best Seller"],
            seasonal: false
        },
        {
            coffeeName: "Mountain Cinnamon Swan Macchiato",
            imageUrl: "images/mountain_cinnamon_swan_macchiato.webp",
            category: "mountain",
            description: "Handcrafted macchiato with cinnamon and elegant swan latte art.",
            price: 185,
            badges: ["New", "Best Seller"],
            seasonal: true
        },
        {
            coffeeName: "Mountain Maple Macchiato",
            imageUrl: "images/mountain_maple_macchiato.webp",
            category: "mountain",
            description: "Handcrafted macchiato with maple sweetness — sip while enjoying misty mountain peaks.",
            price: 180,
            badges: [],
            seasonal: false
        },
        {
            coffeeName: "Mountain Sunrise Espresso",
            imageUrl: "images/mountain_sunrise_espresso.webp",
            category: "mountain",
            description: "Bright and bold espresso inspired by the first light over the mountain horizon.",
            price: 150,
            badges: ["Limited Edition"],
            seasonal: true
        },
        {
            coffeeName: "Summit Hazelnut Brew",
            imageUrl: "images/summit_hazelnut_brew.webp",
            category: "mountain",
            description: "Nutty espresso brew with the aroma of highland hazelnuts — perfect for a cozy morning.",
            price: 170,
            badges: [],
            seasonal: false
        },
        {
            coffeeName: "Highland Caramel Latte",
            imageUrl: "images/highland_caramel_latte.webp",
            category: "mountain",
            description: "Rich caramel latte with a hint of Highland mountain air — a perfect blend of sweetness and comfort.",
            price: 170,
            badges: [],
            seasonal: false
        },
        {
            coffeeName: "Classic Brewed Coffee",
            imageUrl: "images/classic_brewed_coffee.webp",
            category: "cozy",
            description: "Simple yet comforting, perfect for foggy mornings.",
            price: 120,
            badges: ["Best Seller"],
            seasonal: false
        },
        {
            coffeeName: "Mocha Delight",
            imageUrl: "images/mocha_delight.webp",
            category: "cozy",
            description: "Rich espresso with chocolate and a hint of cinnamon — perfect for warming up on foggy mornings.",
            price: 150,
            badges: ["Best Seller"],
            seasonal: false
        },
        {
            coffeeName: "Velvet Cocoa Roast",
            imageUrl: "images/velvet_cocoa_roast.webp",
            category: "cozy",
            description: "Smooth and rich cocoa-infused espresso for ultimate comfort on foggy mornings.",
            price: 155,
            badges: [],
            seasonal: false
        },

        {
            coffeeName: "Vanilla Bean Cappuccino",
            imageUrl: "images/vanilla_bean_cappuccino.webp",
            category: "classic",
            description: "Creamy espresso with smooth vanilla sweetness, crafted to soothe and energize amidst the mist.",
            price: 160,
            badges: ["Best Seller"],
            seasonal: false
        },
        {
            coffeeName: "Cloud Nine White Mocha",
            imageUrl: "images/cloud_nine_white_mocha.webp",
            category: "premium",
            description: "Creamy white chocolate mocha topped with delicate foam art — a cloud of sweetness for your morning.",
            price: 180,
            badges: ["Limited Edition"],
            seasonal: true
        },
        {
            coffeeName: "Golden Honey Oat Latte",
            imageUrl: "images/golden_honey_oat_latte.webp",
            category: "premium",
            description: "Velvety oat milk latte with golden honey — a sweet, cozy treat for any morning.",
            price: 175,
            badges: ["New"],
            seasonal: true
        },
    ];

    const select = document.getElementById("coffeeMenuSelection");

    if (select) {
        coffeeMenu.forEach(coffee => {
            const option = document.createElement("option");
            option.value = coffee.coffeeName.toLowerCase().replace(/\s+/g, "-");
            option.textContent = coffee.coffeeName;
            select.appendChild(option);
        });
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
        if (count === 1) {
            reviewCount.textContent = `Thank you for your first review!`;
        } else {
            reviewCount.textContent = `Thank you for submitting ${count} reviews! We appreciate your continued feedback.`;
        }
    }

    const dateInput = document.getElementById("installedDate");
    if (dateInput) {
        dateInput.addEventListener("click", () => {
            dateInput.showPicker?.();
        });
    }

    // Display coffee cards
    function displayCoffeeMenu(coffeeArray) {
        coffeeMenuContainer.innerHTML = "";

        coffeeArray.forEach(coffee => {
            const card = document.createElement("div");
            card.classList.add("coffeeCard");

            // Image wrapper
            const imgWrapper = document.createElement("div");
            imgWrapper.classList.add("imageWrapper");

            const img = document.createElement("img");
            img.src = coffee.imageUrl;
            img.alt = coffee.coffeeName;
            img.loading = "lazy";
            imgWrapper.appendChild(img);
            card.appendChild(imgWrapper);

            // Card content
            const cardContent = document.createElement("div");
            cardContent.classList.add("cardContent");

            // Badges
            if (coffee.badges && coffee.badges.length > 0) {
                const badgesDiv = document.createElement("div");
                badgesDiv.classList.add("badges");
                coffee.badges.forEach(badge => {
                    const span = document.createElement("span");
                    span.classList.add("badge");
                    span.textContent = badge;
                    badgesDiv.appendChild(span);
                });
                cardContent.appendChild(badgesDiv);
            }

            const name = document.createElement("h2");
            name.textContent = coffee.coffeeName;
            cardContent.appendChild(name);

            const desc = document.createElement("p");
            desc.classList.add("description");
            desc.textContent = coffee.description;
            cardContent.appendChild(desc);

            const price = document.createElement("p");
            price.classList.add("price");
            price.innerHTML = `<strong>₱${coffee.price}</strong>`;
            cardContent.appendChild(price);

            card.appendChild(cardContent);
            coffeeMenuContainer.appendChild(card);
        });
    }

    // Initial display
    if (coffeeMenuContainer) {
        displayCoffeeMenu(coffeeMenu);

        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const category = button.dataset.category;

                if (category === "all") {
                    displayCoffeeMenu(coffeeMenu);
                } else {
                    const filtered = coffeeMenu.filter(c => c.category === category);
                    displayCoffeeMenu(filtered);
                }
            });
        });
    }
});
