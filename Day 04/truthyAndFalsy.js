const userEmail = "xyz@gmail.com"

if (userEmail) {
    console.log("Got email from user");
}
else {
    console.log("Didn't get");
}

// Falsy values: False, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values: "0", "false", true, " ", [], {}, function(){}


const obj = {}

if (Object.keys(obj).length == 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val;
// val = 10 ?? 5

val = null ?? 10

console.log(val)

////// Ternary Operator 
// condition ? true : false

const teaPrice = 100
teaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
