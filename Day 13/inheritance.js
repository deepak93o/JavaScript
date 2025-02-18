class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class admin extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.username}`);        
    }
}

const obj = new admin("admin", "admin@gmail.com", "45551")

obj.addCourse();

const obj1 = new User("Deep")
obj1.logMe()