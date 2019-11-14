/* Guess Merit Badge by Chloe */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);

var guess = 0;
var turns = 0;

while (guess != answer){
	guess = prompt("Guess a number between 1 and 100!");
	
	if (guess == "q") break;
	else if (validator(guess) == true){
		turns++;
		
		if (guess < answer) alert("Too low!");
		else if (guess > answer) alert("Too high!");
	}
	else alert("Invalid guess, please guess again!");
}

if (guess == answer) alert("you guessed the number in "+turns+" turns!");
else alert("Quitter!");


function validator(guess){
	if (guess < 101 && guess > 0) return true;
	else return false;
}
