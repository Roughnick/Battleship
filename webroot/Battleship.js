// URL to send request to.
var url = "http://dickerson.neumont.edu:8080/Battleship/";

// Gets an XML response from a GET request.
function sendGETRequest()
{
	// Send GET request. We expect XML in response.
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, false);
	xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xmlhttp.setRequestHeader("Pragma", "Cache-Control: no-cache");
	xmlhttp.send();
	
	// Convert XML into a string.
	var xmlString = new XMLSerializer().serializeToString(xmlhttp.responseXML);
	xmlString = xmlString.replace(/</g, "&lt;");
	xmlString = xmlString.replace(/>/g, "&gt;");
	
	// Put XML string into the "result" item.
	document.getElementById("result").innerHTML = xmlString;
	
	// Format the XML string using google-code-prettify.
	// (https://code.google.com/p/google-code-prettify/)
	prettyPrint();
}