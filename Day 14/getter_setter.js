class User {
    constructor(username, email){
        this.username = username;
        this.email = email
    }

    get username(){
        return `${this._username} Bhatt`;
    }
    set username(value){
        this._username = value
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
}

const Deepak = new User("Deepak","dpk@gmail.com");
console.log(Deepak.email);
console.log(Deepak.username);