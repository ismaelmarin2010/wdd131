const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temp = 20; // °C
const windSpeed = 5; // km/h

function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

const windChillElement = document.querySelector("#windChill");

if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
} else {
    windChillElement.textContent = "N/A (conditions not met)";
}