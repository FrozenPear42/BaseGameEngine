//TODO:

function loadScript(url, callback)
{
	var head = document.getElementsByTagName('head')[0];
  
	var script = document.createElement('script');
    script.src = url;
	
	script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}

function loadScripts(urls, callback)
{


}
