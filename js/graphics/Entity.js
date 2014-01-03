function Entity()
{	
	this.alpha = 1;
	this.scaleX = 1;
	this.scaleY = 1;
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
