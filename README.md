## js-campominato-grid

## description

1. The user clicks on a button that will generate a square game grid.square
2. Each cell has a progressive number, from 1 to 100:
   There will then be 10 boxes for each of the 10 rows.

3. When the user clicks on each cell, the clicked cell turns blue and sends a message in console with the cell number clicked.

# Bonus

4. Add a select next to the build button, which provides a choice between three different difficulty levels:

- with difficulty 1 => 100 cells, with a number between 1 and 100, divided into 10 boxes for 10 rows;
- with difficulty 2 => 81 cells, with a number between 1 and 81, divided into 9 cells for 9 rows;
- with difficulty 3 => 49 boxes, with a number between 1 and 49, divided into 7 boxes for 7 rows;

# Tips of the day: :party_wizard:

1. We write first what we want to do step by step in Italian
2. We divide work into micro problems.

For example:
What do I need to generate numbers?

- :point right: Always try with console.log() to see if we are getting the right data.
- We can also do the validation and checking later.

# Reasoning

1. The user clicks on a button that will generate a square game grid.square:

- se è una nuova partita genera una griglia
- Altrimenti rigioca

2. Each cell has a progressive number, from 1 to 100; There will then be 10 boxes for each of the 10 rows:

- Restituisci un numero casuale compreso tra min e max inclusi(randomNumb con parametri min max)

3. When the user clicks on each cell:

- the clicked cell turns blue and sends a message in console with the cell number clicked:

# tools

- create a container in html e css
- add event listener su click
- function to start the game
- if nuova partita apri la griglia
- else rigioca senza cambiare livello di difficoltà (approfondisci livello di didfficolta)
- for cycle class name
- add event listener to click for colors

# bonus

- Introduced a minesweeper-container element to wrap the Minesweeper grid.
- Modified the generateMinesweeperGrid function to hide both the difficulty level.
- Removed the playAgain function
- Set the Minesweeper container (minesweeper-container) to be displayed when generating the Minesweeper grid.
  Now, when you click "Play," the difficulty level and "Play" button will be hidden, and the Minesweeper grid will be displayed in the minesweeper-container.

# change

- Added a condition to check if a difficulty is selected before generating the grid.
- Hid the difficulty selector after generating the grid.
- showing an alert if no difficulty is selected.(need to fix this)
- Changed the layout to use a while loop for cell instead a for loop to permit to play more times

#

### Flower:

# First commit of sunflowers field

add the existent job changing minesswe with flowers field,add text content wi…
…th flower,grid change in flowerfield-grid,add event target when click the cell,add var mushroom,add function to generate mushroom, combination of flower and mushroom(handle),correption of global caracht(found oundMushrooms before function to give a power of Global),add a different logic flower handleFlowerLogic(to put more actions after).,function to generate array of random mushroom numbers with math random.At this point instead of mushroom we have a blue color like before and instead of card we have flowers.

# Second commit of sunflowers field

- Moved `generateMushrooms` call to initialize `mushrooms` after `totalCells` is calculated.
- Passed `totalCells` as an argument to the `generateMushrooms` function.
- Corrected the `generateMushrooms` function to properly return the generated array.
- Corrected the scope of `totalCells` to make it accessible throughout the script.
