function start()
{
	var canvas = document.getElementById("canvas");
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	var ctx = canvas.getContext("2d");
	
	var scene = new Scene();
	var camera = new Camera(canvas.width, canvas.height);
	Engine.init(ctx, camera, scene);
	
	var arr = [];	
	
	
	poly = new Polygon(0, 0, [{"x":894,"y":365}, {"x":991,"y":349}, {"x":940,"y":205}, {"x":783,"y":197}, {"x":599,"y":279}, {"x":636,"y":468}, {"x":783,"y":573}, {"x":974,"y":545}, {"x":1045,"y":457}] , true, rgb((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))), true, "#000000");
	poly2 = new Polygon(0, 0, [{"x":894,"y":365}, {"x":991,"y":349}, {"x":940,"y":205}, {"x":783,"y":197}, {"x":599,"y":279}, {"x":636,"y":468}, {"x":783,"y":573}, {"x":974,"y":545}, {"x":1045,"y":457}] , true, rgb((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))), true, "#000000"); 

	scene.attachChild(poly);		
	scene.attachChild(poly2);		
	poly.updateSize();
	poly.setPosition(document.documentElement.clientWidth/2-poly.width/2, document.documentElement.clientHeight/2-poly.height/2);
	
	canvas.addEventListener("mousedown", function(event)
	{
		
	    var x = event.pageX - canvas.offsetLeft;
		var y = event.pageY - canvas.offsetTop;	
		
		
		arr.push({"x":x, "y":y});
		poly.fillStyle = rgbToHex((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)));
	}, false);
	
	
	canvas.addEventListener("mousemove", function(event)
	{
		var x = event.pageX - canvas.offsetLeft;
		var y = event.pageY - canvas.offsetTop;	
		
		camera.setPosition(x, y);
		
	}, false);
	
}



