const lang = ["JS", "C", "Kotlin", "Java", "Rust", "Python"]

// lang.forEach( function(element){
//     console.log(element);
    
// })

// function printMe(element) {
//     console.log(element);   
// }
// lang.forEach(printMe)

// lang.forEach((element) => {
//     console.log(element); 
// });

const myCode =[
    {
        langName: "JavaScript",
        langFileName: "JS with Me"
    },
    {
        langName: "Java",
        langFileName: "Java with Me"
    },
    {
        langName: "Python",
        langFileName: "Python with Me"
    }
]

myCode.forEach((item) =>{
    // console.log(item.langName);    
})


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 5
// } );


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Computer', publish: 2000, edition: 2004
    },
    {
        title: 'Book Two', genre: 'OS', publish: 1975, edition: 1980
    },
    {
        title: 'Book Three', genre: 'Graphics', publish: 1990, edition: 1994
    },
    {
        title: 'Book six', genre: 'Graphics', publish: 1950, edition: 1954
    },
    {
        title: 'Book Four', genre: 'English', publish: 2004, edition: 2008
    },
    {
        title: 'Book Five', genre: 'Language', publish: 1970, edition: 1975
    },
];

// const userBooks = books.filter( (book) => book.genre === 'Graphics')

const userBooks = books.filter( (book) => {return book.publish >= 1970 && book.genre === 'Graphics'} )
console.log(userBooks);
