"use strict";

/* 
 Filename:    gradesinfo.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-01-10 
 Purpose:     Practice using JavaScript programming constructs
*/


/**
 * Returns the fraction of the numbers given as a percent to the digits specified.
 * Assumes that numerator and denominator are numbers and digits is a non-negative integer
 * @param numerator     number on the top of the fraction
 * @param denominator   number on the bottom of the fraction
 * @param digits        decimal places to return in the percentage
 * @returns {string}    percentage of the numerator over the denominator to the digits specified
 */
function asPercent(numerator, denominator, digits) {
    return (numerator / denominator * 100).toFixed(digits) + "%";
}


// Constants
const PASSING_GRADE = 49.5;

// Global variables
let totalGrades = 0;
let numGrades = 0;
let passingGrades = 0;
let currentGrade;
let averageGrade;
let gradeMessage = "";
// ADDITIONAL EXTENDED PRACTICE USING ARRAYS
const gradeArray = [];

currentGrade = window.prompt("Enter a grade from 0 to 100", "");

while (currentGrade !== null) {
    currentGrade = parseFloat(currentGrade);
    if (currentGrade < 0 || currentGrade > 100 || Number.isNaN(currentGrade)) {
        window.alert("That is not a valid grade between 0 and 100!");
    } else {
        totalGrades += currentGrade;
        numGrades++;
        averageGrade = totalGrades / numGrades;
        // ADDITIONAL EXTENDED PRACTICE USING MATH METHODS
        averageGrade = Math.round(averageGrade * 10) / 10;
        gradeMessage = " not ";
        if (currentGrade >= PASSING_GRADE) {
            passingGrades++;
            gradeMessage = " ";
        }
        window.alert("That grade was" + gradeMessage + "a passing grade.\n"
                + "The average grade so far was " + averageGrade + ".\n"
                + "So far, " + passingGrades + " people have passed.");
        // ADDITIONAL EXTENDED PRACTICE USING ARRAYS
        gradeArray.push(currentGrade);
    }
    currentGrade = window.prompt("Enter a grade from 0 to 100", "");
}

document.getElementById("output").innerHTML = "You entered " + numGrades + " grades. "
        + "There were " + passingGrades + " passing grades. "
       // ADDITIONAL PRACTICE USING METHODS
       // + "The percentage of passing grades was " + (passingGrades / numGrades * 100).toFixed(1) + "%. "
       // ADDTIONAL PRACTICE WITH CREATED METHODS
        + "The percentage of passing grades was " + asPercent(passingGrades, numGrades, 1) + ". "
        + "The average grade was " + averageGrade + ".";
// ADDITIONAL EXTENDED PRACTICE USING ARRAYS
gradeArray.sort().reverse(); // Note that sort returns the array, so we can reverse it immediately
document.getElementById("output").innerHTML += "<br />The grades in reverse order are: "
        + gradeArray.join(", ");
