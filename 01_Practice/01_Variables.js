// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// var have a global scope even var is defined in any scope or function.

// let and const have block scope

// The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

var x = 5;
console.log("Global scope: ",x);

//lets redefine x value and function and try what result will get

var x = 10;

console.log("Now x value is override: ",x);

{
    var x = 15;
}

console.log("It access from out side: ",x);

//let - once declared then now allowed to redeclared in same scope but reassign is allowed
//example 
let y = 10;
console.log("Declared with let: ",y);

// let y = 15; //it is show the error

//but once declared with let it allowed to reassign.

y = 20;

console.log("Reassigning the value of y:  ",y);

//Always declare a variable with const when you know that the value should not be changed.