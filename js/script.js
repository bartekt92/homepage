{
    const button = document.querySelector(".button");
    button.innerText = "rozwiń";
    const welcome = () => {
        console.log("Witajcie programiści!");
    }
    const expandOnClick = () => {
        const extraParagraphElement = document.querySelector(".js-invisible");
        extraParagraphElement.classList.toggle("section__invisible");
        button.innerText = button.innerText === "zwiń" ? "rozwiń" : "zwiń";
    };
    const init = () => {
        welcome();
        button.addEventListener("click", expandOnClick);
    }
    init();
}