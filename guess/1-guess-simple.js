/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer as random integer between 1 and 100.
var answer = Math.floor(Math.random() * 100)+1;
// alert the answer while testing.
alert(answer);
// Declare var guess, set to 0.
var guess = 0;
// Define while loop that runs while guess is not equal to answer
while(guess != answer) {
  	// Prompt user for guess.
  guess = prompt("Guess a number!");
   	/* Add conditionals that give feedback on values:  if / else if */
  	// If guess less than answer, say too low. 
  if(guess < answer) alert("Too low!");
  	// If guess more than answer, say too high. 
  else if(guess > answer) alert("Too high!");
  // Close While Loop Brackets
}
// Alert that they got it. 
alert("You got it!");