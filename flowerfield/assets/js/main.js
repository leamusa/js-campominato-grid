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

    // Generate the cells
    while (cellNumber <= totalCells) {
      const cell = document.createElement("div");
      cell.textContent = "🌻"; // Floweremoji
      cell.classList.add("FlowerCells"); // Add a class for styling

      // Add a click event listener for each cell
      cell.addEventListener("click", handleCellClick);

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

  // Check if the cell number is present in the mushrooms array
  if (mushrooms.includes(cellNumber)) {
    // If it's a mushroom, change the cell background color to red
    clickedCell.style.backgroundColor = "#ff0000"; // Red color

    // Increment the number of found mushrooms
    foundMushrooms++;

    // Check if the user has found 16 mushrooms
    if (foundMushrooms === 16) {
      // If the user has found 16 mushrooms, end the game
      endGame();
    }
  } else {
    // If it's not a mushroom, execute flower logic
    handleFlowerLogic(clickedCell);
  }
}

// Function to handle additional flower logic
function handleFlowerLogic(clickedCell) {
  // Change the background color of the cell to blue
  clickedCell.style.backgroundColor = "#0000ff";

  // Additional logic for flowers
  // Add more Actions here

  console.log("Picked a Flower!");
}

// Function to end the game
function endGame() {
  // Communicate the score to the user
  const score = totalCells - mushrooms.length;
  alert(`Game Over! Your Score: ${score}`);
}

/* mushroom */

// Function to generate an array of random mushroom numbers
function generateMushrooms() {
  let mushrooms = generateMushrooms(totalCells); // Pass totalCells as an argument

  // Function to generate an array of random mushroom numbers
  function generateMushrooms(totalCells) {
    mushrooms = [];
    while (mushrooms.length < 16) {
      const randomCellNumber = Math.floor(Math.random() * totalCells) + 1;
      if (!mushrooms.includes(randomCellNumber)) {
        mushrooms.push(randomCellNumber);
      }
    }
    return mushrooms;
  }
}
