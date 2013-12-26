Array.prototype.removeElement = function(obj)
{
	var idx = this.indexOf(obj);
	if(idx != -1)
		this[idx] = this.pop();
}

function offsetArray(arr)
{
	var offX = Math.abs(arr[0].x);
	var offY = Math.abs(arr[0].y);
	
	for(var i = 1; i < arr.length; i++)
	{
		offX = Math.min(offX, Math.abs(arr[i].x));
		offY = Math.min(offY, Math.abs(arr[i].y));
	}	
	
	//TODO: HANDLE x,y <0
	
	for(var i = 0; i < arr.length; i++)
	{
		arr[i].x -= offX;
		arr[i].y -= offY;
	}
	
	return arr;
}

function printArray(arr)
{
	var c;
	c = "[";
	for(var i = 0; i < arr.length; i++)
	{
		c+= JSON.stringify(arr[i]);
		i != arr.length-1 ? c+=", " : c += "";
	}
	c += "]";
	console.log(c);
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgb(r, g, b)
{
	return "rgb(" + r + ", " + g + ", "  + b + ")";
}

function rgba(r, g, b, a)
{
	return "rgb(" + r + ", " + g + ", "  + b + ", " + a +  ")";
}
