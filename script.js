//game of rock-paper-scissors against a randomised computer generated answers

//randomiser for computer selection
function computerPlay(){
    let compTurn = Math.floor(Math.random() * (4 - 1)) + 1;
    // return compTurn;
    switch(compTurn){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

//function to compare player selection to computer selection
function playRound(playerSelection, computerSelection){
    //convert parameters to non case-sensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //if player selection is rock
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock"){
                return "It's a tie!";
            } else if (computerSelection === "paper"){
                return "You lose! Paper beats Rock.";
            } else if (computerSelection === "scissors"){
                return "You win! Rock beats Scissors.";
            }
            break;
        case "paper":
            if(computerSelection === "rock"){
                return "You win! Paper beats Rock.";
            } else if (computerSelection === "paper"){
                return "It's a tie!";
            } else if (computerSelection === "scissors"){
                return "You lose! Scissors beats Paper.";
            }
            break;
        case "scissors":
            if(computerSelection === "rock"){
                return "You lose! Rock beats Scissors.";
            } else if (computerSelection === "paper"){
                return "You win! Scissors beats Paper.";
            } else if (computerSelection === "scissors"){
                return "It's a tie!";
            }
            break;
    }

}

//function that will play 5 games of rock, paper, scissors with the player's
        //input and the computer's randomised answer
function game(){

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper or scissors?");
        console.log("Player: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();