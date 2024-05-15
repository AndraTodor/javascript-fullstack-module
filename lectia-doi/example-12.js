// OPERATOR TERNAR vs WHILE

// for (let i = 0; i <= 10; i = i + 2) {
//   console.log(i);
// }

// let counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter += 2;
// }

/*Example 12 - User Input and Branching
Write a script that will ask for login using prompt and log result in browser console.

If the visitor enters "Admin", then prompt prompts for a password
If nothing is entered or the Esc key is pressed - print the line "Canceled"
Otherwise print the string "I don't know you"

Check password like this:

If the password is "I'm an admin", then output the string "Hello!"
Else output the string "Wrong password"*/

var login = prompt("Please enter your ID:");
if (login === "Admin") {
  var password = prompt("Please enter your password:");
  if (password === null || password === "") {
    console.log("Canceled");
  } else if (password === "I'm an admin") {
    console.log("Hello");
  } else {
    console.log("Wrong password");
  }
} else if (login === null || login === "") {
  console.log(Canceled);
} else {
  console.log("I don't know you");
}

/*
restul impartirii unui nr. la alt nr.
*/

const max = 10;
for (let i = 0; i <= max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// operator BREAK - gasirea numarului 3

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Am găsit numărul 3, întrerupem bucla");
    break;
  }
}
console.log("Log după buclă");

// operator CONTINUE - tiparire numere pare

const number = 10;
for (let i = 0; i < number; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Numarul impar i:`, i);
}

// Array
// FOR
const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

// FOR ...OF

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// iterarea literelor dintr-un string

const string = "javascript";

for (const litera of string) {
  console.log(litera);
}

// cautarea unui client

// const clients = ["Mango", "Poly", "Ajax"]; - ACELASI ARRAY CA MAI SUS
const clientNameToFind = "Poly";
let message = "Nu există nici un client cu acest nume în baza de date!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Clientul cu acest nume există în baza de date!";
    break;
  }
  // Dacă nu se potrivește, atunci nu facem nimic la această iterație
}

console.log(message);

// iterarea numerelor mai mari decat un nr.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Pentru numere mai mici decât valoarea limită, va funcționa continue, iar corpul
// // execuției statement se oprește.
// // Se va efectua următoarea iterație.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Numărul este mai mare decât ${threshold}: ${numbers[i]}`);
// }

// ex 8 din lectia 3 - min si max dintr-un array cu loop

const numbers = [2, 0, 7, 45, 346, 543, 234, 23, 24];

let min = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
  console.log(min);
}
console.log("valoarea minima este:", min);
