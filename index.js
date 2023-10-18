// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

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

addBookToLibrary("firstBook", "CJK", 2);
addBookToLibrary("secondBook", "David E", 30);
console.table(myLibrary);

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
