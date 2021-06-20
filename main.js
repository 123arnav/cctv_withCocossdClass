var video="";
var status="";
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
};