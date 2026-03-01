// Mörkt tema-toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Spara tema i LocalStorage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// Ladda tema från LocalStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Bokning
const form = document.getElementById("bookingForm");
const status = document.getElementById("status");
const count = document.getElementById("bookingCount");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // visa bokningsbekräftelse
        status.textContent = "Bokning genomförd!";
        status.style.color = "green";

        // uppdatera i LocalStorage
        let current = parseInt(localStorage.getItem("bookings") || 0);
        current++;
        localStorage.setItem("bookings", current);

        // uppdatera dashboard count på index.html
        if (count) count.textContent = current;

        // resetta formulär
        form.reset();
    });
}

// Uppdatera dashboard count direkt när sidan laddas
if (count) {
    count.textContent = localStorage.getItem("bookings") || 0;
}