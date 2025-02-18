class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);        
    }
    createId(){
        return `${this.username}23C`
    }
}

const client = new User("Deepak")
console.log(client.createId());

class User2 extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const poco = new User2("Poco", "Mi@phn.com")
console.log(poco.createId());