/** 
## Example 6 - The find method
*/

import { cars } from "./carsData.js";

const getCarByModel = (cars, model) => {
  const newCar = cars.find((car) => car.model === model);
  return newCar;
};

console.log(getCarByModel(cars, "F-150"));
console.log(getCarByModel(cars, "CX-9"));
