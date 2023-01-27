var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var song1 = "";
var song2 = "";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX);
        console.log("leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX);
        console.log("rightWristY = " + rightWristY);
    }
}
function modelLoaded(){
    console.log("Model is Initialized");
}
function draw(){
    image(video,0, 0, 600, 500);
}
function play1(){
    song1.play();
}
function play2(){
    song2.play();
}
