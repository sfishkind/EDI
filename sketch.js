let gif;

function preload() {
  gif = loadImage ('gifs/flowerguy2.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
background(255,255,255);
translate(12,12);

var num = 8; // variable for the number of squares in the array
var sideLen = windowWidth / num; // variable for the side length of each square


  for (var y = 0; y < windowHeight; y = y + sideLen) {  // loop to create rows in the y direction


  for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction
  image(gif,x,y);
  }

  }

}
