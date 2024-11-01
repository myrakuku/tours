function replaceFirstItem () {
    const firstItem = document.querySelector("li:first-child");
    const li = document.createElement("li");
    li.textContent = "Replace First LI";
    firstItem.replaceWith(li);
}
replaceFirstItem();

function replaceALLItems() {
    const lis = document.querySelectorAll("li");
    lis.forEach((item, index) => {
        // if (index === 1) {
        //     item.innerHTML = "First replaced item";
        // } else {
        //     item.innerHTML = "Replaced all";
        // }
        item.innerHTML = index === 1 ? "First replaced item" : "Replaced all";
    });
}
replaceALLItems();

function replaceChildHeading() {
    const header = document.qq("header");
    const h1 = document.querySelector("header h1");
    const h2 = document.createElement("h2");
    h2.id = "app-title";
    h2.textContent = "Shopping list" ;
    header.replaceCHild(h2, h1); //h2 replace h1
}
replaceChildHeading();