let computerScore = 0;
let playerScore = 0;
let description = document.querySelector('.description')

function computerSelection() { //This function randomly chose between rock, paper and scissors
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) { //Plays one round of the game and adding 1 point to whoever wins
    switch (true) {
        case playerSelection == "Rock" && computerSelection == "Scissors":
        case playerSelection == "Scissors" && computerSelection == "Paper":
        case playerSelection == "Paper" && computerSelection == "Rock":
            description.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
            ++playerScore;
            break;  
    
        case playerSelection == computerSelection:
            description.textContent = "It's a tie!"
            break;
        
        default:
            description.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
            ++computerScore;
    }
}

function displayScore() {
    const pScore = document.querySelector('.playerScore')
    const cScore = document.querySelector('.computerScore')
    pScore.textContent = `Player = ${playerScore}`
    cScore.textContent = `Computer = ${computerScore}`
}    

function announceWinnerThenRestart() {
    if ((computerScore == 5) || (playerScore == 5)) {
        if (computerScore == playerScore) { //Announces the winner of the games based on point
            description.textContent = "The game is over.\nThere is no winner, it's a tie!"
        }
        else if (computerScore < playerScore) {
            description.textContent = "The game is over.\nYou win! You beat the computer."
        }
        else {
            description.textContent = "The game is over.\nYou lose! The computer beats you. Try again next time."
        }
    playerScore = 0
    computerScore = 0
    }
}

displayScore()
const choices = document.querySelectorAll('button');
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            const playerSelection = choice.textContent
            playRound(playerSelection, computerSelection())
            displayScore()
            announceWinnerThenRestart()
        })
    })