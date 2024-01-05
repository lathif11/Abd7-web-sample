   // VARIABLE

/*alert("Hello my name is abdul latheef")
var name = Latheef
var msg = "Hello my name is "+ name +", I'm learning JS";
alert(msg);
console.log(msg);*/

/*let number1 = 3;
let number2 = 50;
let result = number1 + number2;
console.log(result);*/

   // CONSTANTS

/*const name = "Abdul Latheef";
const dob = "27-11-2004";
let msg = "Hello my name is "+ name +", & i born on " + dob + " I'm learning JS";
console.log(msg);*/

   // DATA TYPES

/*let firstName = "Abdul";
let age = "18";
let isYoung = "true";
let lastName = undefined;
let trophy = null;
let aadhar = 'udsha';*/
// typeof some variable

   // OBJECT

/*let person = {
    name: "Abdul Latheef",
    age: 28,
    isAlive: "true",
    gender: "Male",
    address:"Adirampattinam, Tamil Nadu, India",
}
// dot notation
console.log(person.address);

// bracket notation
console.log(person['gender']);*/

/*let favColors = ["red", "white", "black"]
favColors[4] = "green";
console.log(favColors.length);*/

   // FUNCTION

/*function greetUser(firstName, lastName){
    let msg = "Hello " + firstName + " " + lastName + " I'm learning JS";
    console.log(msg);
}
function add(number1, number2){
    console.log(number1 + number2)
}
add(40, 60)
//greetUser("Abdul", "latheef")
//greetUser("Abdur", "Rahman")*/
 
   // ASSIGNMENT OPERATOR

/*let x = 5;
//x++
//x = x + 2
x += 5
console.log(x);*/

   // ARTHMATIC OPERATOR

/*let number1 = 5;
let number2 = 2;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 % number2);
console.log(number1 / number2);
console.log(number1 ** number2);

// // Increament (++)
// console.log(number1++);
// console.log(number1);
// // Decreament (--)
// console.log(number2--);
// console.log(number2);*/

   // COMPSRISON OPERATOR

/*let x = 1;
console.log(x > 5);
console.log(x <= 5);
console.log('abdul' > 'latheef'); 
console.log(true == 0);*/

   // TERNARY OPERATOR

/*let age = 18;

// if(condition){
//     let type = 'adult ticket';
// }
// else {
//     let type = 'child ticket';
// }
// let type = age > 34 ? "adult ticket" : "child ticket"
console.log(type);*/

   // LOGICAL OPERATOR

// LOGICAL AND (&&)
// console.log(true && false);

// LOGICAL OR(||)
// console.log(true || false);

// LOGICAL NOT (!)
// console.log(true);

// let heighincome = true;
// let cibilscore = true;
// let eligbleperson = heighincome || cibilscore
// console.log("status:" + eligbleperson);

   // BITWISE OPERATORS
/*console.log(1 | 2); // | Bitwise OR
console.log(1 & 2); // & Bitewise AND
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermisssion = myPermission | writePermission;
let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message);*/

   // OPERATOR PRECEDENCE
/*let x = (2 + 5) * 10;
console.log(x);
let y = 2 + 5 * 10;
console.log(y);*/

   // CONDITIONAL STATEMENTS
// If you can write a single line not use curly bracket {}
/*let condition = true;
if(condition)
  console.log("condition: True");
else 
  console.log("condition: False");*/

  // Suppose If you write a multiple line must use the curly bracket {}
// let weather = "cold";
// if(weather === "hot"){
//   console.log("weather is hot!");
// }
// else {
//     console.log("weather is cold");
// }
// let israining = false;
// let iscloudy = true;
// if(israining || iscloudy) {
//   console.log("Don't forget to take umbrella!");
// }
// else {
//   console.log("Sky is normal! Enjoy the weather!");
// }

// If hour is between 12AM(0) to 1PM(13) -> Good Morning
// Else if hour is between 1PM(13) to 5PM(17) -> Good Afternoon
// Else hour is between 5PM(17) to 12AM(0) -> Good Evening
// let hrs = new Date();
// let hour = hrs.getHours();
// let hour = new Date().getHours();
// if(hour >= 0 && hour <= 13){
//   console.log("Good Morning");
// }
// else if(hour >= 13 && hour <= 17){
//   console.log("Good Afternoon");
// }
// else {
//   console.log("Good Evening");
// }

   // If you want current date write a js code example
// let hour = new Date();
// console.log(hour);
// console.log(hour.getHours());

   // SWITCH CASE
