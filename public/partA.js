// Variables
let name = "Alice";
const age = 21;

// Functions
function greet(user) {
  return `Hello, ${user}!`;
} // returns greeting message

const add = (a, b) => a + b;

// Arrays
let fruits = ["apple", "banana", "mango"];
fruits.push("orange"); // adds orange to array
console.log(fruits); // optional: view output

// Objects
let student = {
  name: "Bob",
  age: 22,
  isEnrolled: true,
};
console.log(student.name); // Bob

// DOM Manipulation: Update the title on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mainTitle").textContent = "Part A - Updated via JS";

  // Event Handler setup
  const incrementBtn = document.querySelector("button");
  const numberInput = document.getElementById("number");
  const message = document.getElementById("message");

  incrementBtn.addEventListener("click", () => {
    let value = parseInt(numberInput.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    numberInput.value = value;
    message.textContent = `Value is now: ${value}`;
  });
});

document.getElementById("showFruitBtn").addEventListener("click", () => {
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  document.getElementById("fruitDisplay").textContent = `Random fruit: ${randomFruit}`;
});
