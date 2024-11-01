// Create <div></div>
const div = document.createElement("div");

// Create <div class="my-element"></div>
div.className = "my-element";

// id = "my-element"
div.id = "my-element";

// title = "My Element"
div.setAttribute("title", "My Element");

// <div>my Element</div>
div.textContent = "my Element";



// Crete <p>Hello world</p>
const text = document.createTextNode("Hello world");
div.appendChild(text);
document.querySelector("ul").appendChild(div);
console.log(document.querySelector("ul"));