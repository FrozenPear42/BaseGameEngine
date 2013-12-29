var DrawingEngine = (function()
{	
	
	function drawPolygon(ctx, p, offsetX, offsetY)
	{
		
		offsetX = offsetX || 0;
		offsetY = offsetY || 0;
	
		if(p.data.length <= 0 || (!p.fill && !p.stroke))
		return;
	
		ctx.beginPath();
				
		for(var i = 0; i < p.data.length; i++)
		{
			ctx.lineTo(p.data[i].x + p.x - offsetX,
					   p.data[i].y + p.y - offsetY);
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
	
	
	function drawSprite(ctx, i, offsetX, offsetY)
	{
		offsetX = offsetX || 0;
		offsetY = offsetY || 0;
		
		ctx.drawImage(i.img, i.x - offsetX, i.y - offsetY);
		
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
		for( var i = 0; i < scene.sprites.length; i++)
		{
			drawSprite(ctx, scene.sprites[i], x, y);
		}
		//TEXTS

	}

	return {
	drawPolygon : drawPolygon,
	drawSprite : drawSprite,
	clearScreen : clearScreen,
	redrawScene : redrawScene
	};
	
})();