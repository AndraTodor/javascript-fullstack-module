/*
## Example 11 - Method chains

Let the `getAvailableCarNames` function return an array of car models, but
only those that are currently for sale.
*/
import { cars } from "./carsData.js";

const getModelsOnSale = (cars) => {
  // extragem masinile care sunt for sale
  // returnam modelul

  const forSaleCars = cars.filter((car) => car.onSale);

  console.log("For Sale Cars", forSaleCars);

  const results = forSaleCars.map((car) => car.model);

  return results;

  //   return cars.filter((car) => car.onSale).map((car) => car.model);
};

console.table(getModelsOnSale(cars));
