// Adds an event listener to the "Start Game" button that will call the startGame() function when clicked
document.getElementById("start-btn").addEventListener("click", startGame);

// Function to start the game
function startGame() {
  const grid = document.getElementById("flowerfield-grid");
  grid.innerHTML = ""; // Clears the content of the flower field when starting the game

  const difficulty = prompt(
    "Enter difficulty (1 for easy, 2 for medium, 3 for hard):"
  );
  const totalCells = getGridSize(difficulty); // Gets the total grid size based on difficulty
  const mushrooms = generateMushrooms(totalCells); // Generates mushrooms randomly on the grid

  // For loop to create cells in the grid
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Adds the "cell" class to each cell
    cell.dataset.number = i; // Adds a "number" attribute with the cell number

    // Adds an event listener to handle clicks on the cell
    cell.addEventListener("click", function () {
      const clickedNumber = parseInt(this.dataset.number);

      if (mushrooms.includes(clickedNumber)) {
        // If it's a mushroom, display the mushroom and end the game
        this.innerHTML = "&#127812;"; // Mushroom icon
        this.style.backgroundColor = "red"; // Red background to indicate a mushroom
        endGame();
      } else {
        // If it's not a mushroom, change the background color to blue
        this.classList.add("flower");
      }
    });

    grid.appendChild(cell); // Adds the cell to the flower field
  }
}

// Function to randomly generate cell numbers with mushrooms
function generateMushrooms(totalCells) {
  const mushrooms = [];
  while (mushrooms.length < 16) {
    const randomCellNumber = Math.floor(Math.random() * totalCells) + 1;
    if (!mushrooms.includes(randomCellNumber)) {
      mushrooms.push(randomCellNumber);
    }
  }
  return mushrooms;
}

// Function to end the game
function endGame() {
  // Shows an alert that the game is over
  alert("Game Over! You stepped on a mushroom.");
  // Reloads the page for a new game
  location.reload();
}

// Function to get the grid size based on difficulty
function getGridSize(difficulty) {
  switch (parseInt(difficulty)) {
    case 1:
      return 100;
    case 2:
      return 81;
    case 3:
      return 49;
    default:
      return 100;
  }
}

