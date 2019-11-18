let x = 0;

function setup() {
  createCanvas(200, 200);
  background(100);  
}

console.log(window.innerHeight);

function draw() {
  background(100);
  ellipse(x, height/2, 20, 20);
  x = x + 1;
  if(x >= width + 20) {
    x = 0;
  }
}

  // function draw() {
  //   if (mouseIsPressed) {
  //     fill(0);
  //   } else {
  //     fill(255);
  //   }
  //   ellipse(mouseX, mouseY, 80, 80);
  // }