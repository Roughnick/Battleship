var buttonstate=0;
function onoff(element){
  buttonstate= 1-buttonstate;
	var buttonLabel, buttonStyle, buttonColor;
	if(buttonstate){
		buttonLabel="on";
		buttonStyle="green";
		buttonColor="lightgreen";
	}
	else{
		buttonLabel="off";
		buttonStyle="lightgray";
		buttonColor="gray";
	}
	element.style.background=buttonStyle;
	element.style.color=buttonColor;
	element.innerHTML=buttonLabel;
}
function allowDrop(ev){
	ev.preventDefault();
}
function drag(ev){
	ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
