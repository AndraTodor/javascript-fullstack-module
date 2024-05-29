/*
## Example 1 - Map method

Let the `getModels` function return an array of models (model field) of all
cars.
*/

import { cars } from "./carsData.js";

const getModels = (carsList) => {
  if (carsList.length === 0) {
    return console.error("Nu exista masini in acest obiect");
  }

  const newArr = carsList.map((item) => item.model);
  return newArr;
};

console.table(getModels(cars));
