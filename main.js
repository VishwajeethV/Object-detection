IMG="";
status="";
objects=[];

function preload() {
    IMG=loadImage("dog_cat.jpg");
}

function setup() {
    canvas=createCanvas(700,500);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
}

function modelloaded() {
    console.log("model is loaded");
    status= true;
    objectdetector.detect(IMG,getResult);
}

function getResult(error,results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function draw() { 
    image(IMG,0,0,700,500);

    /*fill("red");
    textSize(20);
    text("Dog",100,70);
    noFill();
    stroke("purple");
    strokeWeight(5)
    rect(100,50,320,400);

    fill("red");
    textSize("20");
    text("cat" , 325,90);
    noFill();
    stroke("purple");
    strokeWeight(5);
    rect(320,70,320,400);*/

    if(status!="") {
        for(var i=0;i<objects.length;i++) {
             fill("red");
             textSize(20);
             percent=floor(objects[i].confidence*100)
             text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+20);
             noFill();
             stroke("purple");
             strokeWeight(5);
             rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }






}