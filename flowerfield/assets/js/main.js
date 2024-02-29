// Get references to HTML elements
const gamePadBtn = document.getElementById("game-pad-btn");
const difficultySelect = document.getElementById("difficulty-select");
const gridContainer = document.getElementById("flowerfield-grid");

// Add an event listener for the "Play" button
gamePadBtn.addEventListener("click", generateFlowerfieldGrid);

// Function to generate the Flowerfield grid
function generateFlowerfieldGrid() {
  // Check if a difficulty level is selected
  if (difficultySelect.value !== "") {
    // Hide the difficulty level selector after generating the grid
    difficultySelect.style.display = "none";

    // Clear the content of the grid container
    gridContainer.innerHTML = "";

    // Calculate the number of cells based on the selected difficulty level
    let totalCells;
    let rows;
    let columns;

    switch (parseInt(difficultySelect.value)) {
      case "1":
        totalCells = 100;
        rows = 10;
        columns = 10;
        break;
      case "2":
        totalCells = 81;
        rows = 9;
        columns = 9;
        break;
      case "3":
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

    let cellNumber = 1;

    // Generate the cells
    while (cellNumber <= totalCells) {
      const cell = document.createElement("div");
      cell.textContent = "🌻"; // Flower emoji
      cell.classList.add("FlowerCells"); // Add a class for styling

      // Add a click event listener for each cell
      cell.addEventListener("click", handleCellClick);

      // Add the cell to the grid container
      gridContainer.appendChild(cell);

      cellNumber++;
    }

    // Set the grid layout based on the number of columns
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    // Generate an array of random mushroom numbers
    let mushrooms = generateMushrooms(totalCells);

    // Store the mushroom numbers in the data attribute of the grid container
    gridContainer.dataset.mushrooms = JSON.stringify(mushrooms);

    // Alert the user to select a difficulty before playing
    alert("Please select a difficulty before playing.");
  }
}

// Function to handle the click event on each cell
function handleCellClick(event) {
  const clickedCell = event.target;

  // Check if the clicked cell has mushrooms
  handleMushroomCheck(clickedCell);
}

// Function to check if the clicked cell contains mushrooms
function handleMushroomCheck(clickedCell) {
  // Get the cell number from the text content
  const cellNumber = parseInt(clickedCell.textContent);

  // Get the array of mushroom numbers from the data attribute
  const mushrooms = JSON.parse(gridContainer.dataset.mushrooms);

  // Check if the cell number is present in the mushrooms array
  if (mushrooms.includes(cellNumber)) {
    // If it's a mushroom, change the cell background color to red
    clickedCell.style.backgroundColor = "#ff0000"; // Red color

    // End the game
    endGame("Mushroom stomped!");
  } else {
    // If it's not a mushroom, execute flower logic
    handleFlowerLogic(clickedCell);
  }
}

// Function to handle additional flower logic
function handleFlowerLogic(clickedCell) {
  // Change the background color of the cell to blue
  clickedCell.style.backgroundColor = "#0000ff"; // Blue color

  // Additional logic for flowers
  // Add more Actions here

  // Check if the user has revealed all non-mushroom cells
  if (
    document.querySelectorAll(
      '.FlowerCells[style*="background-color: #0000ff"]'
    ).length ===
    totalCells - 16
  ) {
    endGame("All flowers revealed! You win!");
  }
}

// Function to end the game
function endGame(message) {
  // Communicate the game result to the user
  alert(message);
  // +actions to perform at the end of the game
}
