// // scope block 
// // scope global

const value = 5;

if(true) {
    let valueBlock = 7;
    console.log("Din interiorul block-ului2", valueBlock); 
    console.log("Din interiorul block-ului", value); 
    
}

// console.log("Din exteriorul block-ului", value)
// console.log("Din exteriorul block-ului2", valueBlock)

// // var - are scope global indiferent de unde este declarat -> are INTOTDEAUNA scope global
// // let si const -> au intotdeauna scope BLOCK

/*Example 1 - User Input and Branching

Using the if..else and prompt constructs, write code that will ask:
"What is the official name of JavaScript?".

If the user enters ECMAScript, then show an alert with the string "Correct!",
otherwise - "Do not know? ECMAScript!"
*/

// prompt -> (intrebam utilizator) -> Care este numele oficial al Javascript
// in caz ca raspunde corect -> output ceva
// in caz ca raspunde gresit -> output altceva

const answer = prompt('Care este numele oficial al Javascript?');
const correctAnswer = 'ECMAScript';

if( answer === correctAnswer ) {
    alert('Corect');
} else {
    alert('Tu stii? ECMAScript');
}



