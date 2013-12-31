var Animation = (function()
{

	var intervals = [];

	function cancelAnimation(key)
	{
		intervals[key] = null;

	}

	function animMoveTo(obj, toX, toY, veloc, func, callback)
	{
		var startX = obj.x;
		var startY = obj.y;

		var steps = Math.sqrt((startX - toX) ^ 2 + (startY - toY) ^ 2);
		var time = steps/veloc;
		
		console.log(time);
		console.log(steps);
		var cnt = 0;

		intervals[obj] = setInterval(function()
		{
			obj.x += (toX - startX) / steps;
			obj.y += (toY - startY) / steps;
			if (cnt > steps)
			{
				cancelAnimation(obj);
				callback();
			}
		}, time*1000);
	}

	return {
		animMoveTo : animMoveTo
	}

})();