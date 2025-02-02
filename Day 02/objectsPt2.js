const instaUser = new Object()

instaUser.id = "455A"
instaUser.name = "John"
instaUser.active = true
// console.log(instaUser);

const usr = {
    email:"xyz@eg.com",
    fullname: {
        userFullName: {
            firstname: "deepak",
            lastname: "bhatt"
        }
    }
}
// console.log(usr.fullname.userFullName);

const obj1 = {1: "a", 2:"b", 3:"c"}

const obj2 = {4: "a", 5:"b", 6:"c"}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2 )

const obj3 = {...obj1, ...obj2} // Majorly used
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "xyz@eg.com"

    }
]

// users[0].email

// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("active")); 


const course = {
    courseName : "JavaScript",
    price: 500,
    instructor: "Deepak",

}

const {instructor: i} = course // Rename instructor to i

console.log(i);


// {
//     "name" : "Khushi",
//     "courseName" : "JavaScript",
//     "price": 500
// }

[
    {
        "name" : "Khushi",
        "courseName" : "JavaScript",
        "price": 500
    },
    {
        "name" : "Khushi",
        "courseName" : "JavaScript",
        "price": 500
    }
]

