// URL to send request to.
var url = "http://dickerson.neumont.edu:8080/Battleship/GameRequest/NewGame";

// Gets an XML response from a GET request.
function sendGETRequest()
{
	// Send GET request. We expect XML in response.
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, false);
	//beforeSend() runs
	xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xmlhttp.setRequestHeader("Pragma", "Cache-Control: no-cache");
	xmlhttp.send();
	
	// Convert XML into a string.
	//Success(xmlhttp.responseXML) runs now
	var xmlString = new XMLSerializer().serializeToString(xmlhttp.responseXML);
	xmlString = xmlString.replace(/</g, "&lt;");
	xmlString = xmlString.replace(/>/g, "&gt;");
	
	// Put XML string into the "result" item.
	document.getElementById("result").innerHTML = xmlString;
	
	console.log(xmlString);
	
	// Format the XML string using google-code-prettify.
	// (https://code.google.com/p/google-code-prettify/)

}

//var localStorage.setItem(gameID,moves);

$(document).ready(function(){
	
	function sendGameRequest(data)
	{
		var request = "<request>" + data + "</request>";
		
		return request;
	}
	$('#test2').click(function() {
		$('#games').append('<tr><td>12233454</td><td>Barry</td><td>waiting</td></tr>');
	});
	
	$('#test').click(function(){
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url,
			dataType: "XML",
            data: sendGameRequest('<playerID>jking</playerID>'),
            processData: false,
            success: function(msg) {
					
				//SAVE TO LOCAL STORAGE
				localStorage.setItem('barry','nix');
				
				//RETRIEVE MOVES FOR GAME IN LOCAL STORAGE
				var moves = localStorage[gameID];
				
				//SET A VALUE
				$.cookie('gameID',msg.response.gameID);
				
				//GET A VALUE
				var gameID = $.cookie('gameID');
            }
		});
	});
});