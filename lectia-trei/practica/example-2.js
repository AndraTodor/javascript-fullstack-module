/*
## Example 2 - Arrays and Strings

Write a script to calculate the area of a rectangle with sides, which
values are stored in the `values` variable as a string. Values guaranteed
separated by a space.
*/

const values = "8 11";

//din string-ul values trebuie sa creem 2 variable , prima var = 8 ca si numar, a doua var = 11 ca si numar
//calculam aria prima var * a doua var

const rectangleValues = values.split(" ");
console.log(rectangleValues);

const height = Number.parseInt(rectangleValues[0]);
const width = Number.parseInt(rectangleValues[1]);

const aria = height * width;
console.log(aria);
