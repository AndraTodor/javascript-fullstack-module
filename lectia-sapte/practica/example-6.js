/**

## Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.

```js
 */
const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
); // [128,98.......]

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
); // [54,39........]

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
); // [8,7,6.......]

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
); // [2,3,17.......]

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
); // [1,2,16........]
