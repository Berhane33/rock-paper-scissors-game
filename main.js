let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : (computerChoice = 2 ? "paper" : "scissors");

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
          : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    }
    else {
        alert("You did not enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
