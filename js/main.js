class todoValues {
  constructor(item, done) {
    this.item = item;
    this.done = done;
  }
}

let todoList = [];

let newTodo = new todoValues("Bädda", false);
let newTodo2 = new todoValues("Handla", false);
let newTodo3 = new todoValues("Jobba", false);
let newTodo4 = new todoValues("Plugga", false);
todoList.push(newTodo);
todoList.push(newTodo2);
todoList.push(newTodo3);
todoList.push(newTodo4);

let todoContainer = document.createElement("div");
todoContainer.className = "todoContainer";

writeList();

function writeList() {
  todoContainer.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let currentItem = todoList[i]

    let ul = document.createElement("ul");
    ul.className = "listUl";

    let li = document.createElement("li");
    li.className = "listLi";
    li.innerHTML = currentItem.item;

    let doneButton = document.createElement("input");
    doneButton.setAttribute("type", "checkbox");
    doneButton.className = "doneButtons";

    let removeButton = document.createElement("button");
    removeButton.className = "removeButtons";
    removeButton.setAttribute("type", "button");
    removeButton.innerHTML = '<i class="bi bi-x-square-fill"></i>';

    let doneButtonContainer = document.createElement("li");
    let removeButtonContainer = document.createElement("li");
    doneButtonContainer.appendChild(doneButton);
    removeButtonContainer.appendChild(removeButton);

    let buttonStyle = li;

    doneButton.addEventListener("change", checkIfDone);

    function checkIfDone() {
      if (doneButton.done == true) {
        buttonStyle.style.textDecoration = "line-through";
        currentItem.done = true;
        ul.style.backgroundColor = "gray";
      } else {
        buttonStyle.style.textDecoration = "none";
        currentItem.done = false;
        ul.style.backgroundColor = "white";
      }
    }

    removeButton.addEventListener("click", removeToDo);
    function removeToDo() {
      todoList.splice(i, 1);
      writeList();
    }

    todoContainer.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(doneButtonContainer);
    ul.appendChild(removeButtonContainer);
  }
}

let inputField = document.getElementById("inputField");
document.getElementById("toDoForm").addEventListener("submit", addNewToDo);

function addNewToDo(e) {
  e.preventDefault();
  let Usertext = inputField.value;
  if (Usertext !== "") {
    let newToDoItem = new todoValues(Usertext, false);
    todoList.push(newToDoItem);
    inputField.value = "";
    writeList();
  }
}

function sortList() {
  todoList.sort(function (a, b) {
    if (a.item.toLowerCase() < b.item.toLowerCase()) return -1;
    if (a.item.toLowerCase() > b.item.toLowerCase()) return 1;
    return 0;
  });

  writeList();
}

let sortBtn = document
  .getElementById("sortBtn")
  .addEventListener("click", sortList);

document.getElementById("container").appendChild(todoContainer);
