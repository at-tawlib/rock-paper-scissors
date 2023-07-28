// Rock paper scissors game against computer

choices = ["rock", "paper", "scissors"];
playerScore = 0
computerScore = 0

// returns choice of computer
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return ("You Lose! Paper beats Rock");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return ("You Win! Rock beats Scissors");
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return ("It's a draw");
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return ("You Win! Paper beat Rock")
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return ("It's a draw");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        return ("You Lose! Scissors beats Paper");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return ("You Lose! Rock beats Scissors");
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return ("You Win! Scissors beats Paper")
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return ("It's a draw");
    } else {
        return ("Invalid Selection");
    }
}

function game() {

    const container = document.querySelector("#container");

    const rockButton = document.createElement('button');
    rockButton.setAttribute("style", "margin: 20px; padding: 20px;")
    rockButton.textContent = "ROCK";

    const paperButton = document.createElement('button');
    paperButton.setAttribute("style", "margin: 20px; padding: 20px;")
    paperButton.textContent = "PAPER";

    const scissorsButton = document.createElement('button');
    scissorsButton.setAttribute("style", "margin: 20px; padding: 20px;")
    scissorsButton.textContent = "SCISSORS";

    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);

    rockButton.onclick = () => setScore("rock", getComputerChoice());
    paperButton.onclick = () => setScore("paper", getComputerChoice());
    scissorsButton.onclick = () => setScore("scissors", getComputerChoice());
}

function setScore(playerSelection, computerSelection) {

    const results = document.querySelector("#results");
    results.setAttribute("style", "background: red; padding: 10px;");
    const details = document.createElement("p");

    details.textContent = playRound(playerSelection, computerSelection);

    results.appendChild(details);

    // first player to reach 5 ends the game
    if (playerScore === 5 || computerScore === 5) {
        const gameOver = document.createElement("h2");
        gameOver.textContent = "You: " + playerScore + " Computer: " + computerScore;
        gameOver.setAttribute("style", "color: white;");
        results.appendChild(gameOver);

        const gameOverText = document.createElement("h1");
        gameOverText.setAttribute("style", "color: white;");

        if (playerScore > computerScore) {
            gameOverText.textContent = "Game Over: You have beaten computer";
        } else {
            gameOverText.textContent = "Game Over: Computer has beaten you";
        }

        results.appendChild(gameOverText);
        playerScore = 0;
        computerScore = 0;
    }
    console.log(playerScore, computerScore);
}

game()