var arr = [];
var scene;

function start()
{
	var canvas = document.getElementById("canvas");
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	var ctx = canvas.getContext("2d");
	
	scene = new Scene();
	
	Engine.init(ctx, scene);
	
	var a = [{"x":1318,"y":304}, {"x":1113,"y":293}, {"x":978,"y":218}, {"x":967,"y":105}, {"x":1051,"y":92}, {"x":1202,"y":95}, {"x":1332,"y":110}, {"x":1393,"y":157}, {"x":1417,"y":280}, {"x":1428,"y":446}, {"x":1396,"y":559}, {"x":1336,"y":659}, {"x":1243,"y":691}, {"x":1194,"y":694}, {"x":1178,"y":730}, {"x":1294,"y":781}, {"x":1381,"y":799}, {"x":1439,"y":787}, {"x":1529,"y":715}, {"x":1553,"y":675}, {"x":1549,"y":561}, {"x":1544,"y":510}, {"x":1573,"y":469}, {"x":1660,"y":533}, {"x":1671,"y":619}, {"x":1640,"y":714}, {"x":1558,"y":772}, {"x":1492,"y":808}, {"x":1385,"y":837}, {"x":1260,"y":875}, {"x":1150,"y":879}, {"x":995,"y":835}, {"x":896,"y":790}, {"x":813,"y":739}, {"x":739,"y":669}, {"x":770,"y":541}, {"x":777,"y":480}, {"x":829,"y":442}, {"x":913,"y":414}];
	
	
		//DrawingEngine.fillPolygon(ctx, 0, 0, offsetArray(a), rgbToHex((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))))
		//DrawingEngine.strokePolygon(ctx, 0, 0, offsetArray(a), "#000000");	
	
	
		//DrawingEngine.fillPolygon(ctx, 50, 20, offsetArray(a), rgbToHex((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))))
		//DrawingEngine.strokePolygon(ctx, 50, 20, offsetArray(a), "#000000");	
	
	
	canvas.addEventListener("click", function(event)
	{
	    var x = event.pageX - canvas.offsetLeft;
		var y = event.pageY - canvas.offsetTop;	
		
		arr.push({"x":x, "y":y});
		
		//scene.atachChild(new Polygon(0, 0, arr, true, rgbToHex((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))), true, "#000000")
		
		DrawingEngine.fillPolygon(ctx, 0, 0, arr, rgbToHex((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))));
		DrawingEngine.strokePolygon(ctx, 0, 0, arr, "#000000");

	}, false);
	
}

function offsetArray(arr)
{
	var offX = Math.abs(arr[0].x);
	var offY = Math.abs(arr[0].y);
	
	for(var i = 1; i < arr.length; i++)
	{
		offX = Math.min(offX, Math.abs(arr[i].x));
		offY = Math.min(offY, Math.abs(arr[i].y));
	}	
	
	//TODO: HANDLE x,y <0
	
	for(var i = 0; i < arr.length; i++)
	{
		arr[i].x -= offX;
		arr[i].y -= offY;
	}
	
	return arr;
}

function printArray(arr)
{
	var c;
	c = "[";
	for(var i = 0; i < arr.length; i++)
	{
		c+= JSON.stringify(arr[i]);
		i != arr.length-1 ? c+=", " : c += "";
	}
	c += "]";
	console.log(c);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}




function Scene()
{
	this.polygons = [];
	this.images = [];
	this.texts = [];
}
Scene.prototype.redraw = function(ctx)
{
	DrawingEngine.clearScreen();
	for( p in this.polygons)
		DrawingEngine.drawPolygon(ctx, p);
	
	//IMAGES
	//TEXTS
}

Scene.prototype.clear = function()
{
	this.polygons.splice(0, this.polygons.length);
	this.images.splice(0, this.images.length);
	this.texts.splice(0, this.texts.length);
}

Scene.prototype.attachChild = function(child)
{
	if(child instanceof Polygon) return this.polygons.push(child);
	if(child instanceof Image) return this.images.push(child);
	if(child instanceof Text) return this.texts.push(child);
	
}

//Scene.prototype.detachChild
Array.prototype.removeElement = function(obj)
{
	var idx = this.indexOf(obj);
	if(idx != -1)
		this[idx] = this.pop();
}

function Polygon(x, y, data, fill, fillStyle, stroke, strokeStyle)
{
	this.x = x;
	this.y = y;
	this.data = data;
	this.fill = fill;
	this.fillStyle = fillStyle;
	this.stroke = stroke;
	this.strokeStyle = strokeStyle;
	
}

Polygon.prototype.setPosition = function(x, y)
{
	this.x = x;
	this.y = y;
}

var Engine = (function()
{
	
	var ctx;
	var mScene;
	var FPS = 2;
	
	var updateInterval;
	
	function init(context, mainScene)
	{
		ctx = context;
		setScene(mainScene);
		mScene.redraw(ctx);
		updateInterval = setInterval(function(){onUpdate()}, 1000/FPS); 
		
	}
	
	function setScene(scene)
	{
		mScene = scene;
	}
	
	function onUpdate()
	{
		mScene.redraw(ctx);
		console.log("redraw");
	}
	
	return {
	init : init,
	setScene : setScene
	};
	
})();


var DrawingEngine = (function()
{

	function fillPolygon(ctx, x, y, data, fillStyle)
	{
		ctx.fillStyle = fillStyle;
		ctx.beginPath();
		ctx.moveTo(data[0].x+x, data[0].y+y);
		
		for(var i = 1; i < data.length; i++)
		{
			ctx.lineTo(data[i].x+x, data[i].y+y);		
		}
		ctx.closePath();
		ctx.fill();
		
	}
	
	function strokePolygon(ctx, x, y, data, strokeStyle)
	{
		ctx.strokeStyle = strokeStyle;
		ctx.beginPath();
		ctx.moveTo(data[0].x+x, data[0].y+y);
		
		for(var i = 1; i < data.length; i++)
		{
			ctx.lineTo(data[i].x+x, data[i].y+y);		
		}
		ctx.closePath();
		ctx.stroke();
		
	}
	
	function drawPolygon(ctx, p)
	{
	
		if(p.fill)
			fillPolygon(ctx, p.x, p.y, p.data, p.fillStyle);
		if(p.stroke)
			strokePolygon(ctx, p.x, p.y, p.data, p.strokeStyle);	
	
	}
	
	function clearScreen()
	{
	
	}

	return {
	fillPolygon : fillPolygon,
	strokePolygon : strokePolygon,
	drawPolygon : drawPolygon,
	clearScreen : clearScreen
	};
	
})();