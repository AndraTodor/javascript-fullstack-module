import { saveTask, getAllTasks, updateTask, deleteTask } from "./api.js";
const myInput = document.querySelector("#myInput");
const myUL = document.querySelector("#myUL");
let currentId = 1;

const addNewTask = () => {
  const inputValue = myInput.value.trim();
  if (inputValue === "") {
    alert("Trebuie sa introduci o valoare in input");
    return;
  }
  createLI(inputValue);
  myInput.value = "";
  addTaskToDB(inputValue);
};

function createLI(text, isDone = false, id = currentId) {
  const liEL = document.createElement("li");
  const liText = document.createTextNode(text);
  liEL.appendChild(liText);
  liEL.dataset.id = id;
  if (isDone) {
    liEL.classList = "checked";
  }
  myUL.appendChild(liEL);
  addCloseButton(liEL);
}

function addCloseButton(li) {
  const span = document.createElement("span");
  const text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
}

function addTaskToDB(text, isDone = false) {
  const newTask = { text, isDone };
  saveTask(newTask);
  currentId += 1;
}

const handleTask = ({ target }) => {
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    updateTask(target.dataset.id, target.classList.contains("checked"));
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
};

const fillTask = () => {
  getAllTasks()
    .then((todos) => {
      todos.forEach(({ text, isDone, id }) => {
        createLI(text, isDone, id);
      });
      return todos;
    })
    .then((todos) => {
      currentId =
        todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
    });
};
export { addNewTask, handleTask, fillTask };
