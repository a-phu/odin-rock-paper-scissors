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

//add event listeners for each button to change colour
rockButton.addEventListener('mouseover', hoverRockImg);
rockButton.addEventListener('mouseout', revertRockImg);
paperButton.addEventListener('mouseover', hoverPaperImg);
paperButton.addEventListener('mouseout', revertPaperImg);
scissorsButton.addEventListener('mouseover', hoverScissorsImg);
scissorsButton.addEventListener('mouseout', revertScissorsImg);

//functions to change img of buttons
function hoverRockImg(){
    this.src = "icons8-diamond-heart.png";
}

function revertRockImg(){
    this.src = "https://img.icons8.com/carbon-copy/100/000000/diamond-heart.png";
}

function hoverPaperImg(){
    this.src = "icons8-origami.png";
}

function revertPaperImg(){
    this.src = "https://img.icons8.com/carbon-copy/100/000000/origami.png";
}

function hoverScissorsImg(){
    this.src = "icons8-barber-scissors.png";
}

function revertScissorsImg(){
    this.src = "https://img.icons8.com/carbon-copy/100/000000/barber-scissors.png";
}


//select results div and player + comp pts 
const resultsDiv = document.querySelector(".result");
const playAgainDiv = document.querySelector(".playAgain");
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
    playGame("rock");
});
paperButton.addEventListener('click', () => {
    playGame("paper");
});
scissorsButton.addEventListener('click', () => {
    playGame("scissors");
});

//reset player + comp pts and playAgainDiv and play game again
playAgainDiv.addEventListener('click', () => {
    playerPts = 0;
    compPts = 0;
    playAgainDiv.textContent = '';
    playGame();
})

//function to play rps passed to each button
function playGame(playerSelection){
    // while(playGame){
    // playAgainDiv.textContent = '';
    if(playerPts < 5 && compPts < 5){
        let computerSelection = computerPlay();
        let result = '';
        switch(playerSelection){
            case "rock":
                if(computerSelection === "rock"){
                    result = "It's a tie!";
                } else if (computerSelection === "paper"){
                    compPts++;
                    result =  "You lose! Paper beats Rock.";
                } else if (computerSelection === "scissors"){ 
                    playerPts++;
                    result =  "You win! Rock beats Scissors.";
                }
                break;
            case "paper":
                if(computerSelection === "rock"){
                    playerPts++;
                    result = "You win! Paper beats Rock.";
                } else if (computerSelection === "paper"){
                    result = "It's a tie!";
                } else if (computerSelection === "scissors"){
                    compPts++;
                    result = "You lose! Scissors beats Paper.";
                }
                break;
            case "scissors":
                if(computerSelection === "rock"){
                    compPts++;
                    result = "You lose! Rock beats Scissors.";
                } else if (computerSelection === "paper"){
                    playerPts++;
                    result = "You win! Scissors beats Paper.";
                } else if (computerSelection === "scissors"){
                    result = "It's a tie!";
                }
                break;
        }
        //update result
        resultsDiv.textContent = result;

        //update running total player and comp pts
        playerPtsP.textContent = playerPts;
        compPtsP.textContent = compPts;
    }

    if(playerPts == 5){
        resultsDiv.textContent = "You have beaten the computer!";
        playAgainDiv.textContent = "Play again?";
    } else if (compPts == 5){
        resultsDiv.textContent = "You have lost against the computer! Better luck next time!";
        playAgainDiv.textContent = "Play again?";
    }
    
}


