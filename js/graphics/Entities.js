/*
Entity object - parent object for Polygon, Sprite and Text
*/

function Entity()
{	
	this.alpha = 1;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
}

Entity.prototype.setPosition = function(x, y)
{
	this.x = x;
	this.y = y;
}

Entity.prototype.setScale = function(s)
{
	this.scaleX = s;
	this.scaleY = s;
}

Entity.prototype.setScaleXY = function(sX, sY)
{
	this.scaleX = sX;
	this.scaleY = sY;
}
	
Entity.prototype.rotate = function(ang)
{
	this.rotation = ang;
}

Entity.prototype.setZIndex = function(z)
{
	this.zIndex = z;
}

/*
Sprite object - object representing image tahat is drawn on the canvas
*/

function Sprite(x, y, texture)
{
	this.texture = texture;
	this.x = x;
	this.y = y;	
	this.zIndex = 0;
}

Sprite.prototype = new Entity();

/*
TexturePackSprite object - object representing texturepack object
*/

function TPSprite(x, y, tp, id)
{
	this.x = x;
	this.y = y;
	this.img = tp.img;
	this.sX = tp.data[id].sX;
	this.sY = tp.data[id].sY;
	this.sW = tp.data[id].sW;
	this.sH = tp.data[id].sH;
	this.zIndex = 0;
}

TPSprite.prototype = new Entity();

/*
Polygon object - object representing polygon tahat is drawn on the canvas
*/

function Polygon(x, y, data, fill, stroke)
{
	this.x = x;
	this.y = y;
	this.data = data;
	this.fill = fill;
	this.stroke = stroke;
	this.zIndex = 0;

	this.updateSize();
}

Polygon.prototype = new Entity();

Polygon.prototype.updateSize = function()
{
	var minX;
	var minY;
	var maxX;
	var maxY;

	minX = this.data[0].x;
	minY = this.data[0].y;
	maxX = this.data[0].x;
	maxY = this.data[0].y;

	for (var i = 1; i < this.data.length; i++)
	{
		minX = Math.min(minX, Math.abs(this.data[i].x));
		minY = Math.min(minY, Math.abs(this.data[i].y));
		maxX = Math.max(maxX, Math.abs(this.data[i].x));
		maxY = Math.max(maxY, Math.abs(this.data[i].y));
	}

	this.width = Math.abs(minX - maxX) * this.scaleX;
	this.height = Math.abs(minY - maxY) * this.scaleY;
	return;
}


/*
Text object - object representing polygon tahat is drawn on the canvas
*/
function Text(x, y, font, stroke, fill, text)
{
	this.text = text;
	this.x = x;
	this.y = y;
	this.font = font;
	this.stroke = stroke;
	this.fill = fill;
	this.strokeStyle = "#000000";
	this.fillStyle = "#000000";
	this.zIndex = 1;

}

Text.prototype = new Entity();
