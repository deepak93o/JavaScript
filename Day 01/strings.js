const name = "Deepak";
const number = 983748272;

// console.log(name + number + " this is my number")

// console.log(`Hello my name is ${name} and my number is ${number}`);

const channelName = new String("The coding point");
// console.log(channelName);
// console.log(typeof channelName);  //object

// console.log(channelName[6])
// console.log(channelName.__proto__)

// console.log(channelName.length)

// console.log(channelName.toUpperCase())

// console.log(channelName.charAt(4))

// console.log(channelName.indexOf('o'))

const newString = channelName.substring(0, 5);
// console.log(newString);

const newString2 = channelName.slice(-10, 5);
// console.log(newString2);

const sentence = "      Hey there, This is my new       code       ";
// console.log(sentence);
// console.log(sentence.trim()); //Remove extra spaces from start and end.

const url = "https://www.codex.com/login%50user-l5302hsn42";

console.log(url.replace("%50", "-"));

console.log(url.includes("code"));
 
console.log(sentence.split(" "));
