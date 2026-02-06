const btnsDiv = document.querySelector(".container");
const scoreTxt = document.querySelector("#score");
const roundTxt = document.querySelector("#moves");

let humanScore = 0;
let computerScore = 0;

function getComputedChoice() {

    let rndNum = Math.random();

    console.log(rndNum);

    if (rndNum <= (1/3)) {
        return "rock";
    } else if (rndNum <= (2/3)) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rocke, paper or scissor): ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    console.log(`Human Choice: ${humanChoice} - Computer ${computerChoice}`);
    roundTxt.textContent = `Round => H ${humanChoice} - C ${computerChoice}`;

    if (humanChoice === computerChoice) {
        console.log("IT'S A DRAW!");
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        logRoundWinner("Human");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        logRoundWinner("Human");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        logRoundWinner("Human");
    } else {
        computerScore++;
        logRoundWinner("Computer");
    }

    computeMatchWinner();
}

function logRoundWinner(winner){
    scoreTxt.textContent = `SCORE: H ${humanScore} - C ${computerScore}`
}

function computeMatchWinner(){
    let disputedRounds = humanScore + computerScore;

    if (disputedRounds < 3)
        return;

    if (humanScore >= 3)
        alert("Human wins this match!\nEarth is safe!");

    if (computerScore >= 3)
        alert("Computer wins this match!\nA dark era begins today for human race!");

    humanScore = 0;
    computerScore = 0;
    logRoundWinner();
}

btnsDiv.addEventListener("click", (event) => {
    switch(event.target.id){
        case "scissor":
            playRound("scissor", getComputedChoice());
            break;
        case "rock":
            playRound("rock", getComputedChoice());
            break;
        case "paper":
            playRound("paper", getComputedChoice());
            break;
        default:
            break;
    }
})
