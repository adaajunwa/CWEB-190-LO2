"use strict";

/* 
 Filename:    dice_roller.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-01-17 
 Purpose:     Practice creating and using JavaScript functions
*/


/**
 * Returns a random integer between 1 and the supplied parameter.
 * Assumes that max is an integer greater than 1.
 * @param max           the highest value in the range of random numbers
 * @returns {number}    a random integer between 1 and max (inclusive)
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}


/**
 * Returns a random passing grade from 50 to 100 inclusive
 * @returns {number}    A random integer that is a passing grade from 50 to 100
 */
function getRandomPassingGrade() {
    return 50 + Math.floor(Math.random() * 51);
}


// global code
const SIDES = 6;
const NUM_DICE = 3;
const diceArray = [];
let total = 0;

// const die1 = getRandomInt(6);
// const die2 = getRandomInt(6);
// const die3 = getRandomInt(6);
//
// document.getElementById("output").innerHTML = die1 + ", " + die2 + ", and " + die3
//         + " have a total of " + (die1 + die2 + die3);

for (let i = 0; i < NUM_DICE; i++) {
    const die = getRandomInt(SIDES);
    diceArray.push(die);
    total += die;
}

document.getElementById("output").innerHTML = diceArray.join(", ") + " for a total of " + total;
document.getElementById("output").innerHTML += "<br />A random passing grade is: "
        + getRandomPassingGrade();