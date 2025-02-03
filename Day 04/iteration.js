//For

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("Five here")
    }
    // console.log(element);    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
               
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

let arr = ["Thor", "Ironman", "Hulk", "Captain America", "Black Widow", "Hawkeye"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    
}

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 10) {
//         console.log(`Detect 10`);
//         break
//     }    
//     console.log(`${i}`);
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 10) {
//         // console.log(`Detect 10`);
//         continue
//     }    
//     console.log(`${i}`);
    
// }

//While

// let i = 1;
// while (i <= 10) {
//     console.log(`${i}`);
//     i = i+1;   
// }

//Do while
let score = 100;
do {
    console.log(`Score is ${score}`);
    score = score +151;
    
} while (score <= 1000);
