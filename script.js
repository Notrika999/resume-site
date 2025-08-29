// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

// Language toggle
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
    const isFA = document.documentElement.lang === "fa";

    if (isFA) {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
    } else {
        document.documentElement.lang = "fa";
        document.documentElement.dir = "rtl";
    }

    document.querySelectorAll("[data-fa]").forEach(el => {
        el.textContent = isFA ? el.dataset.en : el.dataset.fa;
    });
});