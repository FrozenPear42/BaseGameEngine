var Engine = (function()
{

	var mainScripts =
	[ "./js/graphics/DrawingEngine.js", "./js/graphics/FPSCounter.js",
			"./js/graphics/Scene.js", "./js/graphics/Camera.js",
			"./js/graphics/Polygon.js", "./js/graphics/Text.js",
			"./js/graphics/Font.js", "./js/graphics/Sprite.js",
			"./js/graphics/Entity.js", "./js/graphics/Animation.js",
			"./js/graphics/Util.js" ];

	var ctx;
	var mScene;
	var mCamera;

	var requestID;

	var screenWidth = document.documentElement.clientWidth;
	var screenHeight = document.documentElement.clientHeight;

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
		screenHeight : screenHeight,
		start : start
	};

})();