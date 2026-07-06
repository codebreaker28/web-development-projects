const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
});

function handleCellClick(index) {

    if (cells[index].textContent !== "" || !gameActive) {
        return;
    }

    cells[index].textContent = currentPlayer;

    checkWinner();

    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function checkWinner() {

    let winnerFound = false;

    winningCombinations.forEach(pattern => {

        const a = cells[pattern[0]].textContent;
        const b = cells[pattern[1]].textContent;
        const c = cells[pattern[2]].textContent;

        if (a === "" || b === "" || c === "") {
            return;
        }

        if (a === b && b === c) {

            winnerFound = true;
            gameActive = false;

            statusText.textContent = `🎉 Player ${a} Wins!`;

            cells[pattern[0]].classList.add("win");
            cells[pattern[1]].classList.add("win");
            cells[pattern[2]].classList.add("win");
        }

    });

    if (winnerFound) return;

    let draw = true;

    cells.forEach(cell => {
        if (cell.textContent === "") {
            draw = false;
        }
    });

    if (draw) {
        gameActive = false;
        statusText.textContent = "🤝 Match Draw!";
    }
}

function restart() {

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("win");
    });

    currentPlayer = "X";
    gameActive = true;

    statusText.textContent = "Player X's Turn";
}
