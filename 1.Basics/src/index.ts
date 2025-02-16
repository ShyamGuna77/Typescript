// /==========================================================//Arrays// ===============================================

let fruits: string[] = ["mango", "mango", "orange", "peach", "kiwi"];
let scores: number[] = [12, 32, 45, 53, 77, 455, 65.345];

//Array Methods

fruits.push("namak");
fruits.push("narange");
fruits.pop(); //remobves the last elememnt
fruits.shift(); //removes the first element
fruits.unshift("Apple"); //Adds element at first
// fruits.forEach((e)=> console.log(e))
let findFruit = fruits.find((fruit) => fruit === "kiwi");
let filterFruit = fruits.filter((fruit) => fruit.includes("a"));

// console.log(findFruit);
// console.log(filterFruit);
// console.log(fruits);

//==========Mixed Type ================//

let nature: [string, number] = ["hello", 7];
// console.log(nature);

//Array of tuples

const array: [string, number][] = [
  ["name", 23],
  ["ravan", 69],
];
array.pop();
array.push(["shyam", 21]);
// console.log(array);

const votes: readonly (string | number)[] = [
  "shyam",
  "Mahes",
  "prabhas",
  45,
  78,
  89,
];
// console.log(votes);

//======================Objects ==================================//

// const user:{name:string,age:number,employed:boolean} = {
//     name:"shyam",
//     age:21,
//     employed:false
// }

// console.log(user);

type person = {
  name: string;
  age: number;
  employed: boolean;
};

type person2 = {
  work: string;
  food: string;
};

const person1: person = {
  name: "shyam",
  age: 21,
  employed: true,
};

// console.log(person1);

//=================Functions ====================//

const addNumber = (a: number, b: number) => a + b;

const value = addNumber(81, 65);
// console.log(value);

const greets = (name: string): string => {
  return `Hello ${name}!`;
};

function greetm(name: string, message?: string): string {
  return `Hello, ${name}! ${message || ""}`;
}

// console.log(greet("Charlie"));
// console.log(greet("Charlie", "Good morning!"));

// function greet(name: string, message: string = "Welcome!"): string {
//   return `Hello, ${name}! ${message}`;
// }

// console.log(greet("David"));
// console.log(greet("David", "Good to see you!"));


const reduce = function(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

// Example usage:
// const numbersArray = [1, 2, 32, 41, 51];
// const reducedValue = reduce(numbersArray);
// console.log(reducedValue); 



//Challanges/
// zz/

  function FindMax(arr:number[]):number {
    return Math.max(...arr);
  }

//   let maxi = [12, 23, 43, 34, 54];

//   let ans = FindMax(maxi);
//   console.log(ans);


//  string reverse

function stringReverse(arr: string[]): string[] {
    return arr.map(str => {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    });
}

const ans = ["Typescript", "JavaScript", "Python"];

// console.log(stringReverse(ans));

// =================================Interfaces=======================================//

interface Author {
  name:string,
  age:number
}

const human:Author = {name:"luigi" , age:21}

interface Post {
  body:string,
  title:string,
  createdAt:Date,
  likes:number,
  author:Author
}

let newPost:Post = {
  body:"Hello this is a post",
  title:"This is Heading",
  createdAt: new Date(2003, 3, 21),
  likes:23,
  author: human
}

function niami (post:Post){
  console.log(`Hello ${post.author.name} you posted a post about ${post.title} got ${post.likes} likes which is created at ${post.createdAt}${post.body}`);

}

// const wwe = niami(newPost)
// console.log(wwe);


//----------------------
//Type Alias ===
//---------------
type Employee = {
  name: string;
  department: string;
};

type Manager = {
  subordinates: string[];
};

type TeamLead = Employee & Manager;  

const lead: TeamLead = {
  name: "Alice",
  department: "Engineering",
  subordinates: ["Bob", "Charlie"],
};


// function logTeamLead(teamLead: TeamLead) {
//   console.log(`Team Lead: ${teamLead.name}`);
//   console.log(`Department: ${teamLead.department}`);
//   console.log(`Subordinates: ${teamLead.subordinates.join(", ")}`);
// }

// logTeamLead(lead);


//=========
//Union types 
//===========


let values : string | number| boolean
 values = "name"
 values = 23
 values = true



function getRandomValue(): string | number {
    return Math.random() > 0.45 ? "Hello" : 42;
}

// console.log(getRandomValue()); ---42


function formatValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase(); 
    } else {
        return value.toFixed(0); 
    }
}

