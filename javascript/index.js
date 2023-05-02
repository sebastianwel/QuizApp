console.clear();

// const bodyElement = document.querySelector('[data-js="body-element"]');

// const buttonDark = document.querySelector('[data-js="switch__dark-mode"]');
// buttonDark.addEventListener("click", () => {
//     bodyElement.classList.toggle("dark-mode-on");
//     console.log("Dark Mode on")
// });


const answer = document.querySelector('[data-js="answer"]');

const showAnswer = document.querySelector('[data-js="button"]');
showAnswer.addEventListener("click", () => {
    answer.classList.toggle("answer--hidden");
    console.log("Button geklickt");
})










