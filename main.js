var drawcircle="";
var drawrectangle="";
var drawsquare="";
var drawtriangle="";
var drawx=0;
var drawy=0;
function setup(){
    canvas =createCanvas(900,600);
}
function draw(){
    if(drawcircle=="set"){
        console.log("Working",drawy,drawx);
    radius =Math.floor(Math.random()*100);
    circle(drawx,drawy,radius);
    document.getElementById("status").innerHTML="Circle drawn with ease xd";
    drawcircle=" ";
    }
    
    
    }
Speak=window.webkitSpeechRecognition;
Synth =new Speak();

function Recognizer(){
    document.getElementById("status").innerHTML="System is listening.Please Speak";
    Synth.start();
}

Synth.onresult=function (StoreR){
    console.log(StoreR);
    convert=StoreR.results[0][0].transcript;
    document.getElementById("status").innerHTML="System Recognized. "+convert;
    
    if(convert == "circle"){
        drawx=Math.floor(Math.random()*900);
        drawy=Math.floor(Math.random()*600);
        drawcircle="set";
        console.log(drawy,drawx,drawcircle);
        document.getElementById("status").innerHTML="Drawing Circle";
    }
    if(convert == "Rectangle"){
        drawx=Math.floor(Math.random()*900);
        drawy=Math.floor(Math.random()*600);
        drawrectangle="set";
        document.getElementById("status").innerHTML="Drawing Rectangle";
    }
    if(convert == "Square"){
        drawx=Math.floor(Math.random()*900);
        drawy=Math.floor(Math.random()*600);
        drawsquare="set";
        document.getElementById("status").innerHTML="Drawing Square";
    }
    if(convert == "Triangle"){
        drawx=Math.floor(Math.random()*900);
        drawy=Math.floor(Math.random()*600);
        drawtriangle="set";
        document.getElementById("status").innerHTML="Drawing Triangle";
    }
}

