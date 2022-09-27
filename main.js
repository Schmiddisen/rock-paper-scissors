function getComputerChoice() {
  var rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function play(cChoice, pChoice) {
  pChoice = pChoice.toLowerCase();
  if (cChoice == pChoice) {
    outcome.textContent = "Outcome: It's a tie!";
    return null;
  } else if (cChoice === "rock" && pChoice === "paper") {
    outcome.textContent = "Outcome: You win! Paper beats rock";
    return true;
  } else if (cChoice === "scissors" && pChoice === "paper") {
    outcome.textContent = "Outcome: You lose! Scissors beats paper";
    return false;
  } else if (cChoice === "rock" && pChoice === "scissors") {
    outcome.textContent = "Outcome: You lose! Rock beats scissors";
    return false;
  } else if (cChoice === "paper" && pChoice === "scissors") {
    outcome.textContent = "Outcome: You win! Scissors beats paper";
    return true;
  } else if (cChoice === "scissors" && pChoice === "rock") {
    outcome.textContent = "Outcome: You win! Rock beats scissors";
    return true;
  } else if (cChoice === "paper" && pChoice === "rock") {
    outcome.textContent = "Outcome: You lose! Paper beats rock";
    return false;
  } else {
    outcome.textContent = "Outcome: What happened here?";
    return null;
  }
}

let pScore = 0;
let cScore = 0;
let outcome = document.querySelector("#outcome");
let pShowingScore = document.querySelector("#pScore");
let cShowingScore = document.querySelector("#cScore");
let winner = document.querySelector("#winner");

function playerWin() {
  pScore++;
  pShowingScore.textContent = `Your score: ${pScore}`;
}

function computerWin() {
  cScore++;
  cShowingScore.textContent = `Computer score: ${cScore}`;
}

function checkWinner() {
  if (pScore == 5 && pScore > cScore) {
    winner.textContent = `You won with a score of ${pScore} to ${cScore}!`;
    resetGame();
  } else if (cScore == 5 && cScore > pScore) {
    winner.textContent = `You lost with a score of ${pScore} to ${cScore}!`;
    resetGame();
  } else{
    winner.textContent = "";
  }
}

function resetGame(){
    pScore = 0;
    pShowingScore.textContent = "Your score: ";
    cScore = 0;
    cShowingScore.textContent = "Computer score: ";
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  let win = play(getComputerChoice(), "rock");
  if (win) {
    playerWin();
  } else if (win == false) {
    computerWin();
  }
  checkWinner();
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  let win = play(getComputerChoice(), "paper");
  if (win) {
    playerWin();
  } else if (win == false) {
    computerWin();
  }
  checkWinner();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  let win = play(getComputerChoice(), "scissors");
  if (win) {
    playerWin();
  } else if (win == false) {
    computerWin();
  }
  checkWinner();
});
