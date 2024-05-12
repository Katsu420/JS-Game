let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    if (!gameOver && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        
        if (checkWin(currentPlayer)) {
            document.getElementById('message').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkDraw()) {
            document.getElementById('message').textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    return winCombos.some(combo => {
        return combo.every(index => {
            return board[index] === player;
        });
    });
}

function checkDraw() {
    return board.every(cell => {
        return cell !== '';
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('message').textContent = '';
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.textContent = '';
    });
}
