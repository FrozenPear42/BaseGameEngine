function loadScript(url, callback)
{

	var head = document.getElementsByTagName('head')[0];

	var script = document.createElement('script');
	script.src = url;

	console.log("loading: ", url);

	var func = function()
	{

		console.log("callback: ", url);
		callback();
	};

	script.onload = func;
	head.appendChild(script);
}

function loadScripts(urls, onProgressChange, onLast)
{
	
	var s = urls.pop();
	
	if(s)
		loadScript(s, function(){onProgressChange(urls.length); loadScripts(urls, onProgressChange, onLast)});
	else
		onLast();
	return;
}


function loadResources(res, onLoadProgress, onLast)
{
	var r = res.pop();

	if(r)
		r.load(function(){onLoadProgress(res.length); loadResources(res, onLoadProgress, onLast)});
	else
		onLast();
}


