/*

## Example 3 - Area of a rectangle

Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
with sides, the values of which will be passed to the `dimensions` parameter as a string.
Values are guaranteed to be separated by a space.

*/

function getRectArea(dimensions) {
  // separam dimensiunea data in doua striguri
  const sides = dimensions.split(" ");
  // convertim stringurile in numere
  const length = parseFloat(sides[0]);
  const width = parseFloat(sides[1]);
  // calculam aria intr-o variabila
  const area = length * width;
  // returnam valoarea
  return area;
}
// declaram o variabila cu stringul de dimensiuni
const dimensions = "5 10";
console.log(getRectArea(dimensions));

// function getRectArea(dimensions) {
//   const values = dimensions.split(" "); // ["8","11"]
//   const dimensionsA = Number(values[0]);
//   const dimensionsB = Number(values[1]);

//   const area = dimensionsA * dimensionsB;

//   return area;
// }

// console.log(getRectArea("8 11"));
