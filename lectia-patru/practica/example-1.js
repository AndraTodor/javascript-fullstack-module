/*## Example 1 - Body mass index

Write a function `calcBMI(weight, height)` that calculates and returns the body mass
index of a person. To do this, divide the weight in kilograms by
square of a person's height in meters.

The weight and height will be specially passed as strings. Non-integer numbers can be
specified as `24.7` or `24.7`, i.e. a comma can be used
as a decimal separator.

Body mass index must be rounded to one decimal place;
*/

function calcBMI(weight, height) {
  const parsedWeight = Number(weight.replace(",", "."));
  const parsedHeight = Number(height.replace(",", "."));

  const result = parsedWeight / parsedHeight ** 2;

  return result;
}

const bmi = calcBMI("88,3", "1.75");

console.log(bmi); // 28.8

// Exercitii extra
// 1.
function multiply(x, y) {
  return x * y;
}
let result = multiply(2, 2);
console.log(result);

// 2.
function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));

// 3.
function count(from = 0, to = 10, step = 1) {
  console.log(`countfFrom = ${from}, countTo = ${to}, step = ${step}`);
  for (let i = from; i <= to; i += step) {
    console.log(i);
  }
}
count(1, 7);

// 4. arguments

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// SAU

function suma(...args) {
  let rezultat = 0;
  for (let arg of args) {
    rezultat += arg;
  }
  return rezultat;
}
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function exemplu(...args) {
  console.log("Nr. de argumente:", args.length);
  console.log("Argumentele:", args);
}
exemplu(1, 2, 3);

// function division(x, y) {
//   console.log(`Impartirea este: ${x / y}`);
//   // return x / y;
// }
// division(4, 2);

const division = function (x, y) {
  return `Rezultatul impartirii este: ${x / y}`;
};
console.log(division(4, 2));

// 5. callstak
function fnA() {
  console.log("Log în interiorul funcției fnA înainte de a apela fnB");
  fnB();
  console.log("Log în interiorul funcției fnA după ce se apelează fnB");
}

function fnB() {
  console.log("Log în interiorul funcției fnB");
}

console.log("Log înainte de a apela fnA");
fnA();
console.log("Log după apelul lui fnA");
