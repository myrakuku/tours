function createItem (item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    const button = createSubElement("remove-item btn-link text-red");
    const icon = createSubElement("fa-solid fa-xmark");
    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}

// function createButton (classes) {
//     const button = document.createElement("button");
//     button.className = classes;
//     const icon = createIcon("fa-solid fa-xmark");
//     button.appendChild(icon);
//     return button;
// }

function createSubElement (classes) {
    const SubElement = document.createElement("e_type");
    SubElement.className = classes;
    return SubElement;
}


// function createIcon (classes) {
//     const icon = document.createElement("icon");
//     icon.className = classes;
//     return icon; 
// }

createItem("orange");
createItem("mango");