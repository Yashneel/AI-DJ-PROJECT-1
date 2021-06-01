function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();}
    
    function draw(){
    image(video, 0, 0, 300, 300);
    console.log("js is ok")
   stroke("yellow")
   fill("yellow")
    circle(0,3,50)
    circle(300,3,50)
    circle(300,300,50)
    circle(0,300,50)
}
function preload(){
	
}
