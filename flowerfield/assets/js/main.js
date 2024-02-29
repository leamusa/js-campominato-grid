// Get references to HTML elements
const gamePadBtn = document.getElementById("game-pad-btn"); // Reference to the "Play" button
const difficultySelect = document.getElementById("difficulty-select"); // Reference to the difficulty level select
const gridContainer = document.getElementById("flowerfield-grid"); // Reference to the grid container

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

    let cellNumber = 1;

    // Use a while loop to generate the cells
    while (cellNumber <= totalCells) {
      const cell = document.createElement("div");
      cell.textContent = "🌸"; // Display a flower emoji in each cell
      cell.classList.add("FlowerCells"); // Add a class for styling

      // Add a click event listener for each cell
      cell.addEventListener("click", handleFlowerClick);

      // Add the cell to the grid container
      gridContainer.appendChild(cell);

      cellNumber++;
    }

    // Set the grid layout based on the number of columns
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    // Alert the user to select a difficulty before playing
    alert("Please select a difficulty before playing.");
  }
}

// Function to handle the click event on each flower cell
function handleFlowerClick(event) {
  const clickedCell = event.target;
  // Change the background color of the clicked cell to pink
  clickedCell.style.backgroundColor = "#ffc0cb"; // Pink color

  // Log a message to the console indicating a flower is picked
  console.log("Picked a Flower!");

  // Check if the clicked cell has mushrooms
  handleMushroomCheck(clickedCell);
}

// Function to check if the clicked cell contains mushrooms
function handleMushroomCheck(clickedCell) {
  // Get the cell number from the text content
  const cellNumber = parseInt(clickedCell.textContent);

  // Check if the cell number is present in the mushrooms array
  if (mushrooms.includes(cellNumber)) {
    // If it's a mushroom, change the cell background color to red
    clickedCell.style.backgroundColor = "#ff0000"; // Red color

    // Increment the number of found mushrooms
    foundMushrooms++;

    // Check if the user has found 3 mushrooms
    if (foundMushrooms === 3) {
      // If the user has found 3 mushrooms, end the game
      endGame();
    }
  } else {
    // If it's not a mushroom, execute flower logic
    handleFlowerLogic(clickedCell);
  }
}

// Function to handle additional flower logic
function handleFlowerLogic(clickedCell) {
  // Change the background color of the cell to pink
  clickedCell.style.backgroundColor = "#ffc0cb"; // Pink color

  // Additional logic for flowers, if needed
  // You can add any actions to be performed in case of a flower cell here
  console.log("Picked a Flower!");
}

// Function to end the game
function endGame() {
  // Communicate the score to the user
  const score = totalCells - mushrooms.length;
  alert(`Game Over! Your Score: ${score}`);
}

/* mushroom */
let foundMushrooms = 0; // Variable to keep track of the number of found mushrooms
let mushrooms = []; // Array to store the generated mushroom numbers

// Function to generate an array of random mushroom numbers
function generateMushrooms(totalCells) {
  mushrooms = [];
  while (mushrooms.length < 3) {
    const randomCellNumber = Math.floor(Math.random() * totalCells) + 1;
    if (!mushrooms.includes(randomCellNumber)) {
      mushrooms.push(randomCellNumber);
    }
  }
}
