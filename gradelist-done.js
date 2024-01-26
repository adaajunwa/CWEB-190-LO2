"use strict";

/*
 Filename:    gradelist-done.js
 Student:     Michael Grzesina (grzesinam)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        Winter 2023
 Purpose:     Practice JavaScript constructs by creating a sorted list of grades that the user enters
*/

const NUMBER_OF_MARKS = 50; // number of marks available on evaluation

let arMarks = [];   // array to keep track of marks
let markCount = 0;  // index of current mark being processed in array


/*
    Function:   anonymous
    Purpose:    take mark from input box and add to list of marks
    Parameters: none
    Returns:    nothing
    Assumptions:    Elements with the IDs shown are in the HTML page
 */
document.getElementById("btnProcessMark").onclick = function() {
    let mark = document.getElementById("mark").value;
    mark = parseFloat(mark);

    if (isNaN(mark) || mark < 0 || mark > NUMBER_OF_MARKS) {
        window.alert("Enter a valid mark from 0 to " + NUMBER_OF_MARKS + "!");
    } else {
        processMark(mark);
        document.getElementById("percentage").innerHTML = formatMark(mark);
    }
};


/*
    Function:   formatMark
    Purpose:    display given mark as a percentage of NUMBER_OF_MARKS
    Parameters: mark - the raw mark to be formatted
    Returns:    a string with the mark out of NUMBER_OF_MARKS and a percentage
    Assumptions:    mark is a valid number
 */
function formatMark(mark) {
    let percent = (mark / NUMBER_OF_MARKS) * 100;
    percent = percent.toFixed(1);
    return mark + " / " + NUMBER_OF_MARKS + " = " + percent + "%";
}


/*
    Function:   processMark
    Purpose:    display marks in an ordered list from highest to lowest
    Parameters: mark - mark to be added to the list
    Returns:    nothing (changes arMarks to include the number given)
    Assumptions:    mark is a valid number
 */
function processMark(mark) {
    // let markString = "";

    document.getElementById("btnProcessMark").disabled = true;
    arMarks.push(mark);
    arMarks.sort(function(a, b) {
        return b - a;
    });

    markCount = 0;
    document.getElementById("gradesList").innerHTML = "";
    setTimeout(displayGradesOneByOne, 1000);

    // for (let i = 0; i < arMarks.length; i++) {
    //     markString += "<li>" + arMarks[i] + "</li>";
    // }

    // document.getElementById("gradesList").innerHTML = markString;
}


/*
    Function:   displayGradesOneByOne
    Purpose:    display the current mark in the array as a list item
    Parameters: none
    Returns:    nothing
    Assumptions:    global variables markCount and arMarks exist;
                    elements with appropriate IDs exist in HTML document
 */
function displayGradesOneByOne() {
    document.getElementById("gradesList").innerHTML +=
            "<li>" + formatMark(arMarks[markCount]) + "</li>";
    markCount++;

    if  (markCount < arMarks.length) {
        setTimeout(displayGradesOneByOne, 1000);
    } else {
        document.getElementById("btnProcessMark").disabled = false;
        document.getElementById("mark").value = "";
        document.getElementById("mark").focus();
    }
}
