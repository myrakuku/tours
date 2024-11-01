// on page load

// window.onload = function () {
//     console.log("window loaded");
//     document.querySelector("h1").textContent = "Hello World";
    
// };

window.addEventListener("load", function() {
    console.log("page loaded");
});

// DOM will be run at first
window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
});

console.log("hello world");

// Resize
window.addEventListener("resize", function() {
    document.querySelector("h1").textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// scroll event
window.addEventListener("scroll", function() {
    console.log(`scrolled to ${window.scrollX} x ${window.scrollY}`);
    if (window.scrollY > 50) {
        document.querySelector("h1").style.backgroundColor = "red"
    }
});

//focus & blur
window.addEventListener("focus", function() {
    document.querySelectorAll("p").forEach((p) =>
    (p.style.color = "red"));
});

window.addEventListener("blur", function() {
    document.querySelectorAll("p").forEach((p) =>
    (p.style.color = "black"));
});