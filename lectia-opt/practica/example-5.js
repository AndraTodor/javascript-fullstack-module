import { cars } from "./carsData.js";

/*
## Example 5 - Filter method

Let the `getCarsWithType` function return an array of cars whose type
coincide with the value of the `type` parameter.
*/

const getCarsWithType = (cars, type) => {
  const newCars = cars.filter((car) => car.type === type);
  return newCars;
};

console.table(getCarsWithType(cars, "suv"));
console.table(getCarsWithType(cars, "sedan"));
