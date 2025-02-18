class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPass(){
        return `${this.password}12abc`
    }
    userCaps(){
        return `${this.username.toUpperCase()}`
    }
}

const vr = new User("Deep", "js@mail.com", "455@3");

console.log(vr.encryptPass());
console.log(vr.userCaps());

