
let angle = 0;
let r = 30;

let slider;

function setup() {
  createCanvas(480,240);
  noStroke();

  slider = createSlider(0,100,30);
  slider.position(10,20);
  
  textAlign(LEFT,TOP);
  background('skyblue');
text("hello",100,100);


}

function draw() {

  r = slider.value();
  push();
  translate(width/2, height/2);
  x = sin(radians(angle)) * r;
  y = cos(radians(angle)) * r;
  ellipse(x, y, 10, 10);
  pop();
  angle += 2;
  r += 0.1;
}