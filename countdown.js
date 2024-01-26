"use strict";

/* 
 Filename:    countdown.js
 Student:     Michael Grzesina (grzesinam)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto
 Date:        2023-01-10
 Purpose:     Practice using JavaScript repetition and decision structures
*/

const outputPara = document.getElementById("output");

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        outputPara.innerHTML += "Five<br />";
    }
    else {
        outputPara.innerHTML += i + "<br />";
    }
}

outputPara.innerHTML += "<strong>Blastoff!</strong>";
