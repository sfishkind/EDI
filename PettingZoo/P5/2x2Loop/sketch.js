function setup() {
  createCanvas(720, 720);
  fill ('yellow');
  strokeWeight(8);
}

function draw() {
  background(220);

  translate (60,60);


  for (var y = 0; y < 600; y = y + 300) {  // loop to create rows in the y direction


  for (var x = 0; x < 600; x = x + 300) { // loop to create a row of squares in the x direction

      quad (x, y,
        x + 300, y,
        x + 300, y + 300,
        x, y + 300);
  }

  }





  noLoop();
}
