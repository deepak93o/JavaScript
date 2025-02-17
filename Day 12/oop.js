const user = {
    usrName: "deepak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got Details"); 
        // console.log(`Username: ${this.usrName}`); 
        // console.log(this);
           
    }
}

// console.log(user.getUserDetails());


function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("deepak", 12, true);
const userTwo = new User("Khushi", 10, false);
console.log(userOne);
console.log(userTwo);
