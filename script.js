// function is used to generate a move for the computer
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

// retrives the choice from the user
function getHumanChoice() {
  return prompt("Choose between Rock, Paper, Scissor").toLocaleLowerCase();
}

// main function responsible for managing the game.
function playGame() {
  const NUMBER_OF_ROUNDS = 5; // set number of rounds will be played
  let humanScore = 0;
  let computerScore = 0;

  // handles determining the winner of a single round, points are given to the winner.
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Tie! ${humanChoice} doesn't beat ${computerChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (
      (computerChoice === "rock" && humanChoice === "scissor") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissor" && humanChoice === "paper")
    ) {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // plays for NUMBER_OF_ROUND times
  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  // determines final winner and notifies the user
  if (humanScore > computerScore) {
    alert("Congratulations You Won!");
  } else if (humanScore < computerScore) {
    alert("Unlucky You Lost!");
  } else {
    alert("Game was a Tie");
  }

  console.log(`You scored ${humanScore} points`);
  console.log(`Computer scored ${computerScore} points`);
}

playGame(); // main call to start the game
