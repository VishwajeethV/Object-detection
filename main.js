IMG="";

function preload() {
    IMG=loadImage("dog_cat.jpg");
}

function setup() {
    canvas=createCanvas(700,500);
    canvas.center();
}

function draw() { 
    image(IMG,0,0,700,500);

    fill("red");
    textSize(20);
    text("Dog",100,70);
    noFill();
    stroke("purple");
    rect(100,50,320,400);
}