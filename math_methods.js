"use strict";

/* 
 Filename:    math_methods.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-01-17 
 Purpose:     Practice using JavaScript math methods
*/ 

const myNumber = Math.random() * 10;
let resultString = "";
const positionOfOne = myNumber.toString().indexOf("1");

resultString += "<p>The number is: " + myNumber + "</p>";
resultString += "<p>The cube of the number is: " + myNumber ** 3 + "</p>";
    // or Math.pow(myNumber, 3)
resultString += "<p>The square root of the number is: " + Math.sqrt(myNumber) + "</p>";
resultString += "<p>The integer just less than the number is: " + Math.floor(myNumber) + "</p>";
if (positionOfOne === -1) {
    resultString += "<p>There was no 1 in the digits displayed for that number</p>";
}
else {
    resultString += "<p>The first 1 in the number is at position: " + positionOfOne + "</p>";
}

document.getElementById("output").innerHTML = resultString;
