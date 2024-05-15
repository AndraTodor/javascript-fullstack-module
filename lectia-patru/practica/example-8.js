/*
## Example 8 - Time Formatting

Write a function `formatTime(minutes)` that will translate the value of `minutes`
(number of minutes) to a string in hour and minute format `HH:MM`.
*/
function formatTime(minutes) {
  // Aflam numarul de ore si il aproximam in jos
  const hours = Math.floor(minutes / 60);
  // aflam restul impartirii pentru minute
  const restMinutes = minutes % 60;
  // transformam minutele si orele in stringuri si adaugam un 0 in fata, pentru lungimea 2
  const stringHours = String(hours).padStart(2, 0);
  const stringMinutes = String(restMinutes).padStart(2, 0);
  const result = stringHours + ":" + stringMinutes;

  return result;
}

console.log(formatTime(70)); // "01:10" 70/60 => 1 r 10
console.log(formatTime(450)); // "07:30" 450/60 => 7 r 30
console.log(formatTime(1441)); // "24:01"
