const myArray = [0,1,2,3,4,5]
const myHero = ["Superman", "Spider Man", "Batman"]

// console.log(myArray[2]);

//Array Methods

// myArray.push(6)
// myArray.push(8)
// myArray.pop()

// myArray.unshift(5)
// myArray.shift()
// console.log(myArray.includes(0));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join()
// console.log(typeof(newArr));

// console.log(myArray);

// Slice, Splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);

console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C", myArray);
