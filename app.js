"use strict"

function draw() {
    var userInput = document.getElementById('circle-rad');
    var radius = userInput.value;
    var draw = SVG('drawing').size(250, 250);
    var circ = draw.circle(radius).fill('#f06');
    circleDescription();
    findArea(radius);
}

function circleDescription() {
    var userInput = document.getElementById('circle-rad');
    var radius = userInput.value;
}

function findArea(rad) {
    var outputList = document.getElementById('output-list');
    var output = document.createElement('li');
    var area = (2 * rad) * 3.14159;
    output.innerHTML = 'Circle Area = ' + area + ' pixels!';
    outputList.appendChild(output);
    console.log(area);
}
