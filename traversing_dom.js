let output;
// get child element from a parent
const parent = document.getElementById("item-form");
const children = parent.children;
console.log(children);
// child[1].innerText = "hello" ;
console.log(children[1].className);
console.log(children[1].nodeName);
console.log(children[1].localName);

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);
console.log(parent.children[0].nextElementSibling.innerText);

// Error: children[0] no previous child
// console.log(parent.children[0].previousElementSibling.innerText);

console.log(parent.parentElement);
parent.parentElement.style.backgroundColor = "lightgreen"
const secondItem = document.querySelector(".item:nth-child(2") // Orange
console.log(secondItem);
secondItem.nextElementSibling.style.color = "red"
secondItem.previousElementSibling.style.color = "blue"
