//Object Literals

const mySym = Symbol("Key1");

const user = {
  name: "Deepak",
  age: 20,
  location: "Haldwani",
  email: "deepakbhatt455@gmail.com",
  isLoggedIn: true,
  [mySym]: "Here is the Key",
  courses: ["JS", "React", "Node"],
};

// console.log(user.name, user.age);
// console.log(user["email"]);
// console.log(user["email"]);

// console.log(typeof mySym) // type: Symbol

//Freeze changes in any object

user.email = "xyz@eg.com";

// Object.freeze(user)
// user.name = "Charu"
// console.log(user.name); // Unchanged Name

user.greeting = function () {
  console.log("Hello, John Here");
};
user.greeting2 = function () {
  console.log(`Hello, ${this.name} here `);
};
console.log(user.greeting());
console.log(user.greeting2());

//4:03 last
