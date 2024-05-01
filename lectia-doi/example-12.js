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
  }
  else if (password === "I'm an admin") {
    console.log("Hello");
  }
      else {
        console.log("Wrong password");
      }
    }
else if (login === null || login === "") {
  console.log(Canceled);
}
  else {
  console.log("I don't know you");
}