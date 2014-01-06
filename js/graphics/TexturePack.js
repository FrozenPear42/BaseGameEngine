function TexturePack(src)
{
	this.textures = [];
	//loadJSON(src, function(r){console.log(r)})
	this.img = new Image();
}

TexturePack.prototype.load = function(callback)
{
	this.img.onload = function(){
		//textures.push(blablabla)
		callback();
	};
	this.img.src = src;
}