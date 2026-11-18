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
  return prompt("Choose between Rock, Paper, Scissor").toLocaleLowerCase();
}

function playGame() {
  const NUMBER_OF_ROUNDS = 5;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
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

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log(humanScore, computerScore);
}

playGame();
