var video="";
var status="";
var object=[];
function preload(){
video=createVideo("video.mp4")
video.hide();
};

function setup(){
canvas=createCanvas(400,330);
canvas.position(450,230);
};
function start(){
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:detecting";
};

function modelloaded(){
    console.log("loaded");
    status="true";
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
image(video,0,0,400,330)
if (status!=""){
objectDetector.detect(video,gotresult)
for(i=0; i<object.length; i++){
    document.getElementById("status").innerHTML="Status:detected";
    document.getElementById("objects").innerHTML=object.length;
    confidence=Math.floor(object[i].confidence*100)+"%";
    r=0;
    g=Math.floor(Math.random()*255);
    b=0;
    fill(r,g,b)
    text(object[i].label+"  "+confidence, object[i].x, object[i].y)
    noFill();
    stroke(r,g,b);
    rect(object[i].x, object[i].y, object[i].width, object[i].height)
    
}
};
};
function gotresult(error,result){
    if (error){
console.log(error);
    }
    else {
        console.log(result);
        object=result;
    }
};