/*## Example 7 - Average value

Write a `calAverage()` function that takes an arbitrary number of arguments
and returns their average. All arguments will be only numbers.
*/

// function calAverage() {
//   let total = 0;
//   //   const arr = [1, 2, 3];
//   //   console.log("arr: ", arr);
//   console.log("arguments: ", arguments);

//   for (let i = 0; i < arguments.length; i++) {
//     total = total + arguments[i];
//   }

//   const average = total / arguments.length;

//   return average;
// }

// alta solutie

function calcAverage(...args) {
  const sum = args.reduce((total, num) => total + num, 0);
  const average = sum / args.length;
  return average;
}
console.log(calcAverage(1, 2, 3, 4)); // 2.5
console.log(calcAverage(14, 8, 2)); // 8
console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2
