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
		
		if(!obj.hasOwnProperty("x") || !obj.hasOwnProperty("y"))
			return -1;
		
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
			type : "move",
			obj : obj,
			time : time,
			func : func,
			vX : vX,
			vY : vY,
			steps : steps,
			cnt : 0
		});
	}

	function animFadeOut(obj, time, func, callback)
	{
		if(!obj.hasOwnProperty("alpha"))
			return -1;
		
		return animations.push(
		{
			type : "fade",
			obj : obj,
			func : func,
			time : -time,
			to : 0
		});
	}

	function animFadeIn(obj, time, func, callback)
	{
		if(!obj.hasOwnProperty("alpha"))
			return -1;
		
		return animations.push(
		{
			type : "fade",
			obj : obj,
			func : func,
			time : time,
			to : 1

		});
	}
	
	function animFadeTo(obj, time, to, func, callback)
	{
		if(!obj.hasOwnProperty("alpha"))
			return -1;
		
		return animations.push(
				{
					type : "fade",
					obj : obj,
					func : func,
					time : time,
					to : to,
					direction : (to < obj.alpha ? -1 : 1)
				});	
	}
	
	function process(time)
	{
		animations.forEach(function(anim)
		{
			switch (anim.type)
			{

			case "move":
				anim.cnt += time / ((anim.time * 1000) / anim.steps);

				if (anim.cnt >= anim.steps)
				{
					console.log(anim);
					animations.removeElement(anim);
					return;
				}
				anim.obj.x += anim.vX * (time / 1000);
				anim.obj.y += anim.vY * (time / 1000);
				break;

			case "fade":

				anim.obj.alpha += time / (anim.time * 1000);
				
				if (anim.obj.alpha < 0)
				{
					anim.obj.alpha = 0;
					console.log(anim);
					animations.removeElement(anim);
					return;
				}
				if( anim.obj.alpha > 1)
				{
					anim.obj.alpha = 1;
					console.log(anim);
					animations.removeElement(anim);
					return;
				}	
				
				break;

			}
		});

	}

	return {
		process : process,
		animMoveTo : animMoveTo,
		animFadeOut : animFadeOut,
		animFadeIn : animFadeIn,
		animFadeTo : animFadeTo,
		animations : animations
	}

})();