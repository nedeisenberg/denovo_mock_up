var animalFree;
var biodegradable;
var environment;
var hazardous;

var frames = 0;

var fps=20;

var af_key=30;

var bd_key=90;

var ev_key=150;

var hz_key=210;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  animalFree = loadImage("assets/icons/animal-free.png");
  biodegradable = loadImage("assets/icons/biodegradable.png");
  environment = loadImage("assets/icons/environment.png");
  hazardous = loadImage("assets/icons/hazardous.png");


  frameRate(fps);
}

function draw() {
background(255,255,255);
imageMode(CENTER);
//image(animalFree,width/2,height/2);

if(frames<af_key){
  image(animalFree,width/2,height/2);
}else if(frames<af_key+30){
  image(animalFree,width/2-((width/2)/50)*(frames-af_key),height/2+((height/2)/50)*(frames-af_key));
}else if(frames<bd_key){
  image(biodegradable,width/2,height/2);
}else if(frames<bd_key+30){
  image(biodegradable,width/2-((width/2)/50)*(frames-bd_key),height/2-((height/2)/50)*(frames-bd_key));
}else if(frames<ev_key){
  image(environment,width/2,height/2);
}else if(frames<ev_key+30){
  image(environment,width/2+((width/2)/50)*(frames-ev_key),height/2+((height/2)/50)*(frames-ev_key));
}else if(frames<hz_key){
  image(hazardous,width/2,height/2);
}else if(frames<hz_key+30){
  image(hazardous,width/2+((width/2)/50)*(frames-hz_key),height/2-((height/2)/50)*(frames-hz_key));
}
frames++;

}
