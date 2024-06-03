/*
# Module 5 - Lesson 9 - Function call context and this

## Example 1 - Jewelry workshop

Write a `calcTotalPrice(stoneName)` method that takes the name of a stone,
calculates and returns the total cost of stones with that name, price, and
quantity from the `stones` property.
*/
const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((element) => element.name === stoneName);
    //2 cazuri -> 1 caz cand gasesti obiectul si returneaza obiectul , iar al 2lea caz cand o sa fie false, valoare Falsy
    if (!stone) {
      // !stone este acelasi lucru cu: stone === false
      return `Nu avem piatra cu numele ${stoneName}`;
    }

    const totalPrice = stone.price * stone.quantity;
    return totalPrice;
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//https://medium.com/@rabailzaheer/exploring-call-apply-and-bind-methods-in-javascript-6023627c7bdc
//https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be
