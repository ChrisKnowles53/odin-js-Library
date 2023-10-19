const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function displayBooks() {
  const library = document.getElementById("library");
  library.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const titleElement = document.createElement("h2");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement("h3");
    authorElement.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pagesElement);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "remove";
    removeButton.setAttribute("id", index);
    bookCard.appendChild(removeButton);

    library.appendChild(bookCard);
    addRemoveButtonListeners();
  });
}

function addRemoveButtonListeners() {
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button, index) => {
    button.dataset.index = index;
    button.addEventListener("click", handleRemoveClick);
  });
}

function handleRemoveClick(event) {
  const index = event.target.dataset.index;
  removeBook(index);
}

addBookToLibrary("First Book", "CJK", 2);
addBookToLibrary("Second Book", "David E", 30);
addBookToLibrary("Changing Career", "Laura C", 50);
addBookToLibrary("Move across the world", "Simi S", 60);

console.table(myLibrary);

displayBooks();

const dialog = document.querySelector("dialog");
const addNewBook = document.querySelector(".add-new-book");
const closeButton = document.querySelector("dialog button");
const addBookForm = document.getElementById("addBookForm");

addNewBook.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  addBookToLibrary(title, author, pages);

  dialog.close();

  addBookForm.reset();

  displayBooks();
});

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Odin says: Add a button on each book’s display to change its read status.
// Odin says: To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
//  Book prototype = function Book(title, .....
//
// 1) ✅ create a button that is default to 'not read'
// 1.5) add an event listener for the click of the button and then trigger step 2
// 2) create a function that toggles the status to read or not Read if already at read
// 3) 💭 look at how to integrate this so it applies to each book not just one button
// 4) refactor code to align with step 3 plan
//
const readButton = document.createElement("button");
const body = document.querySelector("body");
readButton.classList.add("read");
readButton.textContent = "not read";
readButton.setAttribute("onclick", "toggleReadStatus(this)");
// removeButton.setAttribute("id", index); // come back to this at step3
body.appendChild(readButton);

// function toggleReadStatus(button) {
//   let txt = button.innerText;
//   button.innerText = txt == "not read" ? "read" : "not read"; // from stackoverflow
// }
// as an if statement
function toggleReadStatus(button) {
  let currentText = button.innerText;
  if (currentText === "not read") {
    button.innerText = "read";
  } else {
    button.innerText = "not read";
  }
}

// ✨✨✨✨ Notes ✨✨✨✨

// function Book(title, author, pages, isRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.isRead = isRead;
//   this.info = function () {
//     const readStatus = this.isRead ? "read" : "not read yet";
//     return `${title} by ${author}, ${pages} pages,  ${readStatus}`;
//   };
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());

// // Without Prototype Inheritance
// function Dog(name) {
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} barks.`);
//   };
// }

// const dog1 = new Dog("Fido");
// const dog2 = new Dog("Buddy");

// dog1.bark(); // Output: "Fido barks."
// dog2.bark(); // Output: "Buddy barks."

// // Each dog instance has its own copy of the bark method, leading to redundancy in memory usage. If you update the bark method, you would need to do so for each instance separately.

// // With Prototype Inheritance
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(`${this.name} barks.`);
// };

// const dog1 = new Dog("Fido");
// const dog2 = new Dog("Buddy");

// dog1.bark(); // Output: "Fido barks."
// dog2.bark(); // Output: "Buddy barks."

// // The bark method is defined in the Dog prototype, and both dog1 and dog2 instances share this method. This reduces memory usage and allows for more efficient updates to the method.

// //Another example:

// // Initialize constructor functions
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);

//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }

// // Link prototypes and add prototype methods
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// };

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// };

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };

// // Initialize individual character instances
// const hero1 = new Warrior("Bjorn", 1, "axe");
// const hero2 = new Healer("Kanin", 1, "cure");
// // With this code we’ve created our Hero constructor with the base properties, created two character constructors called Warrior and Healer from the original constructor, added methods to the prototypes and created individual character instances.
