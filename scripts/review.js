let count = localStorage.getItem("reviewCount");

if (count === null) {
    count = 0;
}

count++;
localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent = count;