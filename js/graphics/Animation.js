var Animation = (function()
{

	var animations = [];
	var intervals = [];

	function cancelAnimation(anim)
	{
		animmations.removeElement(anim);
	}

	function animMoveTo(obj, toX, toY, time, func, callback)
	{
		var startX = obj.x;
		var startY = obj.y;

		var dX = toX - startX;
		var dY = toY - startY;

		var vX = dX / time;
		var vY = dY / time;

		var steps;
		if (Math.abs(dX) > Math.abs(dY))
			steps = Math.abs(dX)
		else
			steps = Math.abs(dY);

		var cnt = 0;

		console.log("vX", vX);
		console.log("vY", vY);
		console.log("steps", steps);
		console.log("interval", (time * 1000) / steps);

		return animations.push(
		{
			obj : obj,
			time : time,
			func : func,
			vX : vX,
			vY : vY,
			steps : steps,
			cnt : 0
		});

	function process(time)
	{
		animations.forEach(function(anim)
		{

			anim.cnt += time/((anim.time * 1000) / anim.steps);

			if (anim.cnt >= anim.steps)
			{
				console.log(anim);
				animations.removeElement(anim);
				return;
			}
			anim.obj.x += anim.vX * (time / 1000);
			anim.obj.y += anim.vY * (time / 1000);

		});
	}

	return {
		process : process,
		animMoveTo : animMoveTo,
		animations : animations
	}

})();