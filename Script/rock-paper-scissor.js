const btnsDiv = document.querySelector(".container");

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
}

function logRoundWinner(winner){
    console.log(`${winner} win this round!
    SCORE
    H: ${humanScore}
    C: ${computerScore}`);
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
