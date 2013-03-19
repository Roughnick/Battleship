// URL to send request to.
var url = "http://dickerson.neumont.edu:8080/Battleship/GameRequest/";

var username="Player";
var numOfGames="0";
var shipCount = 0;
var gameId = "01010";
var gameIdArray = new Array();
var playerNameArray = new Array();
var statusArray = new Array();
var letterCord = new Array();
letterCord[0]="A";
letterCord[1]="B";
letterCord[2]="C";
letterCord[3]="D";
letterCord[4]="E";
letterCord[5]="F";
letterCord[6]="G";
letterCord[7]="H";
letterCord[8]="I";
letterCord[9]="J";

//this will save the username to local storage
function usernameSave(name)
{
	username = name;
	localStorage.setItem('username',username);
}
//this will call up the username that is saved in local storage	
function callUsername()
{
	username = localStorage['username'];
	return username;
}

function placeShips(cord, dir, space){
	var cordString = cord.toString();
	var dirString = dir.toString();
	for(var i=0;i<space;i++){
		document.getElementsByTagName("INPUT").setAttribute("color","red");
	}
}

function sendGameRequest(data){
	var request = "<request>" + data + "</request>";	
	return request;
}


function joiningGame(i){
	var name = "<playerID>"+playerNameArray.slice(i,i+1)+"</playerID><gameID>"+gameIdArray.slice(i,i+1)+"</gameID>"
	return name;
}

//
function joinButton(i){
	//alert(gameIdArray.slice(i,i+1));
	$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"Join",
			dataType: "XML",
            data: sendGameRequest('<playerID>'+playerNameArray.slice(i,i+1)+'</playerID><gameID>'+gameIdArray.slice(i,i+1)+'</gameID>'),
            processData: false,
            success: function(msg) {
				console.log(msg);
				window.location.assign('BattleshipGame.html');
				$(msg).find('response').each(function(){
				});
				
            }
			
	});
}

//
$(document).ready(function(){
	
	//this will go off when the single player button is pressed
	$('#single').click(function(){
	})
	
	//This will refresh the page to its original state
	$('#refresh').click(function() {
		location.reload();
	});
	
	$('#submitCord').click(function(){
	
		if(shipCount==0){
			var cord = $('#shipPlacmentCord').val();
			var dir = $('#direction').val();
			var space = 5;
			placeShips(cord, dir, space);
			shipCount++;
			
		}else
		if(shipCount==1){
			var cord = $('#shipPlacmentCord').val();
			var dir = $('#direction').val();
			var space = 4;
			placeShips(cord, dir, space);
			shipCount++;
			
		}else
		if(shipCount==2){
			var cord = $('#shipPlacmentCord').val();
			var dir = $('#direction').val();
			var space = 3;
			placeShips(cord, dir, space);
			shipCount++;
			
		}else
		if(shipCount==3){
			var cord = $('#shipPlacmentCord').val();
			var dir = $('#direction').val();
			var space = 3;
			placeShips(cord, dir, space);
			shipCount++;
			
		}else
		if(shipCount==4){
			var cord = $('#shipPlacmentCord').val();
			var dir = $('#direction').val();
			var space = 2;
			placeShips(cord, dir, space);
			shipCount=0;
		}
	});
	
	$('#Forfeit').click(function() {
		alert("Thank you for Forfeiting");
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"Forfeit",
			dataType: "XML",
            data: sendGameRequest(),
            processData: false,
            success: function(msg) {
				console.log(msg);			
            }
		});
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
	});
	
	//This will be for joining a game
	$('.join').click(joinButton);
	
	//this will create the game list and show the games availiable
	$('#create').click(function(){
		$.ajax({
			type : "POST",
			beforeSend: function (request)
            {
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            url: url+"GameList",
			dataType: "XML",
            data: sendGameRequest(),
            processData: false,
            success: function(msg) {
				console.log(msg);
				$(msg).find('game').each(function(){
					gameIdArray.push($(this).find('gameID').text());
					playerNameArray.push($(this).find('turn').text());
					statusArray.push($(this).find('state').text());
					numOfGames++;
				});
				for(var i=0;i<numOfGames;i++){
					$('#GameList').append('<tr><td>'+gameIdArray[i]+'</td><td>'+playerNameArray[i]+'</td><td>'+statusArray[i]+'</td><td><input type="button" id"'+i+'" onclick="joinButton('+i+')" value="Join Game"/></td></tr>');
				}
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