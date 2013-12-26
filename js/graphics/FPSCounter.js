var FPSCounter = (function()
{

	var currentFPS = 0;
	var	avgFPS = 0;
	var currentCnt = 0;
	var allCnt = 0;
	var secCnt = 0;
	
function start()
{
	setInterval(onSecPassed, 1000);
}

function update()
{
	currentCnt++;
	allCnt++;
}

function onSecPassed()
{
	secCnt++;

	currentFPS = currentCnt;
	currentCnt = 0;
	
	avgFPS = allCnt/secCnt;
	
	console.log("avg FPS: ", avgFPS);
	console.log("current FPS:", currentFPS);
	
}

return {
	update : update,
	start : start,
	avgFPS : avgFPS,
	currentFPS : currentFPS
}

})();