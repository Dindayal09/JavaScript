//Creating car object 
//Object is created using {}
//Object has key: value pairs
//Object access throgth there key

//Example of Object Literal
const car = {
    carName: "Fait",
    carModel: "N500",
    carFuelType: "Petrol",
    carSeat: "5-Seater",
    carColor: "White",
    carWeight: 650 
};

//We can access object property in 2 way 

//Here we access car property that is carFuelType
const carP1 = car.carFuelType;
console.log(carP1);

//Accessing the car property that is carWeight
const weight = car["carWeight"];
console.log(weight);


// How to Define a JavaScript Object

//  Using an Object Literal
//  Using the new Keyword
//  Using an Object Constructor

//Spaces and line breaks are not important. An object initializer can span multiple lines: 

//Creating empty object then add properties
const person = {};

//Adding properties to person object

person.firstName = "John";
person.lastName = "Doe";
person.country = "USA";
person.age = 44;
person.eyeColor = "Blue";
person.height = 5.72;
person.weight = 69;

//Access all property same as earlier

const personName = `Name is ${person.firstName} ${person["lastName"]}`;
console.log(personName);

// This example create a new JavaScript object using new Object(), and then adds some properties

const people = new Object();

people.firstName = person.firstName;
people.lastName = person.lastName;

//Accessing the people object properties with . and "" notation 
const peo = `Name of 2nd People is ${people.firstName} ${people.lastName}`;
//Printingon console
console.log(peo);

//printing on console.
console.table([person, people]);

//iterate through for...in loop
let text = "";
for (const key in person) {
    text += key +" "+ person[key]+'\t';
}
//Printing the results after iterator 
console.log(text);

//Creating the nested object
const personSecond = {
    firstName: "Allan",
    lastName: "Smith",
    age:43,
    email: "allan.smith@gmail.com",
    car:{
        carName:"BMW",
        carModel: "C720",
        carYear:2025,
        carDetails:{
            color:"white",
            weight:890,
            seater:5,
            type:"petrol"
        }
    },
    fullName: function(){
        return this.firstName +" "+this.lastName;
    }
}

//Accessing nested property of car
let person2nd = personSecond["car"]["carName"];
console.log(person2nd);

//Accessing nested property of car
person2nd = personSecond.car.carDetails.color;
console.log(person2nd);

//Accessing nested property of car
person2nd = personSecond['car']['carDetails']['weight'];
console.log(person2nd);

//Accessing property person
person2nd = personSecond.fullName();
console.log(person2nd);

person2nd = personSecond.fullName;
console.log(person2nd);

//this convert a text to Upper case 
let nameInUpper = personSecond.fullName().toLocaleUpperCase();
console.log(nameInUpper);

//This will convert a text to Lower case 
const nameInLower = nameInUpper.toLowerCase();
console.log(nameInLower);

// Create an Array from object
const myArray = Object.values(personSecond);
console.log(myArray,"\n");



let txt = "";
for (const [key, value] of Object.entries(personSecond)) {
    txt += key + ": " + value + "\t"; //text using here without declaration because it is already declared above with 'let' keyword    
}
console.log(txt);

// JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

const myString = JSON.stringify(personSecond);
console.log(myString);

const first = Object.entries(person);
console.log(first);

const second = Object.fromEntries(first);
console.log(second);


// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.
// Object Type Person

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }