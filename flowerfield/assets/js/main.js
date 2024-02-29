// Sample JavaScript (main.js)
document.getElementById("start-btn").addEventListener("click", startGame);

function startGame() {
  const grid = document.getElementById("flowerfield-grid");
  grid.innerHTML = "";

  const difficulty = prompt(
    "Enter difficulty (1 for easy, 2 for medium, 3 for hard):"
  );
  const totalCells = getGridSize(difficulty);
  const mushrooms = generateMushrooms(totalCells);

  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.number = i;

    cell.addEventListener("click", function () {
      const clickedNumber = parseInt(this.dataset.number);

      if (mushrooms.includes(clickedNumber)) {
        // If it's a mushroom, reveal the mushroom and end the game
        this.innerHTML = "&#127812;"; // Mushroom icon
        this.style.backgroundColor = "red";
        endGame();
      } else {
        // If it's not a mushroom, change the background color to blue
        this.classList.add("flower");
      }
    });

    grid.appendChild(cell);
  }
}

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

function endGame() {
  // Show an alert indicating the game is over
  alert("Game Over! You stepped on a mushroom.");
  // Reload the page for a new game
  location.reload();
}

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
