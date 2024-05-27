/** 
## Example 7 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
*/

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

const logItems = (items) => {
  console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
  items.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
};

logItems(["Mango", "Poly", "Ajax"]); // 1-Mango, 2-Poly, 3-Ajax
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
