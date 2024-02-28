// startGame.js
function startGame() {
  console.log("Start the game");

  // Clear the grid of cells
  reset();
  console.log("Grid cleared");

  // Get the difficulty level from the HTML select
  var difficulty = parseInt(select.value);
  console.log("Difficulty:", difficulty);

  // Add a check - if it's a new game, open the grids
  if (newGame) {
    console.log("New game, open the grids");

    // Based on the selected difficulty level, generate a grid of cells
    switch (difficulty) {
      // Easy: 10 cells per row


    newGame = true;
    myGamePadButton.textContent = "Play Again";
  } else {
    console.log("Same game, play again without changing the difficulty");
  }
}
