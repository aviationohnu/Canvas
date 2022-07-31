canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");
var mouseevent = "empty";
var lastpostionofx,lastpostionofy;
color = "black";
widthofline = 1;
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mouseevent = "mousedown";
color = document.getElementById("color").value;
widthofline = document.getElementById("width_of_line").value;

}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseevent = "mouseup";

}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseevent = "mouseleave";

}
canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
  currentposofmosX = e.clientX - canvas.offsetLeft;
  currentposofmosY = e.clientY - canvas.offsetTop;
  if (mouseevent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthofline;
    console.log("last position of x and y = ");
    console.log("x = "+ lastpostionofx + "y = " + lastpostionofy);
    ctx.moveTo(lastpostionofx,lastpostionofy);
    console.log("current position of x and y = ");
    console.log("x = " +currentposofmosX + "y = " + currentposofmosY);
    ctx.lineTo(currentposofmosX,currentposofmosY); 
   ctx.stroke();
  }
  lastpostionofx = currentposofmosX;
  lastpostionofy = currentposofmosY;
}

function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}