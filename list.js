let listsElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let lists = ["Pão de hamburger", "Mel", "Cobertura de chocolate"];

function renderLists() {
  listsElement.innerHTML = "";

  for (list of lists) {
    let listElement = document.createElement("li");
    let listText = document.createTextNode(list);

    listElement.appendChild(listText);
    listsElement.appendChild(listElement);
  }
}

renderLists();

function addItem() {
  let listText = inputElement.value;

  lists.push(listText);
  inputElement.value = "";
  renderLists();
}

buttonElement.onclick = addItem;
