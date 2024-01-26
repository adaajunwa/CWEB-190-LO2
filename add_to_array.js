"use strict";

/* 
 Filename:    add_to_array.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-01-12 
 Purpose:     Practice adding elements to an array and using array methods
*/ 

const arrayOfStrings = [];
const NUM_ELEMENTS = 5;

for (let i = 0; i < NUM_ELEMENTS; i++) {
    let newString = window.prompt("Give me a number " + (i + 1)
            + " to add to an array", "");
    arrayOfStrings.push(newString);
    window.alert("The array contents are:\n" + arrayOfStrings.join("\n"));
}