// console.log(formatValue("hello"));
// console.log(formatValue(3.1415));  


let cat :string|number|unknown|any


cat = true
// console.log(cat);


//Interface Extends
//=========


interface Car {
  name:string,
  model:string,
  licence:number
}

interface Bike {
  name: string;
  model: string;
  Road:boolean
}

interface Bus extends Car,Bike {
  seats:number,
  driver:string
}

function getBus(params:Bus){

  return `This Bus has ${params.name} and ${params.licence}`

}

const oola = getBus({
  name: "rtc",
  model: "modelX",
  licence: 2334,
  Road: true,
  seats: 40,
  driver: "John Doe"
});
// console.log(oola);

//===================
//Classes =====
///===============

type Base = "classic"| "thin"|"thin"|"ROund"

class Pizza {
  constructor(title:string,price:number){
  this.title =title,
  this.price = price
  }

  addPizzas(toppings:string):void {
    this.toppings.push(toppings)
  }

  removePizzas(toppings:string):void{
    this.toppings = this.toppings.filter((t)=> t!==toppings);
  }
  selectBase (b:Base):void{
    this.base = b
  }

  title:string
  price:number
  base:Base = "classic"
  toppings:string[] = []
}

const pizza = new Pizza("Chicken Pizza",15)
pizza.addPizzas("pineapple")
pizza.addPizzas("Chicken Tikka");
pizza.removePizzas("pineapple")
pizza.selectBase('thin')

// console.log(pizza);


//--------------------
//Generics ---
//--------------

function identity<T>(value: T): T {
  return value;
}

let result = identity<number>(42);  
let text = identity<string>("Hello"); 


function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// console.log(reverseArray<number>([1, 2, 3]));
// console.log(reverseArray<string>(["a", "b", "c"]));



interface Apple <T> {
  price : T;
}

let fruit1:Apple<number> = {price:35}
let fruit2: Apple<string> = { price: "Halwm" };

// console.log(fruit1);
// console.log(fruit2);

interface Processor <Y> {
  process(data:Y):Y
}
class SuperProcessor implements Processor <string>{
  process(data:string):string{
    return data.toUpperCase()
  }
}

let process = new SuperProcessor()


interface Multiple <T,S> {
 first :T
 second :S
}

let FullNumber:Multiple<number,string> = {first:1,second :"one"}
// console.log(FullNumber);


interface player {
  name: string;
  club: string;
}

class striker implements player {
  name: string;
  club: string;
  jersey: number;

  constructor(name: string, club: string, jersey: number) {
    this.name = name;
    this.club = club;
    this.jersey = jersey;
  }
}

let forward = new striker('Ronaldo', 'Real Madrid', 7);


function getLengthNumber <T extends {length:number}>(item:T):number{
  return item.length;
}

// console.log(getLengthNumber("Hello"));
// console.log(getLengthNumber([1,2,4]));
// console.log(getLengthNumber({length:110}))
// console.log(getLengthNumber(123));


interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

// T must have both 'name' and 'age'
function printPerson<T extends HasName & HasAge>(person: T) {
  console.log(`${person.name} is ${person.age} years old.`);
}

// printPerson({ name: "John", age: 30 }); // ✅ Works
// printPerson({ name: "Alice" }); // ❌ ERROR: 'age' is missing
