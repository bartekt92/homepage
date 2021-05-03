const welcome = () => {
    console.log("Witajcie programiści!");
}
welcome();
const invisible = document.querySelector(".section__js-invisible");
const expandOnClick = () => {
    invisible.classList.toggle("section__js-invisible");
    button.innerText = button.innerText === "zwiń" ? "rozwiń" : "zwiń";
};

const button = document.querySelector(".button");
button.innerText = "rozwiń";

button.addEventListener("click", expandOnClick);