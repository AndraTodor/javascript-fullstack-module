import { cars } from "./carsData.js";
/** 
## Example 7 - Sort method

Let the `sortByAscendingAmount` function return a new array of cars
sorted in ascending order by the value of the `amount` property.
*/

const sortByAscendingAmount = (cars) => {
  const newCars = [...cars];
  newCars.sort((a, b) => a.amount - b.amount);
  return newCars;
};

console.table(sortByAscendingAmount(cars));
