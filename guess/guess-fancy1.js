/* A cool fancy guess game
 * Coded by Chloe */
 
 var guess = 0;
 var answer = 0;
 var turns = 0;
 var plays = 0;
 var total = 0;
 var average = null;
 var play = null;

 
 play = confirm("Play Guess?");
 
 while (play == true){
	 answer = Math.floor(Math.random()*100)+1;
	 console.log(answer);
	 
	 while (guess != answer) {
		 guess = prompt("Guess a number between 1 and 100!");
		 
		 if (guess == "q") break;
		 
		 else if (validator() == true){
			 if (guess > answer) alert("Too high!");
			 else if  (guess < answer) alert("Too low!");
			 turns++;
		 }
		 
		 else alert("Invalid input, try again!");
	 }
	 
	 if (guess == "q") {
		 alert("Quitter!");
		 play = false;
	 }
	 
	 else {
		 plays++
		 total = total + turns
		 average = Math.floor(gameStats());
		 
		 alert("You guessed it in "+turns+" turns!");
		 alert("Your average number of turns is "+average+" turns!");
		 
		 play = confirm("Play again?");
	 }
	 
 }
 
 
 
 function validator() {
	 if (guess > 0 && guess < 100) return true;
	 else return false;
 }
 
 function gameStats() {
	 var temp = total / plays;
	 return temp;
 }