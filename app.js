function draw() {
  var canvas = document.getElementById('canvas');
  var userInput = document.getElementById('circle-rad')
  var radius = userInput.value;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75, 75, radius, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}

draw();

// Calculate area of circle
// Add animations
// Improve design
// Yield some output to the page
