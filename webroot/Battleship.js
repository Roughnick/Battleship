// URL to send request to.
var url = "http://dickerson.neumont.edu:8080/Battleship/GameRequest/";
var username;

function usernameSave(name)
{
	username = name;
}
	
function callUsername()
{
	return username;
}
$(document).ready(function(){
	
	
	
	
	
	function sendGameRequest(data)
	{
		var request = "<request>" + data + "</request>";
		
		return request;
	}
	$('#single').click(function(){
	})
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