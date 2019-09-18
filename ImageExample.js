var imgWarrior = new Image();
imgWarrior.src = "Warrior.png";
imgWarrior.addEventListener("load", drawScreen, false);


function drawScreen()
{
	var theCanvas = document.getElementsById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context.fillStyle = "#000000";
	Context.fillRect(0,0,800,600);

	Context.drawImage(imgWarrior,0,0);
}