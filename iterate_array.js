"use strict";

/* 
 Filename:    iterate_array.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-01-12 
 Purpose:     Practice iterating through an array
*/ 

// myArray declared as an empty array, then adding each element to the array
// const myArray = new Array(4);
// myArray[0] = 1967;
// myArray[1] = "Toronto Maple Leafs";
// myArray[2] = null;
// myArray[3] = false;

// myArray declared as a new array with initial values
//const myArray = new Array(1967, "Toronto Maple Leafs", null, false);

// myArray declared using array literal notation
const myArray = [1967, "Toronto Maple Leafs", null, false];

// ADDED: increasing size of array
myArray[4] = "CST"; // adds element to end of array
myArray[7] = true; // adds empty elements at 5 and 6
// ADDED: decrease size of array
myArray.length = 3;

let myString = "";
for (let i = 0; i < myArray.length; i++) {
    myString += "<p>Item number " + i + ": " + myArray[i] + "</p>";
}

document.getElementById("output").innerHTML = myString;

myString = "<p></p>";
for (const item of myArray) {
    myString += "<p>" + item + "</p>";
}
document.getElementById("output").innerHTML += myString;
