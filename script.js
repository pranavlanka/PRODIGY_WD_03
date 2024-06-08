let gameBoard = [];
let currentPlayer = 'X';
let gameOver = false;

for (let i = 0; i < 9; i++) {
  gameBoard.push('');
  const cell = document.getElementById(`cell-${i}`);
  cell.addEventListener('click', () => {
    if (!gameOver && gameBoard[i] === '') {
      gameBoard[i] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === 'X'? 'O' : 'X';
    }
  });
}

document.getElementById('reset-btn').addEventListener('click', resetGame);

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]]!== '') {
      gameOver = true;
      document.getElementById('game-status').textContent = `Player ${gameBoard[condition[0]]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameOver = true;
    document.getElementById('game-status').textContent = 'It\'s a draw!';
  }
}

function resetGame() {
  gameBoard = [];
  currentPlayer = 'X';
  gameOver = false;
  document.getElementById('game-status').textContent = 'Game in progress...';
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById(`cell-${i}`);
    cell.textContent = '';
  }
}
