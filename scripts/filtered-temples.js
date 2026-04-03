const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


// Folding the menu back in smaller screens

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        hamButton.classList.remove("open");
    });
});


// Create the array with the temple info

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

    // Add more temple objects here: added 3 more temples
    {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436937-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-lds-236979-wallpaper.jpg"
    },
];


// Creating the temple cards using the info from the array with no filter

const header = document.getElementById("title");

const container = document.getElementById("templeCards"); // Save the ID for the HMTL element in the const

createTitle("Home");
createTempleCard(temples);

function createTempleCard(filteredTemples) {
    container.innerHTML = ""; // Clear the elements

    filteredTemples.forEach(temple => { // Loop through the array and create the cards

        const elementArticle = document.createElement("article"); //Creating the HTML element
        elementArticle.classList.add("card"); // Add to the HTML element a class

        const elementH2 = document.createElement("h2");
        elementH2.textContent = temple.templeName;

        const elementpLocation = document.createElement("p");
        elementpLocation.textContent = `Location: ${temple.location}`;

        const elementpDedicated = document.createElement("p");
        elementpDedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const elementpSize = document.createElement("p");
        elementpSize.textContent = `Size: ${temple.area} sq ft`;

        const elementImg = document.createElement("img");
        elementImg.src = temple.imageUrl;
        elementImg.alt = `${temple.templeName} temple`;
        elementImg.loading = "lazy";

        elementArticle.append(elementH2, elementpLocation, elementpDedicated, elementpSize, elementImg);
        container.appendChild(elementArticle);
    });
};


// Function for adding a title to each section

function createTitle(title) {
    header.textContent = title; // This also replaces anything previously written
};


// Creating the temple cards using the filters...

// Creating the cards with the full list for when Home is clicked
const homeLink = document.getElementById("home");

homeLink.addEventListener("click", () => {
    createTitle("Home");
    createTempleCard(temples);
});


// Creating the cards with temples built before 1900
const oldLink = document.getElementById("old");

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(", "));
        return year < 1900;
    });
    createTitle("Old Temples");
    createTempleCard(oldTemples);
});


// Creating the cards with temples built after 2000
const newLink = document.getElementById("new");

newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(", "));
        return year > 2000;
    });
    createTitle("New Temples");
    createTempleCard(newTemples);
});


// largeLink.addEventListener("click", () => {
//     const largeTemples = temples.filter(temple => {
//         const size = parseInt(temple.area);
//         return size > 90000;
//     });

//     createTempleCard(largeTemples);
// });


// smallLink.addEventListener("click", () => {
//     const smallTemples = temples.filter(temple => {
//         const size = parseInt(temple.area);
//         return size < 10000;
//     });
// });


// Function for the large and small temple lists
function filterByArea(temples, threshold, condition) {
    return temples.filter(temple => {
        const size = parseInt(temple.area);

        if (condition === "greater") {
            return size > threshold;
        }
        else if (condition === "smaller") {
            return size < threshold;
        }
    });
};


// Creating the cards with temples larger than 90,000 square feet
const largeLink = document.getElementById("large");

largeLink.addEventListener("click", () => {
    const largeTemples = filterByArea(temples, 90000, "greater");
    createTitle("Large Temples");
    createTempleCard(largeTemples);
});


// Creating the cards with temples smaller than 10,000 square feet
const smallLink = document.getElementById("small");

smallLink.addEventListener("click", () => {
    const smallTemples = filterByArea(temples, 10000, "smaller");
    createTitle("Small Temples");
    createTempleCard(smallTemples);
});
