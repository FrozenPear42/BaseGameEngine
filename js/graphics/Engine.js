var Engine = (function()
{
	
	var ctx;
	var mScene;
	var mCamera;

	var requestID;
	
	var screenWidth = document.documentElement.clientWidth;
	var screenHeight = document.documentElement.clientHeight;
	
	function init(context, camera, mainScene)
	{
		ctx = context;
		mScene = mainScene;
		mCamera = camera;
		
		FPSCounter.start();
		
		DrawingEngine.redrawScene(ctx, mScene, mCamera.x, mCamera.y);
		requestID = requestAnimationFrame(onUpdate); 
		
	}
	
	function setScene(scene)
	{
		mScene = scene;
	}
	
		function setCamera(camera)
	{
		mCamera = camera;
	}
	
	function onUpdate()
	{
		DrawingEngine.redrawScene(ctx, mScene, mCamera.x, mCamera.y);
		console.log("redraw");
		requestAnimationFrame(onUpdate);
		FPSCounter.update();
		
	}
	
	return {
	init : init,
	setScene : setScene,
	setCamera : setCamera,
	screenWidth : screenWidth,
	screenHeight : screenHeight
	};
	
})();