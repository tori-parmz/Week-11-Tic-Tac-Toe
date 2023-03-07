//game constants
const gameInstructions = $('#instructions-text');
const playButton = $('#game-button');
const gameGrid = $('.grid-container');

//symbols
const xSymbol = "x";
const oSymbol = "o";

//selecting grid cells
const gridCells = document.querySelectorAll(".grid-cell");

let turn = 0;

//game begins with game inactive
let gameIsActive = false;
let winner = null;

function refreshPage() {
    window.location.reload();
  }

//click to start game

playButton.on("mousedown", () => {
    if(playButton.text() === 'Start Game') {
        playButton.text('Reset Game');
        playButton.removeClass('btn btn-success');
        playButton.addClass('btn btn-primary');
        gameInstructions.html(`Player ${xSymbol} take your turn.`);
        turn++;
        gameIsActive = true;

    } else {
        playButton.text('Start Game');
        playButton.removeClass('btn btn-primary');
        playButton.addClass('btn btn-success');
        gameInstructions.text('To play a new game, click the "Start Game" button.')
        refreshPage();

    }
});

//update instructions

function fillTheGrid(e) {
    if (gameIsActive === true){
        for (const gridCell of gridCells){
  if (turn % 2 === 0) {
        console.log("x turn");
        gameInstructions.html(`Player ${xSymbol} take your turn.`);


    } else {
        console.log("o turn");
        gameInstructions.html(`Player ${oSymbol} take your turn.`);
    }}
    turn++;
    console.log(turn);}
    }


//game logic

function checkWinStatus() {

}


//find a winner

//creates event listener for each cell that is clicked
for (const gridCell of gridCells) {
    //handles a cell of all cells
    
    gridCell.addEventListener("click", fillTheGrid);
}

console.log(turn);