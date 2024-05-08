/*
## Example 4 -Arrays and Loops

Write a script that prints the user's name and phone number to the console.

The `names` and `phones` variables store strings of names and phone numbers,
separated by commas. The sequence number of names and phone numbers in the lines indicates a match.
 The number of names and phone numbers is guaranteed to be the same.
*/

const names = "Sergiu,Silviu,Alexandru,Eduard,Mircea";
const phones = "0732832134,0722132144,0712832321,0742632211,0724836879";

//din acest string mare separat cu virgula sa cream un array de stringuri
//iteram array-urile ca se le logam, printam, afisam in consola

const arrayOfNames = names.split(",");
console.log(arrayOfNames);

const arrayOfPhones = phones.split(",");
console.log(arrayOfPhones);

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(`${arrayOfNames[i]}: ${arrayOfPhones[i]}`);
}
