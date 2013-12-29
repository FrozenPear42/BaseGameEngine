function Polygon(x, y, data, fill, stroke)
{
	this.x = x;
	this.y = y;
	this.data = data;
	this.fill = fill;
	this.stroke = stroke;
	
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;

	this.updateSize();

}

Polygon.prototype.animate = function(func)
{
	setTimeout(func, 1);
}

Polygon.prototype.setPosition = function(x, y)
{
	this.x = x;
	this.y = y;
}

Polygon.prototype.rotate = function(ang)
{
	this.rotation = ang;
}

Polygon.prototype.scale = function(x, y)
{
	this.scaleX = x;
	this.scaleY = y;
}

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