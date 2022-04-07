// javascript
// hydra

var hc;
var pg;

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") });

/////////////////////////

//codigo hydra


voronoi(100).kaleid().color(0,0,1).out()

//////

function setup() {
  createCanvas(1000,1000,WEBGL); //3d
  console.log("hola mundo");
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
   background(0);

  noStroke();
  push();
  texture(hc);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  rotateZ(frameCount*0.001);
  box(500);
  pop();

}
