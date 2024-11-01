function removeClearButton() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}
// remove child from parent
removeClearButton(); 
function removeFirstItem() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child")
    ul.removeChild(li);
}
removeFirstItem();

function removeItem(itemNumber) {
    // Case 1 : remove child from parent
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
// removeItem(3);

function removeItem2(itemNumber) {
    // Case 2 : delete item from parent by index
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber - 1];
    ul.removeChild(li);
}
// removeItem2(3);

function removeItem3(itemNumber) {
    // Case 3 : delete item direct by index
    const li = document.querySelectorAll("li")
    li[itemNumber - 1].remove();
}
// removeItem3(1);

function removeItem4(itemNumber) {
    // Case 4 : delete item direct by element
    document.querySelectorAll("li")[itemNumber -1].remove();
}
removeItem4(3);