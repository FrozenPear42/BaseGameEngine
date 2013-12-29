function Scene()
{
	this.polygons = [];
	this.sprites = [];
	this.texts = [];
}

Scene.prototype.clear = function()
{
	this.polygons.splice(0, this.polygons.length);
	this.images.splice(0, this.sprites.length);
	this.texts.splice(0, this.texts.length);
}

Scene.prototype.attachChild = function(child)
{
	if(child instanceof Polygon) return this.polygons.push(child);
	if(child instanceof Sprite) return this.sprites.push(child);
	if(child instanceof Text) return this.texts.push(child);
	
}

Scene.prototype.detachChild = function(child)
{
	if(child instanceof Polygon)
		this.polygons.removeElement(child);
		
	else if(child instanceof Sprite)
		this.sprites.removeElement(child);
	
	else if(child instanceof Text)
		this.texts.removeElement(child);
	

}
