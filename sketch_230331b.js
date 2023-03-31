  
function setup() {
  createCanvas(500, 700);
  background(255,153,153);
}

function draw() {
  //days
  //monday
  fill(255, 108, 10);
  rect(0, 0, 100, 700);
  //tuesday
  fill(71, 168, 189);
  rect(100, 0, 100, 700);
  
  //wednesday
  fill(140, 186, 128);
  rect(200, 0, 100, 700);
  //thursday
  fill(246, 212, 186);
  rect(300, 0, 100, 700);
  //friday
  fill(179, 140, 180);
  rect(400, 0, 100, 700);
  
  //object
  //ring
  fill(219,194,94);
  ellipse(50, 200, 30, 30);
  //car keys
   fill(0,102,102);
  triangle(110, 500, 110 , 600, 170, 600);
//phone 1
  fill(255,255,255);
  rect(110, 350, 80, 150);
  //earring
  fill(255,204,229);
  ellipse(250, 300, 72, 100);
  //phone 2
  fill(255,255,255);
  rect(210, 50, 80, 150);
  //charger
  fill(255,255,255)
  line(325, 340, 350, 100);
  
}
