var Game ={
	target: 0,
	wins: 0,
	losses: 0,
	creature1: 0,
	creature2: 0,
	creature3: 0,
	creature4: 0,
	score: 0,
	guess: function(event){
		var choice = event.target.id;
		Game.score += Game[choice];

		Game.update();

		if(Game.score > Game.target){
			Game.losses++;
			Game.reset();
			alert("You Lose");
		}

		else if(Game.score === Game.target){
		 	Game.wins++;
		 	Game.reset();
		 	alert("You Win");
		 }	

		 else {
		 	Game.update
		 }	
		 	
		
	},
	
	reset: function(){
	Game.target = Math.floor((Math.random() * 120) + 1);
	$("#targetNumber").html(Game.target);

	var arr = []
	while(arr.length < 4){
    var randomnumber = Math.ceil(Math.random()*12)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    console.log(arr);
	}

	Game.creature1 = arr[0];
	Game.creature2 = arr[1];
	Game.creature3 = arr[2];
	Game.creature4 = arr[3];
	Game.score = 0;

	Game.update();
	},

	update: function(){
	$("#targetNumber").html(Game.target);
	$("#wins").html(Game.wins);
	$("#losses").html(Game.losses);
	$("#score").html(Game.score);
	},

};


document.addEventListener("DOMContentLoaded", function(){

	Game.reset();
	Game.update();

	$('.guess').click(Game.guess);

});