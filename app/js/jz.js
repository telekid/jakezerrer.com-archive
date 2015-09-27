document.addEventListener("DOMContentLoaded", function(event) {

  var backgroundCanvas = document.getElementById('background');

  b_context = backgroundCanvas.getContext("2d");
  b_context.fillRect(50, 25, 250, 100);
  console.log('hi')
});
