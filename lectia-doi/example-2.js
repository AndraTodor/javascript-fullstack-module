/*
Example 2 - Time display (if...else)

Write a script to display hours and minutes in the browser console as
a string format "14 ore 26 minute.". 

If the value of the minutes variable
is 0, then output the string "14 fix", without minutes.
*/

const ore = 14;
const minute = 0;

// console.log(`${ore} ore ${minute} minute.`)


if ( minute === 0 ) {
    console.log(`${ore} fix`);
} else {
    console.log(`${ore} ore ${minute} minute.`)
}

// minute === 0 ? console.log(`${ore} fix`) : console.log(`${ore} ore ${minute} minute.`);