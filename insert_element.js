function insertElement () {
    const filter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement" ;

    // apply insertAdjacentElement can only apply once to the same element
    // filter.insertAdjacentElement("beforebegin", h1);
    const h1clone = h1.cloneNode(true);
    // filter.insertAdjacentElement("afterend", h1clone);

    //inside box
    // filter.insertAdjacentElement("afterbegin", h1);
    // filter.insertAdjacentElement("beforeend", h1clone);
}
insertElement();

function insertText() {
    const item = document.querySelector("li:first-child")
    // item.insertAdjacentText("beforebegin", "insertAdjustText");
    // item.insertAdjacentText("afterend", "insertAdjustText");

    //inside box
    // item.insertAdjacentText("afterbegin", "insertAdjustText");
    // item.insertAdjacentText("beforeend", "insertAdjustText");
}
insertText();

function insertHtml() {
    const cleanBtn = document.querySelector("#clear");
    // cleanBtn.insertAdjacentHTML("beforebegin","<h2>insertAdjustHTML</h2>");
    // cleanBtn.insertAdjacentHTML("afterend","<h2>insertAdjustHTML</h2>");

    //inside box
    cleanBtn.insertAdjacentHTML("afterbegin","<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("beforeend","<h2>insertAdjustHTML</h2>");
}
insertHtml();

function insertBeforeItem () {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insertBefore";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li,thirdItem);
}
insertBeforeItem();


// Create a new After function
function insertAfter (newE, existingE) {
    existingE.parentElement.insertBefore(newE, existingE.nextSibling);
}
const li = document.createElement("li");
li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(4)");

insertAfter(li, firstItem);