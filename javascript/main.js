$(function(){
    $("#level").change(function(){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // get level
        var n = $(this).val();
        // determine length of side
        var l_min = 6;
        var l_side = l_min * Math.pow(2, n);
        // determine canvas size
        canvas.height = l_side/2*Math.sqrt(3);
        canvas.width = l_side;
        // draw
        drawSierpinskiTriangle(n, 0, canvas.height, l_side, ctx);
    });
});

function drawSierpinskiTriangle(n, x, y, l_side, ctx)
{
    var dx = l_side/2;
    var dy = l_side/2*Math.sqrt(3);
    if(n == 0){
        // do nothing
    }
    else if(n == 1){
        // draw triangel
	ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+dx, y-dy);
        ctx.lineTo(x+l_side, y);
        ctx.closePath();
        ctx.stroke();
    }
    else{
        // draw sub triangles 
        drawSierpinskiTriangle(n-1, x, y, l_side/2, ctx);
        drawSierpinskiTriangle(n-1, x+dx/2, y-dy/2, l_side/2, ctx);
        drawSierpinskiTriangle(n-1, x+dx, y, l_side/2, ctx);
    }
}
