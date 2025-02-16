// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task is complete');   
//         resolve();     
//     },1000)
// })

// promiseOne.then(function() {
//     console.log("Promise consumed");    
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
        
//     },1000)
// }).then(function() {
//     console.log("Async 2 resolved");
    
// });

// const promiseThree = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve({username: "Deepak", email: "deepakbhattx@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
    
// })


// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true
//         if(!error){
//             resolve({username: "deepak", password: "45516111"})
//         }
//         else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 2000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
    
// }).then((username) => {
//     console.log(username);
    
// }).catch(function(error) {
//     console.log(error);
    
// }).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "javascript", password: "45516D"})
        }
        else {
            reject('ERROR: Promise Five went wrong');
        }
    }, 2000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }    
}
consumePromiseFive()

async function getAllUSers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// getAllUSers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then(() =>{})
.catch((error) => console.log(error)) 