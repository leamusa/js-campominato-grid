// Get references to HTML elements
const gamePadBtn = document.getElementById("game-pad-btn"); // Reference to the "Play" button
const difficultySelect = document.getElementById("difficulty-select"); // Reference to the difficulty level select
const gridContainer = document.getElementById("minesweeper-grid"); // Reference to the grid container

// Add an event listener for the "Play" button
gamePadBtn.addEventListener("click", generateMinesweeperGrid);

// Function to generate the Minesweeper grid
function generateMinesweeperGrid() {
  // Check if a difficulty level is selected
  if (difficultySelect.value !== "") {
    // Hide the difficulty level selector after generating the grid
    difficultySelect.style.display = "none";

    // Clear the content of the grid container
    gridContainer.innerHTML = "";

    // Calculate the number of cells based on the selected difficulty level
    let totalCells;

    let columns; // Get references to HTML elements
    const gamePadBtn = document.getElementById("game-pad-btn"); // Reference to the "Play" button
    const difficultySelect = document.getElementById("difficulty-select"); // Reference to the difficulty level select
    const gridContainer = document.getElementById("minesweeper-grid"); // Reference to the grid container

    // Add an event listener for the "Play" button
    gamePadBtn.addEventListener("click", generateMinesweeperGrid);

    // Function to generate the Minesweeper grid
    function generateMinesweeperGrid() {
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
          cell.textContent = cellNumber;
          cell.classList.add("SquareCells");

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
      // Change the background color of the clicked cell to blue
      clickedCell.style.backgroundColor = "blue";

      // Get the number of the clicked cell
      const cellNumber = parseInt(clickedCell.textContent);

      // Log a message to the console with the number of the clicked cell
      console.log(`Clicked Cell: ${cellNumber}`);
    }

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
      cell.textContent = cellNumber;
      cell.classList.add("SquareCells");

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
  // Change the background color of the clicked cell to blue
  clickedCell.style.backgroundColor = "blue";

  // Get the number of the clicked cell
  const cellNumber = parseInt(clickedCell.textContent);

  // Log a message to the console with the number of the clicked cell
  console.log(`Clicked Cell: ${cellNumber}`);
}
function handleFlowerClick(event) {
  const clickedCell = event.target;
  const cellNumber = parseInt(clickedCell.textContent);

  // Verifica se il numero della cella è presente nella lista dei funghi
  if (mushrooms.includes(cellNumber)) {
    // Se è un fungo, colora la cella di rosso
    clickedCell.style.backgroundColor = "#ff0000"; // Colore rosso
    // Termina la partita e comunica il punteggio
    endGame();
  } else {
    // Se non è un fungo, colora la cella di azzurro
    clickedCell.style.backgroundColor = "#0000ff"; // Colore azzurro
    
    // Mostra il testo (emoji del fiore) solo se la cella non contiene un fungo
    clickedCell.textContent = '🌸';