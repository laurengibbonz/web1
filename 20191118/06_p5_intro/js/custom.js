let x = 0,
  ballRadius = 20;

function setup() {
  createCanvas(500, 500);
  background(100);  
}

// function draw() {
//   background(100);
//   ellipse(x, height/2, ballRadius, ballRadius);
//   x = x + 1;
//   if(x >= width + ballRadius) {
//     x = 0;
//   }
// }

  function draw() {
    background(100);
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }