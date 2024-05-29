/** 
## Example 8 - Sort method

Let the `sortByDescendingPrice` function return a new array of cars
sorted in descending order by the value of the `price` property.
*/

import { cars } from "./carsData.js";

const sortByDescendingPrice = (cars) => {
  const newCars = [...cars];
  // const newCars = cars.map(car => car);
  newCars.sort((a, b) => b.price - a.price);
  return newCars;
};

console.table(sortByDescendingPrice(cars));
