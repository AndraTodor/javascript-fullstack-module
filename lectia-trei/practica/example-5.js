/*
## Example 5 - Arrays and Strings

Write a script that prints to the console all the words of a string except the first and
the last one. The resulting string must not start or end
whitespace character. The script should work for any line.

```js
```
*/

const string = "       Welcome to the future";
// console.log(string);

const words = string.split(" ");
console.log(words);

//iteram array-ul de string-uri creat
//verificam daca avem spatiu
//cream un cuvant nou fara acest spatii de inceput

let finalString = "";
for (const word of words) {
  if (word !== "") {
    finalString += word + " ";
  }
}
console.log(finalString.split(" "));
