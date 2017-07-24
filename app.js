"use strict"

function draw() {
    var userInput = document.getElementById('circle-rad');
    var radius = userInput.value;
    var draw = SVG('drawing').size(300, 130);
    var circ = draw.circle(radius).fill('#f06');

}




// Calculate area of circle
// Add animations
// Improve design
// Yield some output to the page