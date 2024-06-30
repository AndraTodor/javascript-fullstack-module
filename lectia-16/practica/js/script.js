// const myObj = {
//   test: "test",
//   test1: "test1",
//   test2: "test2",
//   test3: "test3",
//   "test-4": "test4",
// };

// console.log(myObj["test-4"]);

// console.log("before try catch");
// const data = '{"name": "Silviu", "age":30,}';

// try {
//   console.log(JSON.parse(data));
// } catch (error) {
//   console.error("Eroare de parsare", error);
// } // Error handling

// console.log("Restul codului");

// for (let i = 0; i <= 10; i++) {
//   try {
//     console.log(i);
//     if (i === 5) throw new Error("i is 5");
//     console.log("restul codului");
//   } catch (error) {
//     console.error("Eroare din for", error);
//   }
// }
// myObj = {
//   name: 2,
//   age: 3,
// };
import { save, load } from "./storage.js";

const addBtn = document.getElementById("addBtn");
const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");
let currentId = 0;
addBtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handleTaskBehaviour);
window.addEventListener("DOMContentLoaded", fillTasksList);

function addNewTask() {
  const value = myInput.value;

  if (!value) {
    alert("Trebuie sa introduci ceva in input");
    return;
  }

  createLi(value);
  addTaskToStorage(value);
  myInput.value = "";
}

function createLi(text, isDone = false, id = currentId) {
  const listElement = document.createElement("li");
  const listText = document.createTextNode(text);
  listElement.appendChild(listText);
  listElement.dataset.id = id;
  myUL.appendChild(listElement);
  addCloseButton(listElement);
  if (isDone) {
    listElement.classList.add("checked");
  }
}

function addCloseButton(li) {
  const span = document.createElement("span");
  const text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
}

const createTaskObject = (text, isDone) => ({ text, isDone, id: currentId });

function addTaskToStorage(text, isDone) {
  let currentState = load("tasks");
  const newTask = createTaskObject(text, isDone);
  if (currentState === undefined) {
    save("tasks", [newTask]);
  } else {
    currentState.push(newTask);
    save("tasks", currentState);
  }
  currentId++;
}

function fillTasksList() {
  const currentState = load("tasks");
  if (currentState !== undefined) {
    currentState.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
    currentId = currentState[currentState.length - 1].id + 1;
  }
}

function handleTaskBehaviour({ target }) {
  const currentState = load("tasks");

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    const taskIndex = currentState.findIndex(
      (taskObj) => +taskObj.id === +target.dataset.id
    );
    currentState[taskIndex].isDone = !currentState[taskIndex].isDone;
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    const taskIndex = currentState.findIndex(
      (taskObj) => +taskObj.id === +target.dataset.id
    );
    currentState.splice(taskIndex, 1);
  }
  save("tasks", currentState);
}
