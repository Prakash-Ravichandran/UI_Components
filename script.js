/* 
1. Catch element
2. attach events
3. write function

*/

var accItem = document.getElementsByClassName("accordion__item-description");
var allPanels = document.querySelectorAll("div.accordion__panel");

// attach events
for (let i = 0; i < accItem.length; i++) {
  accItem[i].addEventListener("click", toggleAccordion, false);
}

function toggleAccordion(e) {
  var accordionParent = this.parentNode;
  let currentPanel = accordionParent.lastElementChild;

  for (let j = 0; j < allPanels.length; j++) {
    if (currentPanel.className == "accordion__panel open") {
      continue; // Skip close for current item
    } else {
      allPanels[j].className = "accordion__panel close"; // close for remaining item
    }
  }

  // toggle open close for current item
  currentPanel.className =
    currentPanel.className == "accordion__panel open"
      ? "accordion__panel close"
      : "accordion__panel open";
}
