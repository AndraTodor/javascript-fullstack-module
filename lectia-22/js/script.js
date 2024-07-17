// // /*
// //     1. await poate fi utilizat numai în cadrul funcțiilor asincrone
// //     2. instrucțiunea await îngheață execuția unei funcții asincrone până când promisiunea intră în starea respinsă sau îndeplinită
// //     (adică simulăm sincronicitatea în execuția codului asincron)
// //     3. await nu va returna o promisiune, ci rezultatul acesteia
// //     4. o funcție asincronă returnează întotdeauna o promisiune
// // */

// function getStone(stoneName) {
//   const stones = {
//     Emerald: {
//       price: 1300,
//       quantity: 4,
//     },
//     Diamond: {
//       price: 2700,
//       quantity: 3,
//     },
//     Sapphire: {
//       price: 400,
//       quantity: 7,
//     },
//     Rubble: {
//       price: 200,
//       quantity: 2,
//     },
//   };

//   return new Promise((resolve) =>
//     setTimeout(() => resolve(stones[stoneName]), 1000)
//   );
// }

// const getStonesAsync = async () => {
//   const emerald = getStone("Emerald"); // promis 1
//   const rubble = getStone("Rubble"); // promis 2
//   const stones = await Promise.all([emerald, rubble]);

//   console.log(stones);
//   return stones;
// };

// // const getStonesFunction = () => {
// //   getStone("Emerald").then((stone) => {
// //     console.log(stone);
// //     getStone("Rubble").then((stone) => {
// //       console.log(stone);
// //     });
// //   });
// // };

// getStonesAsync();

// // getStonesFunction();

console.log("1"); // sincrona

setTimeout(() => {
  console.log("2");
}, 0); // asincrona

const promise = new Promise((res) => {
  console.log("5"); // sincron
  res("4");
});

promise.then((data) => console.log(data));

const test = async () => {
  console.log("6"); //sincrona
  const res = await new Promise((resolve) => setTimeout(resolve("7"), 0));
  return res;
};
test().then((data) => console.log(data));

// operatiile sincrone
// microtask-urile (promise-uri, functii async,await => promise)
// macrotask-urile (setTimeout)
