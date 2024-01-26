"use strict";

/* 
 Filename:    convertnumbers.js 
 Student:     Michael Grzesina (grzesinam)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto
 Date:        2023-01-10 
 Purpose:     Practice converting numbers
*/

const numberToConvert = window.prompt("Enter a number to convert");

let outputString = "<strong>Conversions of " + numberToConvert + "</strong><br />";
outputString += "With no base: " + parseInt(numberToConvert) + "<br />";
outputString += "With base 2: " + parseInt(numberToConvert, 2) + "<br />";
outputString += "With base 8: " + parseInt(numberToConvert, 8) + "<br />";
outputString += "With base 16: " + parseInt(numberToConvert, 16) + "<br />";
outputString += "With parseFloat: " + parseFloat(numberToConvert) + "<br />";
outputString += "With Number(): " + Number(numberToConvert) + "<br />";

document.getElementById("output").innerHTML = outputString;
