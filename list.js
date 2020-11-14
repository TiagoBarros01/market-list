const title = document.querySelector(".title-header");
const positionItem = document.querySelector(".position-item");
const listsElement = document.querySelector("#app ul");
const app = document.querySelector("#app");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

let lists = JSON.parse(localStorage.getItem("listItems")) || [];

lists.length >= 1 ? (title.style.display = "none") : console.log(lists.length);

function renderLists() {
  listsElement.innerHTML = "";

  // List items
  for (list of lists) {
    let listElement = document.createElement("li");
    let listText = document.createTextNode(list);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    let pos = lists.indexOf(list);

    linkElement.setAttribute("onclick", `deleteItem(${pos})`);

    let linkText = document.createTextNode("x");

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
let maxItemsText = document.createTextNode("Maximum number reached!");
maxItems.setAttribute("class", "max-items");

function addItem() {
  let listText = inputElement.value;

  lists.length >= 0 && listText !== "" ? (title.style.display = "none") : false;

  lists.length >= 12 && total < 1
    ? (total++,
      maxItems.appendChild(maxItemsImg),
      maxItems.appendChild(maxItemsText),
      positionItem.appendChild(maxItems),
      (positionItem.style.display = "flex"),
      (positionItem.style.transition = "1s"),
      console.log(total))
    : listText === ""
    ? (console.warn("Write something to add to the list!"),
      alert("Write something to add to the list!"))
    : lists.length < 12
    ? lists.push(listText)
    : false;

  inputElement.value = "";
  renderLists();
  saveToStorage();
}

buttonElement.onclick = addItem;

function deleteItem(pos) {
  positionItem.style.display = "none";
  total = 0;
  console.log(total);
  lists.splice(pos, 1);
  renderLists();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("listItems", JSON.stringify(lists));
}
