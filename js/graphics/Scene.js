function Scene()
{
	this.children = [];

}

Scene.prototype.clear = function()
{
	this.children.splice(0, this.children.length);
}

Scene.prototype.attachChild = function(child)
{
	if(child instanceof Entity) 
	{
		var id = this.children.push(child);
		this.sortZIndex();
		return id;
	}
	
	return -1;
}

Scene.prototype.sortZIndex = function()
{
	//sort(this.children, this.children.z);
}

Scene.prototype.detachChild = function(child)
{
	if(child instanceof Entity)
		this.children.removeElement(child);
}
