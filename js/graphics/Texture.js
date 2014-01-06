function Texture(src)
{
	this.src = src;
	this.img  = new Image();
}

Texture.prototype.load = function(callback)
{
	this.img.onload = callback;
	this.img.src = this.src;
}