"use strict";
// /==========================================================//Arrays// ===============================================
let fruits = ["mango", "mango", "orange", "peach", "kiwi"];
let scores = [12, 32, 45, 53, 77, 455, 65.345];
//Array Methods
fruits.push("namak");
fruits.push('narange');
fruits.pop(); //remobves the last elememnt
fruits.shift(); //removes the first element
fruits.unshift("Apple"); //Adds element at first
// fruits.forEach((e)=> console.log(e))
let findFruit = fruits.find(fruit => fruit === "kiwi");
let filterFruit = fruits.filter(fruit => fruit.includes("a"));
// console.log(findFruit);
// console.log(filterFruit);
// console.log(fruits);
//==========Mixed Type ================//
let nature = ["hello", 7];
// console.log(nature);
//Array of tuples
const array = [["name", 23], ["ravan", 69]];
array.pop();
array.push(["shyam", 21]);
// console.log(array);
const votes = ["shyam", "Mahes", "prabhas", 45, 78, 89];
const person1 = {
    name: "shyam",
    age: 21,
    employed: true,
};
// console.log(person1);
//=================Functions ====================//
const addNumber = (a, b) => a + b;
const value = addNumber(81, 65);
// console.log(value);
const greets = (name) => {
    return `Hello ${name}!`;
};
function greet(name, message) {
    return `Hello, ${name}! ${message || ""}`;
}
// console.log(greet("Charlie")); 
// console.log(greet("Charlie", "Good morning!")); 
