// Stack Memory(Primitive), Heap Memory(Non Primitive)

let name = "WelcomToMyCode"

let name2 = name;

name2 = "Thanks for watching"
// console.log(name);

// console.log(name2);

let userOne = {
    email: "user@eg.com",
    Id: 45516,
    role: "Web Developer"
}

let userTwo = userOne;
userTwo.email = "test@eg.com";

console.log(userOne.email);