// let grade = "A";
// switch(grade){
//   case "S":
//     console.log("Super Grade");
//     break;
//   case "A":
//     console.log("Excellent Grade");
//     break;
//   case "B":
//     console.log("Just Pass!");
//     break;
//   case "U":
//     console.log("Failed Grade");
//     break;
//   default:
//     console.log("Unknown Grade");
//     break;
//   }

// let marks = 94;
// switch(true) {
//   case marks > 90:
//     console.log("Super Grade");
//     break;
//   case marks > 50:
//     console.log("pass");
//     break;
//   case marks < 35:
//     console.log("Failed");
//     break;
//   default:
//     console.log(" Unknown Grade");
// }
   // FOR LOOP
// for(initialExpression; condition; step){
//    console.log("number #1");
// }
// for(let i = 1; i <= 10; i++) {
//   if(i % 2 == 0){
//   console.log("even Number #" + i);
//   }
// }
// for(let i = 10; i >= 1; i--) {
//   if(i % 2 !== 0){
//   console.log("even Number #" + i);
//   }
// }
   // WHILE LOOF
// let i = 0;
// while (i <= 10) {
//    if (i % 2 !== 0){
//       console.log("Odd Number While #" + i);
//    }
//    i++;
//    console.log(i);
// }
// do {
//    if (i % 2 !== 0) {
//       console.log("Odd Number Do-While #" + i);
//    }
//    i++;
// } while(i <= 10);

   // DO WHILE LOOP
// let i = 0;   
// do {
//    if (i % 2 !== 0) {
//       console.log("Odd Number #" + i);
//    }
//    i++;
// } while(i <= 10);

   // FOR-IN LOOP
// const person = {
//    name: 'Latheef',
//    age: 18,
//    sex: 'Male'
// };
// for(let key in person) {
//    console.log(key+ ":", person[key] );
// }
// let colors = ['red', 'green', 'blue'];
// for(let key in colors) {
//    console.log(colors[key]);
// }

   // FOR-OF LOOP
// for(let color of colors) {
//    console.log("Colors:" + color);
// }
// for(;;) {
//    console.log("This is infinity loop");
// }

   //JS OBJECT AND OOP
// let name= "Latheef";
// let age = 18;
// let interest = ['Web Design'];
// let address = {
//    city: "Adirampattinam",
//    state: "Tamil Nadu",
// }
//  function greeting() {
//    // let msg = "My name is " + name +", i love " + interest; 

              //OR//

//    let msg = `My name is ${name}, i Love ${interest}`;
//    console.log(msg);
// }
// greeting();
// let person = {
//    name: "Latheef",
//    age: 18,
//    interest: ['Web Design'],
//    isAlive: true,
//    address: {
//       city: "Adirampattinam",
//       state: "Tamil Nadu",
//    },
//    greeting: function() {
//       let msg = `My name is ${this.name}, i Love ${this.interest}`;
//       console.log(msg);
//    }
// };
// person.greeting();

   //FACTORY FUCTIONS
// function createPerson(name) {
//    return {
//       name,
//       greeting() {
//          let msg = `My name is ${this.name}`;
//          console.log(msg);
//       }
//    };
// }
// let latheef = createPerson("Latheef");
// let abdul = createPerson("Abdul");
// latheef.greeting();
// abdul.greeting();

   //CONSTRUCTOR FUNCTIONS 
   //PASCAL CASE -> ALL FIRST WORD STARTING FROM CAPS LETTER EX: MyFirstName                      
   //CAMEL CASE -> ONLY FIRST WORD STARTING FROM SAMLL LETTER AND NEXT LETTER STARTING FROM CAPS LETTER EX: myFirstName
// function createPerson(name) {
//    return {
//       name, 
//       greeting() {
//          console.log(`My name is ${name}`);
//       }
//    };
// }
// function Person(name) {
//    this.name = name;
//    this.greeting = function(){
//       console.log(`My name is ${name}`);
//    }
// }
// let person = new Person("Latheef")
// person.greeting();
   
   //DYNAMIC OBJECT
// const person = {
//    name: "Latheef"
// }
// person.age = 18;
// person.greeting = function() {}
// delete person.greeting;
// console.log(person);

   //CONSTRUCTOR PROPERTY
// Factory Function 
// function createPerson(name) {
//    return {
//       name,
//       greeting() {
//          console.log(`My name is ${this.name}`);
//       }
//    };
// }
// const person = createPerson("Latheef");
   //Constructor Function
