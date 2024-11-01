const clearBtn = document.querySelector("#clear");
// clearBtn.onclick = () => {
//     alert("clear all");
// };

// clearBtn.onclick = () => {
//     console.log("clear all");
// };

// case 2 : add event listener to a button
// clearBtn.addEventListener("click", () => {
//     alert("clear all2");
// });

// clearBtn.addEventListener("click", () => {
//     alert("clear all3");
// });

// case 3 : use callback function name
function onClear() {
    const itemList = document.querySelector("ul");
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    console.log('end');
    
}

clearBtn.addEventListener("click", onClear);

// case 4 : event listener with web API
// setTimeout(() => clearBtn.addEventListener("click", onClear), 5000);

setTimeout(() => clearBtn.removeEventListener("click", onClear), 3000);