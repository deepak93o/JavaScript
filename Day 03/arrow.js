const user = {
    username: "Deepak",
    price: 999,
    welcomeMsg: function() {
        console.log(`Welcome ${this.username}`);
        // console.log(this);
        
    }
    
}
// user.welcomeMsg();
// user.username = "Khushi";
// user.price = 199;
// user.welcomeMsg();
// user.welcomeMsg();

// console.log(this);

// function tea() {
//     let user = "Coffee"
//     console.log(this);
// }
// tea();

// const house = function() {
//     let name = "House"
//     console.log(this.name);
// }


//******************** Arrow function *****************/

const house = () => {
    let name = "House"
    console.log(name);
}
// house();

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Deepak"})

console.log(addTwo(3,4));