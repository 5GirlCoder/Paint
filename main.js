canvas = document.getElementById("PaintCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "blue";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown()
{
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup() 
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave ()
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e)
{
    current_position_of_mouseX = e.clientX - canvas.offsetLeft;
    current_position_of_mouseY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last_posisition_of_x" + last_position_of_x);
        console.log("last_posisition_of_y" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("current_position_of_mouseX" + current_position_of_mouseX);
        console.log("current_position_of_mouseY" + current_position_of_mouseY);
        ctx.lineTo(current_position_of_mouseX, current_position_of_mouseY);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouseX;
    last_position_of_y = current_position_of_mouseY;
}