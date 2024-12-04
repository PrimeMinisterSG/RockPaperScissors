let humanScore = 0;
let computerScore = 0;
let result = "";

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice.toUpperCase()) {
        result = "It's a draw!";
    } else if (humanChoice==="ROCK" && computerChoice==="Paper") {
                result = "You lose! Paper beats rock.";
                return computerScore++
    } else if (humanChoice==="PAPER" && computerChoice==="Scissors") {
        result = "You lose! Scissors beats paper.";
        return computerScore++
    } else if (humanChoice==="SCISSORS" && computerChoice==="Rock") {
        result ="You lose! Rock beats Scissors.";
        return computerScore++
    } else {
        result = "Human wins! Death to robots!"
        humanScore++;
        } 
}

function displayScore (humanS, computerS) {
    const writeScore = document.createElement("li");
    if (humanS ===5) {
        writeScore.textContent = "Game over! You won! Click one of the buttons to start over"
        list.appendChild(writeScore);
        humanScore = 0;
        computerScore = 0;
        //console.log(humanScore)
    } else  if (computerS ===5) {
        writeScore.textContent = "Game over! You lost! Click one of the buttons to start over"
        list.appendChild(writeScore);
        humanScore = 0;
        computerScore = 0;
    } else if (humanS || computerS <5) {
    writeScore.textContent = result + " Your score is: " + humanScore + ", computer score is: " + computerScore;
    list.appendChild(writeScore)
    }
}


const list = document.querySelector('ul');
const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');

function playGame() {

rockBtn.addEventListener('click', () => {
    var human = "ROCK";
    list.removeChild(list.firstChild);
    console.log(humanScore)
    playRound(human, getComputerChoice())
    displayScore(humanScore,computerScore)
})

paperBtn.addEventListener('click', () => {
    var human = "PAPER";
    list.removeChild(list.firstChild);
    playRound(human, getComputerChoice());
    displayScore(humanScore,computerScore)
})

scissorsBtn.addEventListener('click', () => {
    var human = "SCISSORS";
    list.removeChild(list.firstChild);
    playRound(human, getComputerChoice())
    displayScore(humanScore,computerScore)
})
} 


playGame()