// function Person(name) {
//       this.name = name;
//       this.greeting = function(){
//          console.log(`My name is ${name}`);
//       }
//    }
//    const person2 = new Person("Abdul")
//    console.log(person2.constructor);
// let name = "Latheef"; 
// let age = 18;
// let isAlive = true;
// console.log(name, age, isAlive);
// let name = String("Latheef");
// let age = Number(18);
// let isAlive = Boolean(true);
// console.log(name, age, isAlive);

   //FUNCTIONS ARE OBJECTS
// function Person(name, age) {
//    this.name = name;
//    this.greeting = function(){
//       console.log(`My name is ${name}`);
//    }
// }
// const person = new Person("Latheef");

   //PRIMITIVE VALUE
// let x = 10;
// let y = x;
// x = 20

   //REFERENCE VALUE
// let x = { 
//    value: 10
// };
// let y = x;
// x.value = 20

   //PREMETIVE DATA TYPE
// let cart = 5;
// function updateCart(cart) {
//    cart++;
// }
// updateCart(cart);
// console.log("Cart available: " + cart);

   //REFERENCE DATA TYPE
// let cartObj = {
//    value: 5
// };
// function updateCart(cart) {
//    cart.value++;
// }
// updateCart(cartObj);
// console.log("Carts availale: " , cartObj);

   // Enumerating Properties of an Object
// const user = {
//    name: 'Latheef',
//    getFullName(){
//       console.log(`My name is ${this.name}`);
//    }
// }
// for (let key in user)
// console.log(key, user [key]);

// for (let key of Object.keys(user))
// console.log(key);

// for (let entry of Object.entries(user))
// console.log(entry);

// if('name' in user) {
//    console.log("Yes!");
// }
// else
//    console.log("No!");

   //CLONING AN JAVASCRIPT OBJECT
// const user = {
//    name: 'Latheef',
//    getFullName(){
//       console.log(`My name is ${this.name}`);
//    }
// }
// let another = Object.assign({
//    age: 18
// }, user);
// console.log(another);
        // OR
// const user = {
//    name: 'Latheef',
//    getFullName(){
//       console.log(`My name is ${this.name}`);
//    }
// }
// let another = {};
// for (let key in user){
//    another['name'] = user['name'];
//    another[key] = user[key];
// }
// console.log(another);

   // SPREAD OPERATOR
// const user = {
//    name: 'Latheef',
//    getFullName(){
//       console.log(`My name is ${this.name}`);
//    }
// }
// let another = {
//    ...user
// }
// console.log(another);

   // JS INBUILT OBJECTS
// let marks = [45,76,34,97,15]
// let results = Math.max(...marks); //... It's mean spread operator 
// console.log("Maximum marks: " + results);

// let result = Math.min(45,76,34,97,15);
// console.log("Minimum marks: " + result);

   //JS STRING OBJECT
// let firstName = "Abdul";
// let lastName = "Latheef";
// console.log(firstName);

// const firstName1 = new String("Abdul");
// console.log(firstName1);

// let firstName = "Abdul";
// let lastName = "Latheef";
// console.log(firstName.length);
// console.log(firstName.concat(' ', lastName));
// console.log(firstName.charAt(2));
// console.log(firstName.includes("u"));  // INCLUDES MEANS TO CHECK THE SPECIFIC TEXT EXECUTE THE TRUE OR FALSE
// console.log(firstName.startsWith("Ab"));
// console.log(firstName.endsWith("l"));
// console.log(firstName.indexOf("d"));  // INDEXOF MEANS TO FIND THE LETTER
// console.log(firstName.lastIndexOf("l"));
// RegExp1 = /[A-Z]/g;
// RegExp2 = /[a-z]/g;
// const found1 = lastName.match(RegExp1); // THIS LINE MEANS FIND THE SMALL AND CAPITAL LETTER
// const found2 = lastName.match(RegExp2) 
// console.log(found1);
// console.log(found2);
// console.log(firstName.repeat(5));

// let firstName1 = "Mohamed";
// console.log(firstName1.replace("Mohamed" ,"Abdul"));
// console.log(firstName.slice(2)); // IF YOU WANT SOME LETTER USE THE SLICE METHOD

// let para = "I'm Learning JavaScript";
// console.log(para.split(' ', 1));
// console.log(para.split(' ', 3));
// console.log(para.substring(3));
// console.log(para.toLowerCase());
// console.log(para.toUpperCase());

// let number = "1 + 10 + 9";
// console.log(eval(number)); // EVAL MEANS ADD THE NUMBER
//          // OR
// console.log(eval(number.valueOf()));

   // JAVASCRIPT TEMPLATE LITERALS
// const message = "JavaScript is a programing language \n\"It is top level language\"";
// const message2 = `Hello Abdul,
// Do you know JavaScript is a "programing language and top level language"
// Yes i know.

