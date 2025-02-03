// if

// if(2 == "2") {
//     console.log("If executed");
// }

const balance = 1000;

// if (balance > 500) console.log("More than 500");

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 700) {
//     console.log("Less than 750");
// }
// else {
//     console.log("More than 750");
    
// }

const userLoggedIn = true 
const debitCard = true

const loggedByNumber = false
const loggedByEmail = true
if (userLoggedIn && debitCard) {
    console.log("Allow to Purchase");
}

if (loggedByEmail || loggedByNumber) {
    console.log("USer logged In");
}