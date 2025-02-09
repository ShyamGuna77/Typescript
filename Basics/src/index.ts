
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

const votes: readonly (string | number)[] = ["shyam", "Mahes", "prabhas", 45, 78, 89];
// console.log(votes);



//======================Objects ==================================//

// const user:{name:string,age:number,employed:boolean} = {
//     name:"shyam",
//     age:21,
//     employed:false
// }

// console.log(user);

type person = {
    name: string,
    age: number,
    employed: boolean
}

type person2 = {
    work: string,
    food: string
}

const person1:person = {
  name:"shyam",
  age:21,
  employed:true,

}

// console.log(person1);


//=================Functions ====================//


 const addNumber = (a:number ,b:number) => a+b

const value = addNumber(81,65)
// console.log(value);

const greets = (name:string):string => 
    {
         return `Hello ${name}!`
    }


 function greet(name: string, message?: string): string {
  return `Hello, ${name}! ${message || ""}`;
}

// console.log(greet("Charlie")); 
// console.log(greet("Charlie", "Good morning!")); 

   