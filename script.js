
var board = [
    ["","",""],
    ["","",""],
    ["","",""]
];

var symbols = ["X", "O"];
var playerX;
var playerO;
var turn;

function getValue(row, column){
    return board[row][column]
};

function setValue(row, column, value){
    board[row][column] = value;

   // console.log(board);
}

function playGame(rowChoice, columnChoice){
    var rowChoice = parseInt(prompt("enter a row"));
    var columnChoice = parseInt(prompt("enter a column"));
if (rowChoice, columnChoice == 0)
    setValue(`${rowChoice}`,`${columnChoice}`, `${symbols[0]}`);

    alert("Time for O to play!");

    var rowChoice = parseInt(prompt("enter a row"));
    var columnChoice = parseInt(prompt("enter a column"));
    setValue(`${rowChoice}`,`${columnChoice}`, `${symbols[1]}`);
    console.log(board)
}


playGame();

function renderBoard2(board) {
    for (var i = 0; i < board.length; i++) {
        var rowArr = [];
        for (var y = 0; y < board[i].length; y++) {
            var cell = `<div id="${i}${y}">${getValue(i, y)}</div>`
            rowArr.push(cell)

        }
      //  console.log(rowArr);
    }
}

//setValue(2, 2, symbols[0]); */

/*
var content = document.getElementById('content');

var ticTacToe = "Replace this with your own abstraction of Tic Tac Toe"

content.innerHTML = renderGame(ticTacToe);


function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button>X</button>
                <button>O</button>
                <button>X</button>
            </div>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
            <div class="w-50 text-center">
                <button>O</button>
                <button>-</button>
                <button>X</button>
            </div>
        </div>
    `
} */