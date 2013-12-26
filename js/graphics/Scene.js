function Scene()
{
	this.polygons = [];
	this.images = [];
	this.texts = [];
}

Scene.prototype.clear = function()
{
	this.polygons.splice(0, this.polygons.length);
	this.images.splice(0, this.images.length);
	this.texts.splice(0, this.texts.length);
}

Scene.prototype.attachChild = function(child)
{
	if(child instanceof Polygon) return this.polygons.push(child);
	if(child instanceof Image) return this.images.push(child);
	if(child instanceof Text) return this.texts.push(child);
	
}

Scene.prototype.detachChild = function(child)
{
	if(child instanceof Polygon)
		this.polygons.removeElement(child);
		
	else if(child instanceof Image)
		this.images.removeElement(child);
	
	else if(child instanceof Text)
		this.texts.removeElement(child);
	

}
