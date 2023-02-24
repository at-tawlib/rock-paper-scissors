// Rock paper scissors game against computer

choices = ["rock", "paper", "scissors"];

// returns choice of computer
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return("You Lose! Paper beats Rock");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
       return("You Win! Rock beats Scissors");
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return("It's a draw");
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        return("You Win! Paper beat Rock")
    } else if(playerSelection == 'paper' && computerSelection == 'paper') {
        return("It's a draw");
    } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        return("You Lose! Scissors beats Paper");
    } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        return("You Lose! Rock beats Scissors");
    } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        return("You Lose! Scissors beats Paper")
    } else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return("It's a draw");
    } else {
        return("Invalid Selection");
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("enter your choice: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()