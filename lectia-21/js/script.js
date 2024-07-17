import { addNewTask, handleTask, fillTask } from "./functions.js";

const addBtn = document.querySelector("#addBtn");
const myUL = document.querySelector("#myUL");

addBtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handleTask);

window.addEventListener("DOMContentLoaded", fillTask);
