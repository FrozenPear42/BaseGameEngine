function onStartEngine()
{
	console.log("onStart");
	
	var canvas = document.getElementById("canvas");
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	var ctx = canvas.getContext("2d");
	
	scene = new Scene();
	camera = new Camera(canvas.width, canvas.height);
	Engine.init(ctx, camera, scene);
	
}

function onLoadResources(resources)
{
	texture1 = new Texture("res/sprites/test1.jpg");
	texture2 = new Texture("res/sprites/test2.jpg");
	resources.push(texture1);
	resources.push(texture2);
	
}

function onLoadScripts(scripts)
{
	
}

function onLoadingProgress(progress)
{
	console.log(progress);
}

function onActivity()
{
	poly = new Polygon(0, 0, offsetArray([{"x":894,"y":365}, {"x":991,"y":349}, {"x":940,"y":205}, {"x":783,"y":197}, {"x":599,"y":279}, {"x":636,"y":468}, {"x":783,"y":573}, {"x":974,"y":545}, {"x":1045,"y":457}]) , true, true);
	poly2 = new Polygon(0, 0, offsetArray([{"x":894,"y":365}, {"x":991,"y":349}, {"x":940,"y":205}, {"x":783,"y":197}, {"x":599,"y":279}, {"x":636,"y":468}, {"x":783,"y":573}, {"x":974,"y":545}, {"x":1045,"y":457}]) , true, true); 
	
	poly.fillStyle = rgb((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)));
	poly2.fillStyle = rgb((Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)));
	
	poly.strokeStyle = "#000000";
	poly2.strokeStyle = "#000000";
	
	
	img1 = new Sprite(0, 0, texture1);
	img2 = new Sprite(200, 200, texture2);
	text = new Text(100, 100, new Font(), true, true, "asd");
	scene.attachChild(text);
	scene.attachChild(img1);
	scene.attachChild(img2);
	
	scene.attachChild(poly);		
	scene.attachChild(poly2);		
	
	poly.setPosition(document.documentElement.clientWidth/2-poly.width/2, document.documentElement.clientHeight/2-poly.height/2);
	
}