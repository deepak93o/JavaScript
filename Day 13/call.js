function setUserName(username){
    this.username = username;
    console.log("called");
    
}

function createUserName(username, email, password){
    setUserName.call(this, username)
    // this.username = username
    this.email = email;
    this.password = password;
}
const global = new createUserName("Deep","xyz@mail.com","33@3");

console.log(global);
