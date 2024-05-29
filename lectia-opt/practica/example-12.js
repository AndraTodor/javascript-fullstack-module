import { cars } from "./carsData.js";

/*
## Example 12 - Method chains

Let the `getSortedCarsOnSale` function return an array of cars for sale
(onSale property), sorted by price ascending.

*/

const getSortedCarsOnSale = (cars) => {
  // extragem masinile onSale
  // sortam pretul crescator

  return [...cars]
    .filter((car) => car.onSale)
    .map((car) => {
      return { name: `${car.make} - ${car.model}`, price: car.price };
    })
    .sort((a, b) => a.price - b.price);
};

console.table(getSortedCarsOnSale(cars));

// https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_array_sort1
