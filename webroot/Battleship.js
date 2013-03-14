// URL to send request to.
var url = "http://dickerson.neumont.edu:8080/Battleship/GameRequest/";
var username="Player";

function usernameSave(name)
{
	username = name;
	localStorage.setItem('username',username);
}
	
function callUsername()
{
	username = localStorage['username'];
	return username;
}
$(document).ready(function(){
	
	function sendGameRequest(data)
	{
		var request = "<request>" + data + "</request>";
		
		return request;
	}
	//this will go off when the single player button is pressed
	$('#single').click(function(){
	})
	$('#test2').click(function() {
		$('#games').append('<tr><td>12233454</td><td>Barry</td><td>waiting</td></tr>');
	});
	//This will go off when the button in BattleshipGame.HTML is clicked
	$('#test').click(function(){
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"NewGame",
			dataType: "XML",
            data: sendGameRequest('<playerID>jake</playerID>'),
            processData: false,
            success: function(msg) {
					console.log(msg);
					test = msg.getElementsByTagName("gameID");
				//	var test2 = test.childNodes;
					document.write(test[0].innerHTML);
				//var gameID = msg/response/gameID;
				//alert(gameID);
				//SAVE TO LOCAL STORAGE
				//localStorage.setItem('gameID','moves');
				
				//RETRIEVE MOVES FOR GAME IN LOCAL STORAGE
				//var moves = localStorage[gameID];
				
				//SET A VALUE
				//$.cookie('gameID',msg.response.gameID);
				
				//GET A VALUE
				//var gameID = $.cookie('gameID');
            }
		});
	});
});