window.onload = function () {
  var canvas = document.getElementById("mycanvas");
  var context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(100, 100); // upper left corner postion
  context.lineTo(100, 60); // starnig to draw line from above position

  context.moveTo(100, 100);
  context.lineTo(200, 100);

  // context.moveTo(200, 100);
  context.lineTo(200, 60);

  // context.moveTo(200,60);
  context.lineTo(150, 40);
  context.lineTo(100, 60);
  context.lineWidth = 5;
  context.strokeStyle = "green";
  context.lineCap = "round";
  // context.fill='yellow';

  context.stroke();

  // Arc
  var canvas1 = document.getElementById("mycanvas1");
  var ctx1 = canvas1.getContext("2d");
  ctx1.beginPath();
  ctx1.arc(150, 100, 30, 0.5 * Math.PI, 2 * Math.PI);
  ctx1.lineWidth = 4;
  ctx1.font = "30px Arial";
  // ctx1.fillText("Hello World", 20, 40);
  ctx1.strokeText("Hello Nikhil", 20, 60);
  ctx1.stroke();

  
  var c = document.getElementById("mycanvas2");
  var ctx = c.getContext("2d");
  var x = 40;
  var y = 40;
  var width = 80;
  var height = 80;
  ctx.beginPath();
  ctx.strokeStyle='blue';
  ctx.fillStyle = "green";
  ctx.fillRect(x, y, width, height);
  ctx.lineWidth = 10;

  ctx.strokeRect(x, y, width, height);

  // var offset = 10;
  

  // ctx.beginPath();
  // ctx.shadowColor = "#d53";
  // ctx.shadowBlur = 20;
  // ctx.lineJoin = "bevel";
  // ctx.lineWidth = 10;
  // ctx.strokeStyle = grd;
  // ctx.strokeRect(x, y, width, height);

  // rectangle
  var theChart = document.getElementById("mycanvas4");
  if (theChart.getContext) {
    var theContext = theChart.getContext("2d");

    theContext.fillStyle = "blue";
    theContext.fillRect(25, 70, 50, 100);

    theContext.fillStyle = "green";
    theContext.fillRect(80, 70, 50, 100);

    theContext.fillStyle = "brown";
    theContext.fillRect(135, 70, 50, 100);

    document.getElementById("print").innerHTML = "Nikhil";
    theContext.stroke();
  } else {
    document.getElementById("error").innerHTML = "Error loading";
  }



var canvas = document.getElementById('mycanvas5');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

let circle = new Path2D();  // <<< Declaration
circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

context.fillStyle = 'blue';
context.fill(circle); //   <<< pass circle to context

context.lineWidth = 10;
context.strokeStyle = '#000066';
context.stroke(circle);  // <<< pass circle here too
};


function mycanvas3() {
  var c = document.getElementById("mycanvas3");
  if (c.getContext) {
    var ctx = c.getContext("2d");

    var img = document.getElementById("panda");
    ctx.drawImage(img, 0, 0);

    document.getElementById("print").innerHTML = "javascript ";
  }
}
