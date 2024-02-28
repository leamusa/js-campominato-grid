// startGame1
// main.js
// Step 1: Const for the game button
const myGamePadButton = document.getElementById("game-pad-btn");

// Step 2: Add an event listener to the game pad button
myGamePadButton.addEventListener("click", GameClass.startGame);
class GameClass {
  // Step 2: Function to start the game
  static startGame() {
    console.log("Step 1: Start the game");

    // Step 3: Clear the grid of cells
    GameClass.reset();
    console.log("Step 3: Grid cleared");

    // Step 4: Get the difficulty level from the HTML select
    var difficulty = parseInt(select.value);
    console.log("Step 4: Difficulty:", difficulty);

    // Step 5: Add a check - if it's a new game, open the grids
    if (newGame) {
      console.log("Step 5: New game, open the grids");

      // Step 6: Based on the selected difficulty level, generate a grid of cells
      switch (difficulty) {
        // Easy: 10 cells per row
        case 1:
          GameClass.generateCells(10);
          break;

        // Medium: 9 cells per row
        case 2:
          GameClass.generateCells(9);
          break;

        // Hard: 7 cells per row
        case 3:
          GameClass.generateCells(7);
          break;
      }

      newGame = true;
      myGamePadButton.textContent = "Play Again";
    } else {
      console.log(
        "Step 5: Same game, play again without changing the difficulty"
      );
    }
  }
}
