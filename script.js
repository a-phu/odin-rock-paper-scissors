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


//select each button
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//select results div and player + comp pts 
const resultsDiv = document.querySelector(".results");
const playerPtsP = document.querySelector("#playerPts")
const compPtsP = document.querySelector("#compPts")

//running score of player and computer points
let playerPts = 0;
let compPts = 0;
playerPtsP.textContent = playerPts;
compPtsP.textContent = compPts;

//moved separate function into event listener function for rock button
//updates result and player + comp pts
rockButton.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let result = '';
    if(computerSelection === "rock"){
        result = "It's a tie!";
    } else if (computerSelection === "paper"){
        compPts++;
        result =  "You lose! Paper beats Rock.";
    } else if (computerSelection === "scissors"){ 
        playerPts++;
        result =  "You win! Rock beats Scissors.";
    }

    resultsDiv.textContent = result;
    playerPtsP.textContent = playerPts;
    compPtsP.textContent = compPts;
});