console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Maria";
let lastName = "Hensley";
var myAge = 39;

// Exercise 2
let fullName = firstName + " " + lastName;
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);
// Exercise 3
let myStory;
let myCity = "Huntsville";
let pastime = "decorating, cooking, reading, playing piano";

myStory = `My name is ${fullName}.
I live in ${myCity}.
In my pastime I like to ${pastime}`;
console.log(myStory);
