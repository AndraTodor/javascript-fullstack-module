// // console.log("A");

// // Promise.reject("B")
// //   .then(
// //     (value) => console.log(value),
// //     (err) => console.log("Erroare din then", err)
// //   )
// //   .catch((err) => console.log("Erroare din catch", err))
// //   .finally(() => console.log("D"));

// // console.log("Z");
// // https://redberry.international/what-is-event-loop-things-to-know/

// // console.log("Request data.....");
// // setTimeout(() => {
// //   console.log("Preparing data....");

// //   const data = {
// //     id: 1,
// //     name: "Silviu",
// //   };

// //   setTimeout(() => {
// //     console.log("Data received", data);
// //   }, 2000);
// // }, 2000);
// // console.log("Cod executat dupa");

// console.log("Request data......");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data....");

//     const data = {
//       id: undefined,
//       name: "Silviu",
//       status: "online",
//     };

//     if (!data.id) {
//       reject(data);
//     }

//     resolve(data);
//   }, 2000);
// });

// console.log("Cod executat dupa");

// promise
//   .then((data) => {
//     data.status = "changed";
//     //console.log(data);
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("End of the promise"));

// const statusMessage = document.getElementById("statusMessage");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       status: "ok",
//       message: "Totul a fost ok",
//     });
//     reject({
//       status: "rejected",
//       message: "The promise was rejectd",
//     });
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//     statusMessage.innerHTML = `<h1>${value.status}</h1><p>${value.message}</p>`;
//   })
//   .catch((error) => {
//     console.log(error);
//     statusMessage.innerHTML = `<h1>${error.status}</h1><p>${error.message}</p>`;
//   });

// const financeEl = document.getElementById("userFinance");

// const getIncomeFc = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve({ venituri: "1000 RON" }), 2000)
//   );

// const getExpenseFc = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve({ cheltuieli: "1000 RON" }), 10000)
//   );

// const promiseArr = [getIncomeFc(), getExpenseFc()];
// financeEl.innerHTML = "Astept dupa rezultate....";

// Promise.all(promiseArr).then((value) => {
//   const incomeRes = value[0];
//   const expenseRes = value[1];

//   financeEl.innerHTML = `<table><tr><td>Venituri</td><td>${incomeRes.venituri}<td><tr><td>Cheltuieli</td><td>${expenseRes.cheltuieli}<td></table>`;
// });

// const sleep = (ms) =>
//   new Promise((resolve) => setTimeout(() => resolve(ms), ms));

// Promise.all([sleep(500), sleep(1000), sleep(5000)]).then((value) =>
//   console.log(value, "Din promise all")
// );
// Promise.race([sleep(500), sleep(1000), sleep(5000)]).then((value) =>
//   console.log(value, "Din promise race")
// );

// Platforma de exercitii - https://exercism.org/dashboard
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
