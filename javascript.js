
function getComputerChoice () {
    const computerChoice = Math.floor((Math.random()*3)+1);
    if (computerChoice === 1) {
        return "Rock"
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors? Type one into the box");
    return humanChoice.toUpperCase()       
    }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice.toUpperCase()) {
        console.log("It's a draw!");
    } else if (humanChoice==="ROCK" && computerChoice==="Paper") {
                console.log("You lose! Paper beats rock.");
                return computerScore++
    } else if (humanChoice==="PAPER" && computerChoice==="Scissors") {
        console.log("You lose! Scissors beats paper.");
        return computerScore++
    } else if (humanChoice==="SCISSORS" && computerChoice==="Rock") {
        console.log("You lose! Rock beats Scissors.");
        return computerScore++
    } else {
        console.log("Human wins! Death to robots!")
        humanScore++;
        console.log(humanScore)
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
    var human = getHumanChoice();
    var computer = getComputerChoice();

        playRound(human, computer);
        console.log ("Round " + i + "/5");
        console.log ("Human score = "+ humanScore+", Skynet score = " + computerScore);
    }
    if (computerScore>humanScore) {
        console.log("You lost. The robots have won. Judgment Day Is Inevitable.")
    } else {
        console.log("Congratulations you won! The Future Has Not Been Written. There Is No Fate But What We Make For Ourselves.")
    }
}
var humanScore = 0;
var computerScore = 0;
playGame()