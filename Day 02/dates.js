let myDate = new Date()

// console.log(myDate.toLocaleString());

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// let myCreatedDate = new Date("2025-01-30");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate);
