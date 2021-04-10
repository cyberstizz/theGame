
const openUp = () => {
    rules.style.visibility = "visible";
};

const closeUp = () => {
    rules.style.visibility = "hidden";
};

let rules = document.getElementById("rulesBox");

let theClose = document.getElementById("closeButton");

let theRules = document.getElementById("theRules");

theClose.addEventListener("click", closeUp);

theRules.addEventListener("click", openUp)