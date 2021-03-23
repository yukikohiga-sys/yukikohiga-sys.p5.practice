// let angle = 0;
// let r = 20;
// let w = 480;
// let h = 240;

// function setup() {
//   createCanvas(w,h);
//   background('skyblue');
//   sel = createSelect();
//   sel.position(10, 10);
//   sel.option('rect');
//   sel.option('circle');
//   sel.option('line');
//   sel.changed(selectForm);
//   noStroke();
  
// }

// function draw() {

//   if (r >= 200) {  // 繰り返し条件
//         noLoop();
//       }
    

//   push();
//   translate(width/2, height/2);
//   x = sin(radians(angle)) * r;
//   y = cos(radians(angle)) * r;
//   ellipse(x, y, 10, 10);
  
//   pop();
//   angle += 2;
//   r += 0.1;
//   }

//   function selectForm() {
//     let form = sel.value();
//     background('pink');
//     if(form === "rect"){
//       rect(50, 50, 100, 100);
//     }else if(form === "circle"){
//       ellipse(100,100,50);
//     }else if(form === "line"){
//       stroke(255);
//       line(40, 20, 180, 180);
//     }
//   }





// function selectForm() {
//   let form = sel.value();
//   background('skyblue');
//   if(form === "rect"){
//     rect(50, 50, 100, 100);
//   }else if(form === "circle"){
//     ellipse(100,100,50);

    
//   }else if(form === "line"){
//     stroke(255);
//     line(40, 20, 180, 180);
//   }
// }
// let angle = 0;
// let r = 30;

// function draw() {
//   push();
//   translate(width/2, height/2);
//   x = sin(radians(angle)) * r;
//   y = cos(radians(angle)) * r;
//   ellipse(x, y, 10, 10);
//   pop();
//   angle += 2;
// }

// let angle = 0;
// let r = 20;
// let
//  sketch1 = function() {
//   setup = function() {
//     createCanvas(480,240);
//     noStroke();
//     background('skyblue');
//   };

//   draw = function() {
//     if (r >= 90) {  // 繰り返し条件
//       noLoop();
//     }
  
  
//     push();
//     translate(width/2, height/2);
//     x = sin(radians(angle)) * r;
//     y = cos(radians(angle)) * r;
//     ellipse(x, y, 10, 10);
//     pop();
//     angle += 2;
//     r += 0.1;
//   };
// };

// let sketch2 = function(p) {
//   p.setup = function() {
//     p.createCanvas(200, 200);
//     p.background(200,200);
//   };

//   p.draw = function() {
//     p.fill(0);
//     p.stroke(0);
//     p.ellipse(50, 50, 50, 50);
//   };
// };

// new p5(sketch1, "container1");
// new p5(sketch2, "container2");


'use strict';

document.getElementById('target1').addEventListener('click', () => {
    document.getElementById('target1').classList.toggle('circle1');
  });
document.getElementById('target2').addEventListener('click', () => {
    document.getElementById('target2').classList.toggle('circle2');
  });
document.getElementById('target3').addEventListener('click', () => {
    document.getElementById('target3').classList.toggle('circle3');
  });


  function audioPlay(){
    document.getElementById("audio").play();
}
 
//再生を停止
function audioPause(){
    document.getElementById("audio").pause();
}








let angle = 0;
let r = 20;


function setup() {
  createCanvas(480,240);
  noStroke();
  background('skyblue');
  // frameRate(30);

  
text("bachの夢を見る",20,20);
text("ミサ曲ロ単調を歌う",340,20);
text("マタイ受難曲を歌う",20,220);
text("カテドラル教会でbwv228番歌う",300,220);

}

function draw() {

  if (r >= 90) {  // 繰り返し条件
    noLoop();
  }


  push();
  translate(width/2, height/2);
  x = sin(radians(angle)) * r;
  y = cos(radians(angle)) * r;
  ellipse(x, y, 10, 10);
  pop();
  angle += 2;
  r += 0.1;
  
}


