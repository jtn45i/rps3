const selectionButtons = document.querySelectorAll("[data-selection]");
let buttons = document.querySelectorAll("selection");
let maxNumber;
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    userChoice = e.target.innerText;
    // hrant
  });
}
