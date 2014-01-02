var Animation = (function()
{
	
	var animations = [];
	var intervals = [];

	function cancelAnimation(key)
	{
		clearInterval(intervals[key]);
		intervals[key] = null;

	}

	function animMoveTo(obj, toX, toY, time, func, callback)
	{
		var startX = obj.x;
		var startY = obj.y;

		var dX = toX - startX;
		var dY = toY - startY;
		
		var vX = dX/time;
		var vY = dY/time;
		
		var steps;
			if (Math.abs(dX) > Math.abs(dY))
				steps = Math.abs(dX)
			else
				steps = Math.abs(dY);
		
		var cnt = 0;

		console.log("vX", vX);
		console.log("vY", vY);
		console.log("steps", steps);
		console.log("interval", (time*1000)/steps); 

		animations.push({
		obj : obj,
		time : time,
		func : func,
		vX : vX,
		vY : vY,
		steps : steps,
		cnt : 0
		});
		
		/*intervals[obj] = setInterval(function()
		{
			cnt++;
			if (cnt >= steps)
			{
				cancelAnimation(obj);
				//callback();
			}
			
			obj.x += vX*(time/steps);
			obj.y += vY*(time/steps);
			
		}, (time*1000)/steps);
	*/
	}

	function process(time)
	{
		animations.forEach(function(anim){
		//console.log(anim);
		//anim.cnt += (time/anim.steps);
		anim.cnt += time*(anim.time/anim.steps);
		if (anim.cnt >= anim.steps)
		{
			console.log(anim);
			animations.removeElement(anim);
			return;
		}
		anim.obj.x += anim.vX * (time/1000);
		anim.obj.y += anim.vY * (time/1000);
		
		});
	}
	
	return {
		process : process,
		animMoveTo : animMoveTo,
		animations : animations
	}

})();