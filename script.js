let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissor";
  }
}

function getHumanChoice() {
  return prompt("Rock Paper Scissor").toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  if (humanChoice === "rock") {
    if (computerChoice === "scissor") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "rock") {
      console.log(`Tie! ${humanChoice} doesn't beat ${computerChoice}`);
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice === "scissor") {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "paper") {
      console.log(`Tie! ${humanChoice} doesn't beat ${computerChoice}`);
    }
  } else if (humanChoice === "scissor") {
    if (computerChoice === "paper") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice === "rock") {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "scissor") {
      console.log(`Tie! ${humanChoice} doesn't beat ${computerChoice}`);
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
