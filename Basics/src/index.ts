
// /==========================================================//Arrays// ===============================================

let fruits:string[] = ["mango","mango","orange","peach","kiwi"];
let scores:number[] = [12,32,45,53,77,455,65.345]

//Array Methods

fruits.push("namak");
fruits.push('narange')
fruits.pop() //remobves the last elememnt
fruits.shift() //removes the first element
fruits.unshift("Apple") //Adds element at first
// fruits.forEach((e)=> console.log(e))
let findFruit = fruits.find(fruit => fruit==="kiwi")
let filterFruit = fruits.filter(fruit => fruit.includes("a"))


// console.log(findFruit);
// console.log(filterFruit);
// console.log(fruits);

//==========Mixed Type ================//

let nature:[string,number] = ["hello",7]
// console.log(nature);

//Array of tuples

const array:[string,number][] = [["name",23],["ravan",69]]
array.pop()
array.push(["shyam",21])
// console.log(array);

const votes:readonly [] = ["shyam","Mahes","prabhas",45,78,89]
console.log(votes);

