document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const scoreElement = document.getElementById('score');
  const restartButton = document.getElementById('restart-button');
  const gameOverOverlay = document.getElementById('game-over-overlay');
  const gameOverMessage = document.getElementById('game-over-message');

  let board = [];
  let score = 0;

  // Function to initialize the game board
  function initBoard() {
    board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    score = 0;
    scoreElement.textContent = 'Score: 0';
    gameOverOverlay.style.display = 'none';
    gameOverMessage.textContent = 'Game Over!';
    createTiles();
    addRandomNumber();
    addRandomNumber();
  }

  // Function to create the tiles on the grid
  function createTiles() {
    gridContainer.innerHTML = '';
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const tile = document.createElement('div');
        tile.className = 'grid-cell';
        tile.textContent = board[row][col] !== 0 ? board[row][col] : '';
        gridContainer.appendChild(tile);
      }
    }
  }

  // Function to generate a new random number (2 or 4)
  function generateRandomNumber() {
    return Math.random() < 0.9 ? 2 : 4;
  }

  // Function to add a new random number to the board
  function addRandomNumber() {
    const emptyCells = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (board[row][col] === 0) {
          emptyCells.push({ row, col });
        }
      }
    }

    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      board[randomCell.row][randomCell.col] = generateRandomNumber();
      updateTiles();
    }
  }

  // Function to update the tiles on the grid
  function updateTiles() {
    const tiles = document.getElementsByClassName('grid-cell');
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const tile = tiles[row * 4 + col];
        tile.textContent = board[row][col] !== 0 ? board[row][col] : '';
        tile.className = 'grid-cell';
        tile.classList.add(`tile-${board[row][col]}`);
      }
    }
    scoreElement.textContent = `Score: ${score}`;
  }

  // Function to move the tiles in a given direction
  function moveTiles(direction) {
    // Implement the logic to move the tiles in the specified direction

    // After moving the tiles, call addRandomNumber() to add a new random number
    addRandomNumber();
  }

  // Function to check if the game is over (no more valid moves)
  function isGameOver() {
    // Implement the logic to check if the game is over
  }

  // Event listener for arrow key presses
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      moveTiles('up');
    } else if (event.key === 'ArrowDown') {
      moveTiles('down');
    } else if (event.key === 'ArrowLeft') {
      moveTiles('left');
    } else if (event.key === 'ArrowRight') {
      moveTiles('right');
    }
  });

  // Event listener for restart button click
  restartButton.addEventListener('click', () => {
    initBoard();
  });

  // Initialize the board
  initBoard();
});
