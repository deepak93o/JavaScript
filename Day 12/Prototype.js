// let myName = "     Deepak bhatt      "

// console.log(myName.trim().length);
// console.log(myName.trueLength);


let arr  = ["Thor","Spiderman"]

let arrPower = {
    thor: "Electric",
    spiderman: "Web",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.deepak = function(){
    // console.log(`Deepak present`);
    
}

// arrPower.deepak();
arr.deepak();   

const teach = {
    makeVd: true
}
const TASupport = {
    makeAssignnment:'JS assignment',
    fullTime:true,
}

Object.setPrototypeOf(TASupport, teach)

let anotherUserName = "CodeWithMe  "
String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`${this}`);
    
}
anotherUserName.trueLength()