// Place: Adirampattinam,                                                                 your faithfully,
// Date: 01-10-2023                                                                       Abdul lathef`;
// const letter = 
// `From:
// Abdul Latheef,
// 2nd BSC CS,
// Khadir mohideen college,
// Adirampattinam 614701.

// To:
// Head of the department(HOD),
// Khadir mohideen collage,
// Adirampattinam 614701.

// My Dear Class incharge,
// I'm suffering from fever iam unable to attend the class 
// so i request to grand me leave for two days (01,02-10-2023) 
// only

// Place : Adirampattinam 614701,                                                          your obediantly,
// Date : 01-10-2023.                                                                      Abdul Latheef.`
// console.log(message);
// console.log(message2);
// console.log(letter);

   // DATE OBJECT
// const date = Date().toString();
// const now = new Date();
// const anotherDate = new Date('November 27 2004');
// console.log(date);
// console.log(now.getFullYear()); // IN JAVAACRIPT BY DEFAULT, DAYS STARTS FROM SUNDAY(0) AND ENDS WITH SATURDAY(6)
// console.log(anotherDate.getFullYear());
// let [month, date, year] = new Date().
// toLocaleDateString("en-IN").split("/");
// console.log(month, date, year);

   //ADDING ELEMENT TO JS ARRAY
// const fruits = ["Apple","Orange","Mango"]
// fruits[3] = "Banana"
// console.log(fruits);

// const fruits = ["Apple","Orange","Mango"]
// fruits.push ("Banana") //PUSH MEANS ADD THE LAST ELEMENT
// console.log(fruits);

// const fruits = ["Apple","Orange","Mango"]
// fruits.unshift ("Banana") //UNSHIFT MEANS ADD THE FIRST ELEMENT
// console.log(fruits);

// const fruits = ["Apple","Orange","Mango"]
// fruits.splice(2, 0, "watermelons", "Banana") //SPLICE MEANS ADD THE ANY SIDE
// console.log(fruits);

   //FINDING ELEMENT IN JS ARRAY
// const fruits = ["Apple","Orange","Mango"]
// console.log(fruits.indexOf("Mango"));
// const fruits1 = ["Apple","Orange","Mango","Apple"]
// console.log(fruits1.lastIndexOf("Apple")); //IF YOU WANT LAST ELEMENT USE THE LASTINDEXOF 

// const fruits = ["Apple","Orange","Mango"]
// console.log(fruits.indexOf("Mango") !== -1)
           //OR
// const fruits = ["Apple","Orange","Mango"]
// console.log(fruits.includes("Mango"));

// const orders = [
//    {id: 1, item: "Smartwhatch", quantity: 1},
//    {id: 2, item: "Rice", quantity: 1},
// ]
// let result = orders.find(function(order){
//    return order.item === "Rice"
// })
// console.log(result);

// const orders = [
//    {id: 1, item: "Smartwhatch", quantity: 1},
//    {id: 2, item: "Rice", quantity: 1},
//    {id: 3, item: "Dumbells", quantity: 1},
// ]
// let result = orders.findIndex(function(order){
//    return order.item === "Dumbells"
// })
// console.log(result);

   //ARROW FUNCTION IS VERY VERY IMPORTANT IN JS
// const orders = [
//    {id: 1, item: "Smartwhatch", quantity: 1},
//    {id: 2, item: "Rice", quantity: 1},
//    {id: 3, item: "Dumbells", quantity: 1},
// ]
// let result = orders.find((order) => order.item === "Dumbells")
// console.log(result);

   //REMOVING ELEMENT IN THE ARRAY
// const number = [1,2,3,4];
//End
//.push => pop

// number.pop() // IT  MEANS REMOVE THE LAST ELEMENT

//Start
//unshift => shift

// number.shift() //IT MEANS REMOVE THE FIRST ELEMENT 

//Middle
//Splice

// number.splice(2,3) //IT MEANS REMOVE THE MIDDLE ELEMENT 
// console.log(number);

   //EMPTYING AN JS ARRAY
// let numbers = [1,2,3,4];
// //Solution 1
// numbers = []; // YOU USE THE SOLUTION ONE BECAUSE OTHER SOLUTHION IS LITTLE BIG
// console.log(number);

// let numbers = [1,2,3,4]
// //Solution 2
// numbers.length = 0
// console.log(numbers.length);

// let numbers = [1,2,3,4] 
// //Solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

// let numbers = [1,2,3,4];
// //Solution 4
// while (numbers.length)
// numbers.pop();
// console.log(numbers);
