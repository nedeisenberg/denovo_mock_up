var animalFree;
var biodegradable;
var environment;
var hazardous;

var frames = 0;

var fps=24;

var af_key=30;

var bd_key=90;

var ev_key=150;

var hz_key=210;

var size =100;

var dev_width;
var dev_height;

var af_stand=false;
var bd_stand=false;
var ev_stand=false;
var hz_stand=false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  animalFree = loadImage("assets/icons/animal-free.png");
  biodegradable = loadImage("assets/icons/biodegradable.png");
  environment = loadImage("assets/icons/environment.png");
  hazardous = loadImage("assets/icons/hazardous.png");

  frameRate(fps);

  dev_width=((width/2)/50)*29;
  dev_height=((height/2)/50)*29;


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
  af_stand=true;
  image(biodegradable,width/2,height/2);
}else if(frames<bd_key+30){
  image(biodegradable,width/2-((width/2)/50)*(frames-bd_key),height/2-((height/2)/50)*(frames-bd_key));
}else if(frames<ev_key){
  bd_stand=true;
  image(environment,width/2,height/2);
}else if(frames<ev_key+30){
  image(environment,width/2+((width/2)/50)*(frames-ev_key),height/2+((height/2)/50)*(frames-ev_key));
}else if(frames<hz_key){
  ev_stand=true;
  image(hazardous,width/2,height/2);
}else if(frames<hz_key+30){
  image(hazardous,width/2+((width/2)/50)*(frames-hz_key),height/2-((height/2)/50)*(frames-hz_key));
}else{
  hz_stand=true;
}
frames++;
if(af_stand){
  image(animalFree,width/2-dev_width,height/2+dev_height);
}
if(bd_stand){
  image(biodegradable,width/2-dev_width,height/2-dev_height);
}
if(ev_stand){
  image(environment,width/2+dev_width,height/2+dev_height);
}
if(hz_stand){
  image(hazardous,width/2+dev_width,height/2-dev_height);
}

}
