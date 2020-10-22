let listsElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let lists = JSON.parse(localStorage.getItem("listItems")) || [];

function renderLists() {
  listsElement.innerHTML = "";

  for (list of lists) {
    let listElement = document.createElement("li");
    let listText = document.createTextNode(list);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    let pos = lists.indexOf(list);

    linkElement.setAttribute("onclick", "deleteItem(" + pos + ")");

    let linkText = document.createTextNode("Delete");

    linkElement.appendChild(linkText);

    listElement.appendChild(listText);

    listElement.appendChild(linkElement);

    listsElement.appendChild(listElement);
  }
}

renderLists();

function addItem() {
  let listText = inputElement.value;

  lists.push(listText);
  inputElement.value = "";
  renderLists();
  saveToStorage();
}

buttonElement.onclick = addItem;

function deleteItem(pos) {
  lists.splice(pos, 1);
  renderLists();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("listItems", JSON.stringify(lists));
}
