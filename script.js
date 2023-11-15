/* 
1. Catch element
2. attach events
3. write function

*/

var acc = document.getElementsByClassName("accordion__item");
var allPanels = document.querySelectorAll("div.accordion__panel");
var symbols = document.querySelectorAll(
  "div.accordion__item-description > span.material-icons"
);
var radioBtns = document.querySelectorAll('input[type="checkbox"]');

// attach events
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", toggleAccordion, false);
}

function toggleAccordion() {
  let currentPanel = this.lastElementChild;
  let currentPanelSymbol = this.firstElementChild.firstElementChild;

  for (let j = 0; j < allPanels.length; j++) {
    if (currentPanel.className == "accordion__panel open") {
      continue; // Skip close for current item
    } else {
      allPanels[j].className = "accordion__panel close"; // close for remaining item
      symbols[j].innerHTML = "add";
    }
  }

  try {
    // toggle open close for current item
    currentPanel.className =
      currentPanel.className == "accordion__panel open"
        ? "accordion__panel close"
        : "accordion__panel open";

    currentPanelSymbol.innerHTML =
      currentPanelSymbol.innerHTML == "remove" ? "add" : "remove";
  } catch (e) {
    console.log("error message =" + e.message);
  }
}
