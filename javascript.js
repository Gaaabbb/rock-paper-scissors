function computerSelection() { //This function randomly chose between rock, paper and scissors
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection() { //This function makes the player chose between rock, paper, and scissors
    let choice = prompt(`Round: ${round}/5 
    \nScore: Player = ${playerScore} and Computer = ${computerScore}
    \n\nRock, Paper, or Scissors?`); //Asks the user for input while also displaying score and round number
    choice = choice.toLowerCase(); //Converts choice to lowercase
    choice = choice.charAt(0).toUpperCase() + choice.slice(1); //Converts first letter of the choice to uppercase

    while (choice != "Rock" && choice != "Paper" && choice != "Scissors") { //If loop doesn't equal to any of the choice, it repeats the question
    choice = prompt("Try to enter a valid choice:\nRock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    }

    return choice;
}

function playRound(playerSelection, computerSelection) { //Plays one round of the game and adding 1 point to whoever wins
    switch (true) {
        case playerSelection == "Rock" && computerSelection == "Scissors":
        case playerSelection == "Scissors" && computerSelection == "Paper":
        case playerSelection == "Paper" && computerSelection == "Rock":
            alert(`You Win! ${playerSelection} beats ${computerSelection}`);
            ++playerScore;
            break;  
    
        case playerSelection == computerSelection:
            alert("It's a tie!");
            break;
        
        default:
            alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
            ++computerScore;
    }
}

let computerScore = 0;
let playerScore = 0;
for (round = 1; round <= 5; round++) { //Plays upto 5 rounds of the game
    playRound(playerSelection(), computerSelection());
}

if (computerScore == playerScore) { //Announces the winner of the games based on point
    alert("The game is over.\nThere is no winner, it's a tie!")
}
else if (computerScore < playerScore) {
    alert("The game is over.\nYou win! You beat the computer.")
}
else {
    alert("The game is over.\nYou lose! The computer beats you. Try again next time.")
}
