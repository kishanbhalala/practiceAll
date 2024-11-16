var currentPosition = { row: 2, col: 2 };
var n = 5;
function renderBoard() {
    var chessboard = document.getElementById("chessboard");
    chessboard.innerHTML = '';

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            chessboard.appendChild(cell);

            if (row === currentPosition.row && col === currentPosition.col) {
                cell.style.background = "Blue"
            }
        }
    }
}

function moveLeft() {
    if (currentPosition.col < 5) {
        if (currentPosition.col === 0)
            currentPosition.col = 4;
        else
            currentPosition.col--;
        renderBoard();
    }
}
function moveRight() {
    if (currentPosition.col < 5) {
        if (currentPosition.col === 4)
            currentPosition.col = 0;
        else
            currentPosition.col++;
        renderBoard();
    }
}

function moveUp() {
    if (currentPosition.row < 5) {
        if (currentPosition.row === 0)
            currentPosition.row = 4;
        else
            currentPosition.row--;
        renderBoard();
    }
}
function moveDown() {
    if (currentPosition.row < 5) {
        if (currentPosition.row === 4)
            currentPosition.row = 0;
        else
            currentPosition.row++;
        renderBoard();
    }
}

function moveLeftUp() {
    if (currentPosition.row === 0 && currentPosition.col === 0) {
        currentPosition.row = 4;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 3 && currentPosition.col === 0) {
        currentPosition.row = 4;
        currentPosition.col = 1;
    }
    else if (currentPosition.row === 2 && currentPosition.col === 0) {
        currentPosition.row = 4;
        currentPosition.col = 2;
    }
    else if (currentPosition.row === 1 && currentPosition.col === 0) {
        currentPosition.row = 4;
        currentPosition.col = 3;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 1) {
        currentPosition.row = 3;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 2) {
        currentPosition.row = 2;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 3) {
        currentPosition.row = 1;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 4) {
        currentPosition.row = 0;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 0) {
        currentPosition.row = 4;
        currentPosition.col = 0;
    }
    else {
        currentPosition.row--;
        currentPosition.col--;
    }
    renderBoard();
}




function moveRightUp() {
    if (currentPosition.row === 0 && currentPosition.col === 4) {
        currentPosition.row = 4;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 1 && currentPosition.col === 4) {
        currentPosition.row = 4;
        currentPosition.col = 1;
    }
    else if (currentPosition.row === 2 && currentPosition.col === 4) {
        currentPosition.row = 4;
        currentPosition.col = 2;
    }
    else if (currentPosition.row === 3 && currentPosition.col === 4) {
        currentPosition.row = 4;
        currentPosition.col = 3;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 3) {
        currentPosition.row = 3;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 2) {
        currentPosition.row = 2;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 1) {
        currentPosition.row = 1;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 4) {
        currentPosition.row = 4;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 0) {
        currentPosition.row = 0;
        currentPosition.col = 0;
    }
    else {
        currentPosition.row--;
        currentPosition.col++;
    }
    renderBoard();

}
function moveRightDown() {
    if (currentPosition.row === 4 && currentPosition.col === 4) {
        currentPosition.row = 0;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 3) {
        currentPosition.row = 1;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 2) {
        currentPosition.row = 2;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 1) {
        currentPosition.row = 3;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 3 && currentPosition.col === 4) {
        currentPosition.row = 0;
        currentPosition.col = 1;
    }
    else if (currentPosition.row === 2 && currentPosition.col === 4) {
        currentPosition.row = 0;
        currentPosition.col = 2;
    }
    else if (currentPosition.row === 1 && currentPosition.col === 4) {
        currentPosition.row = 0;
        currentPosition.col = 3;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 0) {
        currentPosition.row = 4;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 4) {
        currentPosition.row = 0;
        currentPosition.col = 4;
    }
    else {
        currentPosition.row++;
        currentPosition.col++;
    }
    renderBoard();
}

function moveLeftDown() {
    if (currentPosition.row === 4 && currentPosition.col === 0) {
        currentPosition.row = 0;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 1) {
        currentPosition.row = 1;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 2) {
        currentPosition.row = 2;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 3) {
        currentPosition.row = 3;
        currentPosition.col = 4;
    }
    else if (currentPosition.row === 3 && currentPosition.col === 0) {
        currentPosition.row = 0;
        currentPosition.col = 3;
    }
    else if (currentPosition.row === 2 && currentPosition.col === 0) {
        currentPosition.row = 0;
        currentPosition.col = 2;
    }
    else if (currentPosition.row === 1 && currentPosition.col === 0) {
        currentPosition.row = 0;
        currentPosition.col = 1;
    }
    else if (currentPosition.row === 0 && currentPosition.col === 0) {
        currentPosition.row = 0;
        currentPosition.col = 0;
    }
    else if (currentPosition.row === 4 && currentPosition.col === 4) {
        currentPosition.row = 4;
        currentPosition.col = 4;
    }
    else {
        currentPosition.row++;
        currentPosition.col--;
    }
    renderBoard();
}


document.addEventListener("DOMContentLoaded", function () {
    renderBoard();
});
