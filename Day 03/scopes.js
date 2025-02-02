// let num1 = 10
// const num2 = 20
// var num3 = 34
let num1 = 500
if(true){
    let num1 = 10
    const num2 = 20
    // var num3 = 34
    // console.log("Block Scope: " + num1);
    
}

// console.log(num1);
// console.log(num2);
// console.log(num3);

function one(){
    const username = "Khushi"

    function two(){
        const id = "455A";
        console.log(username);
    }
    // console.log(id); // Can't Access out of scope
    two();

}
// one();

if (true) {
    const name = "Deepak"
    if (name === "Deepak") {
        const web = " JavaScript"
        // console.log(name + web);
    }
    // console.log(web);
}

// console.log(name); // Out of Scope

console.log(addOne(4));
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(4)); // Error: Variable can't be access before initialization 

const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(4));