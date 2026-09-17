// Declare a variable
let age = 22;

// Print like Python

console.log(age);

age = 35;

console.log(age);

let number = 1;

// A constant variable
const name = "Levi Miller";

// Scope = where you can reference a variable by name

if (number > 0) {
  // a new scope
  console.log(name);
  let favoriteColor = "blue";
}

console.log(favoriteColor);

// Get
document.querySelector("h1").style.color = "blue";
