var DrawingEngine = (function()
{	
	
	function drawPolygon(ctx, p, offsetX, offsetY)
	{
		var newX;
		var newY;
	
		offsetX = offsetX || 0;
		offsetY = offsetY || 0;
	
		if(p.data.length <= 0)
		return;
	
		ctx.beginPath();
		
		newX = (p.data[0].x + p.x);// * p.scaleX;
		newY = (p.data[0].y + p.y);// * p.scaleY;
		
		newX -= offsetX;
		newY -= offsetY;
		
		
		ctx.moveTo(newX, newY);
			
		for(var i = 1; i < p.data.length; i++)
		{
			newX = (p.data[i].x + p.x) * p.scaleX;
			newY = (p.data[i].y + p.y) * p.scaleY;
		
			newX -= offsetX;
			newY -= offsetY;
		
			ctx.lineTo(newX, newY);		
		}
		ctx.closePath();
	
	
		if(p.fill)
		{
			ctx.fillStyle = p.fillStyle;	
			ctx.fill();
		}
		
		if(p.stroke)
		{
			ctx.strokeStyle = p.strokeStyle;
			ctx.stroke();
		}
	
	}
	
	function clearScreen(ctx)
	{
		ctx.clearRect(0, 0, Engine.screenWidth, Engine.screenHeight);
	}
	
	function redrawScene(ctx, scene, x, y)
	{
	
		clearScreen(ctx);
		for( var i = 0; i < scene.polygons.length; i++)
		{
			drawPolygon(ctx, scene.polygons[i], x, y);
		}
		//IMAGES
		//TEXTS

	}

	return {
	drawPolygon : drawPolygon,
	clearScreen : clearScreen,
	redrawScene : redrawScene
	};
	
})();