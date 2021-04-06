const canvas = document.getElementById("my_canvas");
const context = canvas.getContext("2d");  // to let know that we are worjing on 2d

const width = 400;
const height = 600;

// paddle
let paddleWidth = 50;
let paddleHeight = 10;

canvas.width = width;
canvas.height =  height;  // assigning canvas width and height acc to       


// Create a rectangle

context.fillStyle = "black";
context.fillRect(0,0,width,height);

// create a paddle

// paddle top
context.fillStyle = "white";
context.fillRect(175,10,paddleWidth,paddleHeight);

// paddle bottom
context.fillStyle = "white";
context.fillRect(175, height - 20 ,paddleWidth,paddleHeight);

// center line
context.beginPath();
context.setLineDash([6]);  // to draw dashed style line
context.moveTo(0,height/2);
context.lineTo(width, height/2);
context.strokeStyle = "grey"; // stroke style to give color to be visible
context.stroke();   // to create line stroke() method
// create circle for ball

context.beginPath();
context.arc(width/2, height/2, 10, 2 * Math.PI, false);
context.fillStyle = " white"
context.fill()

// Players score

context.font = "32px" ;
context.fillText(10,20, height/2 -30 );
context.fillText(15,20, height/2 + 30);
