/*
# Task 1

const technologies = ["Javascript", "Python", "CSS", "HTML"];

1. Get container element
2. Create a cycle for sorting array elements
3. Create a li tag
4. Write the text from the array inside the list items
5. Place li inside ul
6. Place ul tag with items on the page
*/

const technologies = ["Javascript", "Python", "CSS", "HTML"];

const containerEl = document.querySelector("#container");
// console.dir(containerEl);
const listEl = document.createElement("ul"); // <ul> </ul>
// console.dir(listEl);
containerEl.append(listEl);

// const firstElementLi = document.createElement("li"); // <li> </li>
// firstElementLi.textContent = technologies[0];
// listEl.append(firstElementLi);

// for (let i = 0; i < technologies.length; i++) {
//   const li = document.createElement("li");
//   li.innerText = technologies[i];
//   listEl.append(li);
// }

technologies.forEach((technology) => {
  const li = document.createElement("li");
  li.innerText = technology;
  listEl.append(li); // sau putem folosi prepend, dar o sa adauge valoarile in ordine inversa
});

/*
# Task 2

Starting from this colors array, create buttons dynamically;

1. Iterate trough the array;
2. Create a button and set color for the button; (style.backgroundColor, classList.add(""))
3. Set the text of the button
4. Add the button to the UI
*/

const colors = [
  {
    label: "Facebook",
    color: "#ff0000",
    href: 'href="https://www.facebook.com/"',
    isPrimary: true,
  },
  {
    label: "Instagram",
    color: "#00ff00",
    href: 'href="https://www.instagram.com/"',
    isPrimary: true,
  },
  {
    label: "Yellow",
    color: "#fff00f",
    isPrimary: false,
  },
  {
    label: "Click Me3",
    color: "#00ff00",
    href: 'href="https://www.facebook.com/"',
    isPrimary: true,
  },
  {
    label: "Click Me4",
    color: "#00ff00",
    href: 'href="https://www.facebook.com/"',
    isPrimary: true,
  },
];

colors.forEach((color) => {
  const buttonEl = document.createElement("button"); // <button> </button>
  containerEl.append(buttonEl);
  // buttonEl.textContent = color.label;
  // buttonEl.classList.add("primary-button");

  if (color.isPrimary) {
    buttonEl.innerHTML = `<span><a ${color.href} target="_blank" >${color.label}</a></span>`;
    buttonEl.classList.add("primary-button");
  } else {
    buttonEl.textContent = color.label;
    buttonEl.style.backgroundColor = color.color;
  }
});

/**
 * Test Example
 */
const testQuerySelector = document.querySelector("#container");

const testElementByTag = document.getElementsByTagName("img"); // <img>

const testQuerySelectorAll = document.querySelectorAll("#container");
const divContainer = testQuerySelectorAll[1];

const testElementById = document.getElementById("container");

const testElementByClass = document.getElementsByClassName("container");
//console.dir(testQuerySelector);
//console.dir(testElementById);
// console.dir(testElementByClass);
//console.dir(testElementByTag);
