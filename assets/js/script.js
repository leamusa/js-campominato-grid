// Get references to HTML elements
const gamePadBtn = document.getElementById("game-pad-btn");
const gridContainer = document.getElementById("minesweeper-grid");

// Add an event listener for the "Play" button
gamePadBtn.addEventListener("click", generateMinesweeperGrid);

// Function to generate Minesweeper grid
function generateMinesweeperGrid() {
  // Clear the content of the grid container
  gridContainer.innerHTML = "";

  let cellNumber = 1;
  do {
    const cell = document.createElement("div");
    cell.textContent = cellNumber;
    cell.classList.add("SquareCells");

    // Add a click event listener for each cell
    cell.addEventListener("click", handleCellClick);

    // Add the cell to the grid container
    gridContainer.appendChild(cell);

    cellNumber++;
  } while (cellNumber <= 100);
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
