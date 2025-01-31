// Primitive Datatypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('455')

const id2 = Symbol('455')

// console.log(id === id2)
 
const bigNumber = 2238429723742n;

// console.log(typeof bigNumber);

// Reference type (Non primitive)

// Array, Objects, Functions

const fruits = ["Apple", "Mango", "Banana"]

let myObj = {
    name: "Deepak",
    age: 20,
}

const myFunction = function() {
    console.log("Hiiiiiiiiiiii");
    
}

console.log(myObj);
console.log(fruits);
