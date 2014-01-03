var Engine = (function()
{

	var mainScripts =
	[ 	"./js/graphics/DrawingEngine.js",
		"./js/graphics/FPSCounter.js",
		"./js/graphics/Scene.js", 
		"./js/graphics/Camera.js",
		"./js/graphics/Entities.js",
		"./js/graphics/Font.js", 
		"./js/graphics/TexturePack.js",
		"./js/graphics/Animation.js",
		"./js/graphics/Util.js" ];

	var ctx;
	var mScene;
	var mCamera;

	var requestID;

	var screenWidth = document.documentElement.clientWidth;
	var screenHeight = document.documentElement.clientHeight;

	var lastTime = 0;
	var time = 0;
	
	function start()
	{
		var scripts = [];

		onLoadScripts(scripts);
		loadScripts(mainScripts.concat(scripts), onLoadingProgress, continueLoading);
		
		return;
	}
	
	function continueLoading()
	{
		var resources = [];

		console.log("continue");
		onStartEngine();

		onLoadResources(resources);
		// loadResources(resources, onLoadingResourcesProgress)

		onActivity();
	}

	function init(context, camera, mainScene)
	{
		ctx = context;
		mScene = mainScene;
		mCamera = camera;

		// FPSCounter.start();

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
		time = Date.now() - lastTime;
		lastTime = Date.now();
		
		Animation.process(time);
		
		DrawingEngine.redrawScene(ctx, mScene, mCamera.x, mCamera.y);
		//console.log("redraw", time);
		requestAnimationFrame(onUpdate);
		FPSCounter.update();

	}

	return {
		init : init,
		setScene : setScene,
		setCamera : setCamera,
		screenWidth : screenWidth,
		screenHeight : screenHeight,
		start : start
	};

})();