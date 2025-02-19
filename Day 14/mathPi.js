// const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// Math.PI = 5;
// console.log(Math.PI);
// console.log(desc);

const obj = {
    name: 'Deepak',
    rank: 89,
    isAvailable: true
}

console.log(obj.name);

Object.defineProperty(obj, "name", {
    // writable: false,
    enumerable: false,
    configurable: false
})

obj.name = 'Khushi'
console.log(obj.name);

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);    
}