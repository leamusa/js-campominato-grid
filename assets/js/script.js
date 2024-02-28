// Get references to HTML elements
const gamePadBtn = document.getElementById("game-pad-btn");
const difficultySelect = document.getElementById("difficulty-select");
const gridContainer = document.querySelector(".grid-container");
const header = document.querySelector(".header");

// Add an event listener for the "Play" button
gamePadBtn.addEventListener("click", generateMinesweeperGrid);

// Function to generate Minesweeper grid based on difficulty
function generateMinesweeperGrid() {
  // Hide the difficulty level
  difficultySelect.style.display = "none";

  // Get the selected difficulty level
  const difficulty = parseInt(difficultySelect.value);

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

  let i = 1;

  //  do-while loop
  do {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.classList.add("SquareCells"); // Add the class for styling

    // Add a click event listener for each cell
    cell.addEventListener("click", handleCellClick);

    // Add the cell to the grid container
    gridContainer.appendChild(cell);

    i++;
  } while (i <= totalCells);

  // Set the grid container styles based on the number of columns
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

// Function to handle the click event on each cell
function handleCellClick(event) {
  const clickedCell = event.target;
  // Change the background color of the clicked cell to blue
  clickedCell.style.backgroundColor = "blue";

  // Get the number of the clicked cell
  const cellNumber = parseInt(clickedCell.textContent);

  // Log a message to the console with the number of the clicked cell
  console.log(`Clicked Cell: ${cellNumber}`);
}
