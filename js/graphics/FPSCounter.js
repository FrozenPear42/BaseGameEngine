var FPSCounter = (function()
{

	var currentFPS = 0;
	var	avgFPS = 0;
	var currentCnt = 0;
	var allCnt = 0;
	var secCnt = 0;
	
	var id;
	var state = false;
	
function start()
{
	id = setInterval(onSecPassed, 1000);
	state = true;
}

function stop()
{
	clearInterval(id);
	state = false;
}

function update()
{
	if(!state)
		return;
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
	stop : stop,
	avgFPS : avgFPS,
	currentFPS : currentFPS
}

})();