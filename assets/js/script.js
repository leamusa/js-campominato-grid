// main.js
const generateBtn = document.getElementById("generate-btn");
const difficultySelect = document.getElementById("difficulty-select");
const gridContainer = document.getElementById("grid-container");

// Aggiungi un listener per il clic sul bottone
generateBtn.addEventListener("click", generateGrid);

function generateGrid() {
  // Ottieni il livello di difficoltà selezionato
  const difficulty = parseInt(difficultySelect.value);

  // Calcola il numero di caselle in base alla difficoltà
  const gridSize = getGridSize(difficulty);

  // Crea la griglia
  createGrid(gridSize);
}
//crea dimensioni griglia
function getGridSize(difficulty) {
  const gridSizeMap = {
    1: 100,
    2: 81,
    3: 49,
  };

  return gridSizeMap[difficulty] || 100;
}

function createGrid(size) {
  // Pulisci il contenuto della griglia precedente
  gridContainer.innerHTML = "";

  // Crea le caselle della griglia
  for (let i = 1; i <= size; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.classList.add("grid-cell"); // Aggiungi la classe CSS per lo stile della cella

    // Aggiungi un listener per il clic su ogni cella
    cell.addEventListener("click", () => handleCellClick(i));

    // Aggiungi la cella al contenitore della griglia
    gridContainer.appendChild(cell);
  }
}
// Imposta la larghezza della griglia in base al numero di colonne
gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

// Invert lo stato della cella tra acceso e spento
cellStates[cellNumber] = !cellStates[cellNumber];

// Color la cella in base allo stato
cell.style.backgroundColor = cellStates[cellNumber] ? "blue" : "";

// Emetti un messaggio in console con il numero della cella cliccata e lo stato attuale
console.log(
  `Cella cliccata: ${cellNumber}, Stato: ${
    cellStates[cellNumber] ? "Acceso" : "Spento"
  }`
);
