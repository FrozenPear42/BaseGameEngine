var DrawingEngine = (function()
{

	function drawPolygon(ctx, p, offsetX, offsetY)
	{

		offsetX = offsetX || 0;
		offsetY = offsetY || 0;

		if (p.data.length <= 0 || (!p.fill && !p.stroke))
			return;

		ctx.globalAlpha = p.alpha;
		
		ctx.beginPath();

		for (var i = 0; i < p.data.length; i++)
		{
			ctx.lineTo(p.data[i].x + p.x - offsetX, p.data[i].y + p.y - offsetY);
		}

		ctx.closePath();

		if (p.fill)
		{
			ctx.fillStyle = p.fillStyle;
			ctx.fill();
		}

		if (p.stroke)
		{
			ctx.strokeStyle = p.strokeStyle;
			ctx.stroke();
		}

	}

	function drawSprite(ctx, i, offsetX, offsetY)
	{
		offsetX = offsetX || 0;
		offsetY = offsetY || 0;

		ctx.globalAlpha = i.alpha;
		
		ctx.drawImage(i.texture.img, i.x - offsetX, i.y - offsetY);

	}
	
	function drawTPSprite(ctx, i, offsetX, offsetY)
	{
		offsetX = offsetX || 0;
		offsetY = offsetY || 0;

		ctx.globalAlpha = i.alpha;
		
		ctx.drawImage(i.texture.img, i.sX, i.sY, i.sW, i.sH, i.x - offsetX, i.y - offsetY, i.sW, i.sH);

	}
	
	function drawText(ctx, text, offsetX, offsetY)
	{
		
		ctx.globalAlpha = text.alpha;
		
		ctx.font = text.font.style + " " + text.font.size + " " + text.font.font + " , sans serif";
		ctx.fillStyle = text.fillColor;
		ctx.strokeStyle = text.strokeColor;
		
		if(text.fill)
			{
			ctx.fillStyle = text.fillStyle;
			ctx.fillText(text.text, text.x - offsetX, text.y - offsetY);
			}
		if(text.stroke)
			{
			ctx.strokeStyle = text.strokeStyle;
			ctx.strokeText(text.text, text.x - offsetX, text.y - offsetY);
			}
	}

	function clearScreen(ctx)
	{
		ctx.clearRect(0, 0, Engine.screenWidth, Engine.screenHeight);
	}

	function redrawScene(ctx, scene, x, y)
	{

		clearScreen(ctx);
		
		for(var i = 0; i < scene.children.length; i++)
		{
			if(scene.children[i] instanceof Polygon)
				drawPolygon(ctx, scene.children[i], x, y);
			else if(scene.children[i] instanceof Sprite)
				drawSprite(ctx, scene.children[i], x, y);
			else if(scene.children[i] instanceof TPSprite)
				drawTPSprite(ctx, scene.children[i], x, y);
			else if(scene.children[i] instanceof Text)
				drawText(ctx, scene.children[i], x, y);
		}
	}

	return {
		clearScreen : clearScreen,
		redrawScene : redrawScene
	};

})();