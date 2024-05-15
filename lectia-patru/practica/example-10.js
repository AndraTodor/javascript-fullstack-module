// Nu functioneaza pt ca nu a fost variabila testFunction declarata inca

testFunction();
function testFunction() {
  console.log("Functie declarata");
}

testFunction();

// objects-propr calcultate

const proprName = "name";
const user = {
  age: 28,
};
user[proprName] = "Henry";
console.log(user.name);

// metode de obiect

const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Este o metodă de obiect
  getBooks() {
    console.log("Această metodă va returna toate cărțile:", this.books);
  },
  // Este o metodă de obiect
  addBook(bookName) {
    this.books.push(bookName);
    console.log(`Cartea "${bookName}" a fost adaugata.`);
  },
};

// Apeluri de metodă
bookShelf.getBooks();
bookShelf.addBook("O carte nouă");
bookShelf.getBooks();

// metode de iterare a unui obiect - for...of

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

const keys = Object.keys(book);

for (const key of keys) {
  // Cheia
  console.log(key);
  // Valoarea proprietății cu o astfel de cheie
  console.log(book[key]);
}

// Array de obiecte

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "O scrisoare pierdută",
    author: "I.L.Caragiale",
    rating: 8.51,
  },
  {
    title: "Romeo și Julieta",
    author: "William Shakespeare",
    rating: 7,
  },
];
for (const book of books) {
  // Obiectul carte
  console.log(book);
  // Titlul
  console.log(book.title);
  // Autorul
  console.log(book.author);
  // Rating-ul
  console.log(book.rating);
}

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Calculăm prețul total al droidelor
  const droidsPrice = orderedQuantity * pricePerDroid;
  // Calculăm prețul total al comenzii
  const totalPrice = droidsPrice + deliveryFee;
  // Construim mesajul cu informațiile necesare
  const message = `You ordered droids worth ${droidsPrice} credits. Delivery (${deliveryFee} credits) is included in total price ${totalPrice} credits.`;
  // Returnăm mesajul
  return message;
}
makeOrderMessage(2, 200, 50);
