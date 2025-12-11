const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".primary-nav__list");

toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("open");
});

