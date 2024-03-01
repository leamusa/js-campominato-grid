// Adds an event listener to the "Start Game" button that will call the startGame() function when clicked
document.getElementById("start-btn").addEventListener("click", startGame);

// Variable to track whether the game is in progress
let gameInProgress = false;

// Function to start the game
function startGame() {
  const grid = document.getElementById("flowerfield-grid");
  grid.innerHTML = "";

  const difficulty = prompt(
    "Enter difficulty (1 for easy, 2 for medium, 3 for hard):"
  );
  const totalCells = getGridSize(difficulty);
  const mushrooms = generateMushrooms(totalCells);

  gameInProgress = true; // Set game in progress

  // For loop to create cells in the grid
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Adds the "cell" class to each cell
    cell.dataset.number = i; // Adds a "number" attribute with the cell number

    // Adds an event listener to handle clicks on the cell
    cell.addEventListener("click", function () {
      const clickedNumber = parseInt(this.dataset.number);

      if (mushrooms.includes(clickedNumber) && gameInProgress) {
        // If it's a mushroom, reveal the mushroom and end the game
        this.innerHTML = "🍄"; // Mushroom icon
        this.style.color = "red"; // Set the text color to red for the red mushroom emoji

        // Delay for 2 seconds before ending the game
        setTimeout(() => {
          if (gameInProgress) {
            endGame();
          }
        }, 2000);
      } else {
        // If it's not a mushroom and the game is still in progress, change the background color to blue
        if (gameInProgress) {
          this.classList.add("flower");
        }
      }
    });

    grid.appendChild(cell); // Adds the cell to the flower field
  }
}

// Function to randomly generate cell numbers with mushrooms
function generateMushrooms(totalCells) {
  const mushrooms = ["🍄"];
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
  gameInProgress = false; // Set game as not in progress
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
