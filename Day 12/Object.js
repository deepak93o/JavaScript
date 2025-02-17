// function mulBy5(num) {
//     return num*5;
// }
// mulBy5.power = 2
// console.log(mulBy5(5));
// console.log(mulBy5.power);
// console.log(mulBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++
    console.log(this.score);
}
createUser.prototype.print = function(){
    console.log(`score is ${this.score}`);
    
}
const one = new createUser("deepak", 66)
const two = new createUser("khushi", 90)

// console.log(score);
one.print()
one.increment()
