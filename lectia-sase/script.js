// rest operator
// cream copii la noi array-uri
// un exemplu pentru crearea de noi obiecte , obiecte nested

// const arr = [1, 2, 3, 4, 5];
// const fakeCopy = arr;
// fakeCopy.push(6);
// const copy = [...arr];

// console.log("Arr", arr);
// console.log("Copy", copy);
// console.log("Fakecopy", fakeCopy);

// const obiect = {
//   name: "Silviu",
//   age: 24,
//   address: {
//     city: "Bucuresti",
//     zipcode: 32323,
//   },
// };

// const copie = { ...obiect, address: { ...obiect.address } };

// const fakeCopyObject = obiect;
// fakeCopyObject.name = "Matei";
// copie.address.city = "Valcea";

// console.log("obiect", obiect);
// console.log("copie", copie);
// console.log("fakeCopyObject", fakeCopyObject);

const { names: listOfNames, phones: listOfPhones } = arg;
console.log(names);
