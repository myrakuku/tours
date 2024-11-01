let output;

const parent = document.querySelector(".items");
console.log(parent);
output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[8].outerHTML;
// output = parent.childNodes[3].outerHTML = "<!-- Comment -->";
output = parent.childNodes[3].innerText = "hello";
// output = parent.childNodes[3].style.color = "red";
// output = parent.childNodes[3].nextSibling;
output = parent.childNodes[3].nextSibling.nextSibling;
output = parent.childNodes[3].nextSibling.parentNode;
console.log(output);
