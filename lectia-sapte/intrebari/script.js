//functie declaratie

function doSomething() {
  console.log("Something");
}

const doOtherThing = function () {
  console.log("Other Thing");
};

//expresie de functie
const doSomethingElse = () => {
  console.log("Something Else Arrow");
};

doSomethingElse();

const result = doSomethingElse;

console.log("referinta", result);
console.log("Apelam", result());
