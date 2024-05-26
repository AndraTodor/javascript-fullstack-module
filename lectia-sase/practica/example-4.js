/*
## Example 4 - Destructuring

Rewrite the function so that it accepts a parameters object with properties
`companyName` and `stock` and display a report about the number of goods in the warehouse
of any companies.

```js

*/

function getStockReport(arg) {
  const { companyName: diferentCompanyName, stock } = arg;
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${diferentCompanyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"

const unNouObiect = {
  companyName: "Belacci",
  stock: {
    tshirts: 20,
    coats: 13,
    jeans: 5,
    short: 19,
    hat: 329,
    vest: 93,
  },
};

console.log(getStockReport(unNouObiect)); // "YTYAya has X item in stock"
