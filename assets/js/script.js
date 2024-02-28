document.addEventListener("DOMContentLoaded", function () {
  const gamePadBtn = document.getElementById("game-pad-btn");
  const difficultySelect = document.getElementById("difficulty-select");
  const gridContainer = document.querySelector(".grid-container");

  // Check if elements are found
  if (!gamePadBtn || !difficultySelect || !gridContainer) {
    console.error("One or more elements not found. Check your HTML structure.");
    return;
  }

  // Add an event listener for the "Play Again" button
  gamePadBtn.addEventListener("click", generateMinesweeperGrid);

  function generateMinesweeperGrid() {
    // Hide the "Play Again" button
    gamePadBtn.style.display = "none";

    // Get the selected difficulty level
    const difficulty = parseInt(difficultySelect.value);

    // Generate the Minesweeper grid
    createMinesweeperGrid(difficulty);
  }

  function createMinesweeperGrid(difficulty) {
    // Clear the content of the grid container
    gridContainer.innerHTML = "";

    // Calculate the number of cells based on the difficulty
    let totalCells;
    let rows;
    let columns;

    switch (difficulty) {
      case 1:
        totalCells = 100;
        rows = 10;
        columns = 10;
        break;
      case 2:
        totalCells = 81;
        rows = 9;
        columns = 9;
        break;
      case 3:
        totalCells = 49;
        rows = 7;
        columns = 7;
        break;
      default:
        totalCells = 100;
        rows = 10;
        columns = 10;
        break;
    }

    // Create the Minesweeper grid cells
    for (let i = 1; i <= totalCells; i++) {
      const cell = document.createElement("div");
      cell.textContent = i;
      cell.classList.add("SquareCells"); // Add the class for styling

      // Add a click event listener for each cell
      cell.addEventListener("click", handleCellClick);

      // Add the cell to the grid container
      gridContainer.appendChild(cell);
    }

    // Set the grid container styles based on the number of columns
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  function handleCellClick(event) {
    const cell = event.target;
    // Handle the cell click as needed
    // For example, change cell color or perform other actions
  }
});
