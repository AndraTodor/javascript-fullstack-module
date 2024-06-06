/*
## Example 3 -Calculator

Create a `calculator` object with three methods:

- `write(a, b)`- takes two values and stores them as object properties.
- `add()` - returns the sum of the stored values.
- `mult()` - multiplies the stored values and returns the result.
*/
const calculator = {
  firstNumber: 0,
  secondNumber: 0,
  write: function (firstValue, secondValue) {
    this.firstNumber = firstValue;
    this.secondNumber = secondValue;
  },
  log: function () {
    console.log(
      `Valorile pentru cele doua numere sunt: ${this.firstNumber} si ${this.secondNumber}`
    );
  },
  add: function () {
    const sum = this.firstNumber + this.secondNumber;
    return sum;
  },
  mult: function () {
    const multiply = this.firstNumber * this.secondNumber;
    return multiply;
  },
};

calculator.write(3, 5);
console.log(calculator);
calculator.log();
console.log(calculator.add());
console.log(calculator.mult());
