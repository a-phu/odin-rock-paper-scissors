//game of rock-paper-scissors against a randomised computer generated answers

//randomiser for computer selection
function computerPlay(){
    let compTurn = Math.floor(Math.random() * (4 - 1)) + 1;
    // return compTurn;
    switch(compTurn){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//functions to compare player selection to computer selection
function playerPlaysRock(){
    let computerSelection = computerPlay();
    if(computerSelection === "rock"){
        return "It's a tie!";
    } else if (computerSelection === "paper"){
        return "You lose! Paper beats Rock.";
    } else if (computerSelection === "scissors"){ 
        return "You win! Rock beats Scissors.";
    }
}

function playerPlaysPaper(){
    let computerSelection = computerPlay();
    if(computerSelection === "rock"){
        return "You win! Paper beats Rock.";
    } else if (computerSelection === "paper"){
        return "It's a tie!";
    } else if (computerSelection === "scissors"){
        return "You lose! Scissors beats Paper.";
    }
}

function playerPlaysScissors(){
    let computerSelection = computerPlay();
    if(computerSelection === "rock"){
        return "You lose! Rock beats Scissors.";
    } else if (computerSelection === "paper"){
        return "You win! Scissors beats Paper.";
    } else if (computerSelection === "scissors"){
        return "It's a tie!";
    }
}

//select each button
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//select results div
const resultsDiv = document.querySelector("#results");

//add event listeners to each button to print out results
rockButton.addEventListener('click', () => resultsDiv.textContent = playerPlaysRock());
paperButton.addEventListener('click', () => resultsDiv.textContent = playerPlaysPaper());
scissorsButton.addEventListener('click', () => resultsDiv.textContent = playerPlaysScissors());

