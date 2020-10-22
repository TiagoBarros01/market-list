let listsElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let lists = ["Pão de hamburger", "Mel", "Cobertura de chocolate"];

function renderLists() {
    for (list of lists) {
        const listElement = document.createElement("li");
        const listText = document.createTextNode(list)

        listElement.appendChild(listText)
        listsElement.appendChild(listElement)
    }
}

renderLists()