function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "rock";

    case 2:
      return "papper";

    case 3:
      return "scissor";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Rock Paper Scissor");

  console.log(`the human chose ${humanChoice}`);
}

getHumanChoice();
