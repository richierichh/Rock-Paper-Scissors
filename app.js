let computerScore = 0; 
let userScore = 0; 
let computerScore_span = document.getElementById("computer-score");
let userScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock"); 
const paper_div = document.getElementById("paper"); 
const scissors_div = document.getElementById("scissors");
const play_again_div = document.getElementById("play-again")

function main() { 
rock_div.addEventListener('click',() => {
    playRound("rock");
  });
paper_div.addEventListener('click',() => {
    playRound("paper");
  });
scissors_div.addEventListener('click',() => {
    playRound("scissors");
  });
play_again_div.addEventListener('click',() => {
    restartGame();
  });
  }  

function checkWinner(){ 
  return (userScore === 5 || computerScore === 5 );
} 

function getComputerChoice(){ 
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function win() 
{ 
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML  = computerScore; 
  result_div.innerHTML = "You win!";

}

function computerWins() 
{ 
  computerScore++;
  computerScore_span.innerHTML = computerScore; 
  userScore_span.innerHTML  = userScore; 
  result_div.innerHTML = "You lost"; 
}

function draw() 
{ 
  result_div.innerHTML = "Tie game"; 
}

function restartGame() { 
  window.location.reload();
}

function playRound(playerSelection){
  if (checkWinner()){
    return;
   }
  const computerSelection = getComputerChoice(); 
  switch (playerSelection + computerSelection){ 
    case "rockscissors": 
    case "paperrock":
    case "scissorspaper":
      win(playerSelection,computerSelection);
        break;
    case "rockpaper":
    case "paperscissors": 
    case "scissorsrock":
      computerWins(playerSelection,computerSelection);
        break;
    case "rockrock":
    case "paperpaper": 
    case "scissorsscissors": 
      draw(playerSelection,computerSelection);
        break;
}
}
main(); 
