// URL to send request to.
var url = "http://dickerson.neumont.edu:8080/Battleship/GameRequest/";
var username="Player";
var gameListLength = "3";
var gameId = "01010";
var 

function usernameSave(name)
{
	username = name;
	localStorage.setItem('userName',username);
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
	//this will go off when the second button in BattleshipGame.html is clicked
	$('#test2').click(function() {
		$('#games').append('<tr><td>12233454</td><td>Barry</td><td>waiting</td></tr>');
	});
	//this will go off when the second button in BattleshipGame.html is clicked
	$('#refresh').click(function() {
		for(var i=0;i<gameListLength;i++){
		$('#GameList').append('<tr><td>12233454</td><td>Barry</td><td>WaitingFor2nd</td></tr>');
		}
	});
	
	//this will sent in the player name then request a game list 
	$('#multi').click(function(){
		//this will sent in just the player name
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"NewGame",
			dataType: "XML",
            data: sendGameRequest('<playerID>'+username+'</playerID>'),
            processData: false,
            success: function(msg) {
				window.location.assign('multiplyer.html');
				console.log(msg);
				$(msg).find('response').each(function(){
					var gameID = $(this).find('gameID').text();
					localStorage.setItem['gameid', gameID];
				});
				
            }
		});
		
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"NewGame",
			dataType: "XML",
            data: sendGameRequest(),
            processData: false,
            success: function(msg) {
				window.location.assign('multiplyer.html');
				console.log(msg);
				$(msg).find('response').each(function(){
					var gameID = $(this).find('gameID').text();
					localStorage.setItem['gameid', gameID];
					//var gameID = $(this).find('gameID').text();
					//localStorage.setItem['gameid', gameID];
				});
            }
		});
	});
	
	//This will sent the player name and robot difficulty
	$('EdisonLevel').click(function(){
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"NewGame",
			dataType: "XML",
            data: sendGameRequest('<playerID>'+username+'</playerID><robot>Edison</robot>'),
            processData: false,
            success: function(msg) {
					console.log(msg);
					$(msg).find('response').each(function(){
						var gameID = $(this).find('gameID').text();
						localStorage.setItem['gameid', gameID];
					});
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
	
	$('GeevesLevel').click(function(){
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"NewGame",
			dataType: "XML",
            data: sendGameRequest('<playerID>'+username+'</playerID><robot>Geeves</robot>'),
            processData: false,
            success: function(msg) {
					console.log(msg);
					$(msg).find('response').each(function(){
						var gameID = $(this).find('gameID').text();
						localStorage.setItem['gameid', gameID];
					});
            }
		});
	});
	
	$('RobbyLevel').click(function(){
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"NewGame",
			dataType: "XML",
            data: sendGameRequest('<playerID>'+username+'</playerID><robot>Robby</robot>'),
            processData: false,
            success: function(msg) {
					console.log(msg);
					$(msg).find('response').each(function(){
						var gameID = $(this).find('gameID').text();
						localStorage.setItem['gameid', gameID];
					});
            }
		});
	});
});