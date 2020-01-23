/* Nim Super Simple by Chloe Galyean */


var count = 0;
var winner = "No one";
var turn = 0;
var again = null;
var valid = null;


again = confirm("Play Nim?");

while (again == true){
  
  while (count < 21){
    if (count < 21){
      cpuTurn();
    }
    if (count < 21){
      playerTurn();
    }
  }
  
  alert(winner+" won!");
  
  again = confirm("Play again?");
}

  


function playerTurn(){
  valid = null;
  while (valid != true){
    turn = parseInt(prompt("How many would you like to count? (1-3)"));
    valid = validate();
    if (valid == false){
      alert("Invalid guess, please input a number between 1 and 3.");
    }
  }
  count += turn;
  alert("You counted "+turn+"! Count is now "+count+"!");
  winner = "Computer";
}

function cpuTurn(){
  turn = Math.floor(Math.random()*compRange())+1;
  count += turn;
  alert("Computer counted "+turn+"! Count is now "+count+"!");
  winner = "You";
}

function validate(){
  switch (turn){
    case 1:
    case 2:
    case 3:
      return true;
      break;
      
    default:
      return false;
      break;
  }
}

function compRange(){
  switch (count){
    default:
      return 3;
      break;
      
    case 18:
      return 2;
      break;
      
    case 19:
    case 20:
      return 1;
      break;
  }
}
