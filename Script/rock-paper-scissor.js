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
