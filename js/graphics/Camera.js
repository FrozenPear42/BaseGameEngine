
function Camera(width, height)
{
	this.width = width;
	this.height = height;
	
	this.x = 0;
	this.y = 0;
	
}

Camera.prototype.setPosition = function(x,y)
{
	this.x = x;
	this.y = y
}

Camera.prototype.moveTo = function(x, y, ease)
{
	
}