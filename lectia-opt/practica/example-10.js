import { cars } from "./carsData.js";

/** 
## Example 10 - Reduce method

Let the `getTotalAmount` function return the total number of cars (the value
of the `amount` properties).
*/

const getTotalAmount = (cars) => {
  //   const totalValue = cars.reduce((total, car) => {
  //     return total + car.amount;
  //   }, 0);
  //   return totalValue;

  const newArr = cars.map((car) => car.amount); // -> [amount_1,amount_2,......]

  let total = 0;

  newArr.forEach((value) => (total += value));

  return total;
};

console.log(getTotalAmount(cars));
