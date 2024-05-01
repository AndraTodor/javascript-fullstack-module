/*
Example 11 - The for loop
Write a for loop that prints numbers in ascending order to the browser console
from min to max, but only if the number is a multiple of 5.
*/

const min = 1;
const max = 76;

for (let i = min; i <= max; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

//primul pas
// i = 10 , este 10 < = 100 , i = 11
// if ( 10 % 5 === 0 )  este adevarat  => console.log(10)

// i = 11 , este 11 < = 100 , i=12
// if ( 11 % 5 === 1) este fals

// 12, 13, 14,
// i = 15 , este 15 < = 100 , i = 16
// if (15 % 5 === 0 ) este adevarat => console.log(15)
// .................. i = 100 => i=100 , este 100 < = 100 , i= 101
// if ( 100%5===0) este adevarat => console.log(100)
// i= 101 , este fals => se inchide for-ul, se iese din for.
