function myName() {
    // console.log("My name is Deepak");
    
}

myName();

function addNum(num1, num2) {
    // console.log(num1 + num2);

    return num1 + num2
}

// addNum(3,6786)

const result = addNum(3,6786)

// console.log(result);

function loginUserMsg(username){

    if (!username) {
        //  console.log("Please Enter Username");
    }
    else {
        return `Welcome ${username}`
    }
}
// console.log(loginUserMsg("Deepak Bhatt"))

// console.log(loginUserMsg()); // return undefined

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(100,200,300,600,334)); // Return all the prices in an array

const user = {
    username: "Deepak",
    price: 999
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

handleObject(user);

const myArray = [34,34,324,476,393]
 
function handleArray(arr) {
    return arr[1]
}
console.log("second element is", handleArray(myArray));
