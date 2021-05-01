console.log("czesc");
let button = document.querySelector(".button");
let invisible = document.querySelector(".section__js-invisible");
let showText = "rozwiń";
let hiddenText = "zwiń";
button.innerText = showText;
button.addEventListener("click", () => {
    invisible.classList.toggle("section__js-invisible");
    button.innerText = button.innerText === hiddenText ? showText : hiddenText;
});