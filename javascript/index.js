console.clear();

const bodyElement = document.querySelector('[data-js="body-element"]');

const buttonDark = document.querySelector('[data-js="switch__dark-mode"]');
buttonDark.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode-on");
})