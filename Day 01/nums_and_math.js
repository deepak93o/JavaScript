const score = 500;

console.log(score);

const balance = new Number(100);

console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const num = 42.422423;

console.log(num.toPrecision(2)); //42

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

//********************* Maths *********************//

console.log(Math);

console.log(Math.abs(-5));

console.log(Math.round(5.5));

console.log(Math.ceil(5.7));

console.log(Math.floor(5.8));

console.log(Math.sqrt(225)); // Square Root

console.log(Math.max(4, 6, 234, 6));

console.log(Math.min(4, 6, 234, 6));

console.log(Math.random() * 6 + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

