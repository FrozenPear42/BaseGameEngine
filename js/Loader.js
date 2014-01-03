function loadScript(url, callback)
{

	var head = document.getElementsByTagName('head')[0];

	var script = document.createElement('script');
	script.src = url;

	console.log("loading: ", url);

	var func = function()
	{
		callback();
		console.log("callback: ", url);
	};

	script.onload = func;
	head.appendChild(script);
}

function loadScripts(urls, onProgressChange, onLast)
{
	loadElement(0, urls, onProgressChange, onLast);
	return;
}

function loadElement(i, urls, onProgressChange, onLast)
{
	if (i + 1 < urls.length)
		loadScript(urls[i], function(){loadElement(i + 1, urls, onProgressChange, onLast)});
	else
		loadScript(urls[i], function()
		{
			console.log("last");
			onLast();
		});

	onProgressChange( (i+1) / urls.length);

	return;
}
