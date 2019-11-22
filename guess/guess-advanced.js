/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */




var guess = null;
var turns = 0;
var games = 0;
var play = null;
var totalTurns = 0;

play = confirm("Play Guess?");

while (play == true){
	games++;
	turns = 0;
	
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	 
	while (guess != answer){
		guess=prompt("Guess my number (1-100)");
		if (guess =="q") break;
		if (validator(guess)==true){
			turns++; 
			if (guess<answer) alert("Too low!");
			else if (guess>answer) alert("Too high!");
		}
		else alert("Invalid guess. Retry!");
	 }
	
	
	 if (guess == answer) {
		 alert("You got it in "+turns+" turns.");
		 gameStats();
	 }
	 else {
		 alert("Quitter!");
		 games--;
	 }
	 
	 playAgain();
}
alert("Okay.");



function validator(guess){
	if (guess > 0 && guess < 101) return true;
	else return false;
}

function gameStats(){
	totalTurns = totalTurns + turns;
	let avgTurns = Math.floor(totalTurns/games);
	
	alert("You have played "+games+" games, with an average of "+avgTurns+" per game!");
}

function playAgain(){
	play = confirm("Would you like to play again?");
}












