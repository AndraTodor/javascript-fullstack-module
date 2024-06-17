//Bubbling example

// const sectionEl = document.querySelector(".section-exercise");
// const divEl = document.querySelector(".section-exercise div");
// const paragraphEl = document.querySelector(".section-exercise p");

// document.addEventListener("click", () => {
//   console.log("Ai dat click pe document");
// });

// sectionEl.addEventListener("click", (e) => {
//   console.log("Ai dat click pe sectiune");
// });

// divEl.addEventListener("click", (e) => {
//   console.log("Ai dat clik pe div");
// });

// paragraphEl.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Ai dat clik pe paragraph");
// });

// Event delegation example
// const ulElement = document.querySelector(".countries-list");
// const liElements = document.querySelectorAll("li");

// ulElement.addEventListener("click", (e) => {
//   console.log(e.currentTarget);
//   console.log(e.target);
//   console.log(e);
// });

// liElements.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target.textContent);
//   });
// }); -> acest caz nu este folosit niciodata

// Create a product cost calculator depending on the price. When working with events, use delegation. Render all markup via JS
// When the data variable is entered in input #1 or #2, the total cost should be automatically recalculated
// The currency - USD should always be displayed
// In input No. 2, set min and max threshold by yourself.
// When loading the page, the script should automatically calculate the cost based on the default data that you set in the markup.

const formEl = document.querySelector("#form");
const priceEl = document.querySelector("#price");
const quantityEl = document.querySelector("#quantity");
const amountDisplayEl = document.querySelector("#amount");
const totalEl = document.querySelector("#total");

const data = {
  quantity: 0,
  price: 0,
  calcTotalPrice() {
    return this.quantity * this.price;
  },
};

data.quantity = quantityEl.getAttribute("value");
data.price = priceEl.getAttribute("value");
totalEl.textContent = data.calcTotalPrice() + " USD";

formEl.addEventListener("change", (e) => {
  //se poate folosi pentru acest usecase se poate folosi si input
  if (e.target === priceEl) {
    if (!Number(priceEl.value)) {
      alert("Trebuie sa introduci un numar");
      totalEl.textContent = "N/A";
      return;
    }
    console.log(`Pretul curent are valoarea ${priceEl.value}`);
    data.price = priceEl.value;
  }
  if (e.target === quantityEl) {
    console.log(`Cantitatea curenta are valoarea ${quantityEl.value}`);
    data.quantity = quantityEl.value;
  }

  amountDisplayEl.textContent = quantityEl.value;
  totalEl.textContent = data.calcTotalPrice() + " USD";
});
