// for of 

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Good Morning"

for (const greet of greetings) {
    // console.log(`${greet}`);
}

//Maps

const map = new Map();
map.set("Name1", "Deepak");
map.set("Name2", "Khushi");
map.set("Name3", "Bhatt");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value );   
}

// for in
const myObj = {
    game1: "polygon",
    game2: "Counter Strike"
}

for (const key in myObj) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }

    // console.log(`${key}: ${myObj[key]}`);
    
}

const language = ["JS", "Java", "C", "Cpp","python" ]

for (const key in language) {
    console.log(`${key}: ${language[key]}`);
    
}
 