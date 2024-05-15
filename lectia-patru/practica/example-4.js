/*
## Example 4 - Element logging

Write a function `logItems(items)` that takes an array and uses a `for` loop
that for each element of the array will print a message to the console
in the format `<item number> - <item value>`. The numbering
of elements should start with `1`.

For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
will print `1 - Mango` and for index 2 will print `3 - Ajax`.
*/
const array = [];

function logItems(items) {
  for (let i = 0; i < items.length; i++) {
    numberOfItem = i + 1;
    const value = items[i];

    console.log(numberOfItem + " - " + value);
    array.push(value);
  }
}

console.log(array);

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// alta solutie
function log(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}
const names = ["Andra", "Cristi"];
log(names);
