let title = document.querySelector(".title-header");
let app = document.querySelector(".position-item");
let listsElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let lists = JSON.parse(localStorage.getItem("listItems")) || [];

if (lists.length >= 1) {
  title.style.display = "none";
}

console.log(lists.length);

function renderLists() {
  listsElement.innerHTML = "";

  // List items
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

let total = 0;
let maxItemsImg = document.createElement("img");
maxItemsImg.setAttribute("src", "img/warning.svg");
maxItemsImg.setAttribute("class", "warning");

let maxItems = document.createElement("div");
let maxItemsText = document.createTextNode("Número máximo atingido!");
maxItems.setAttribute("class", "max-items");

function addItem() {
  let listText = inputElement.value;

  if (lists.length >= 0 && listText !== "") {
    title.style.display = "none";
  }

  if (lists.length >= 12 && total < 1) {
    total++;
    maxItems.appendChild(maxItemsImg);
    maxItems.appendChild(maxItemsText);
    app.appendChild(maxItems);
    app.style.display = "flex";
    app.style.transition = "1s";

    console.log(total);
  } else if (listText === "") {
    console.warn("Escreva algo para adicionar a lista!");
    alert("Escreva algo para adicionar a lista!");
  } else if (lists.length < 12) {
    lists.push(listText);
  }

  inputElement.value = "";
  renderLists();
  saveToStorage();
}

buttonElement.onclick = addItem;

function deleteItem(pos) {
  app.style.display = "none";
  total = 0;
  console.log(total);
  lists.splice(pos, 1);
  renderLists();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("listItems", JSON.stringify(lists));
}
