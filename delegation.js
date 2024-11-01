// Remove all li items (include X icon)
// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.target.remove();
//     });
// });

// Remove 
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
    // Delete X mark + "BUTTON" + "LI" Apple
    if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
    }
    // Delete Apple
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
    // if (e.target.tagName === "BUTTON") {
    //     e.target.parentElement.remove();
    // }

});