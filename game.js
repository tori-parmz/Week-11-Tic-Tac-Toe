
//console.log($('body'));

const gameInstructions = $('#instructions-text');
const playButton = $('#game-button');
const gameGrid = $('.grid-container');

const xSymbol = "x";
const oSymbol = "o";

const gridCells = document.querySelectorAll(".grid-cell");

let turn = 0;

let gameIsLive = true;
let winner = null;

function refreshPage() {
    window.location.reload();
  }

//instructions

  let gamePlayText = () => {
    if (turn % 2 == 0){
        return `Player ${xSymbol} take your turn.`
        
    } else {
        return `Player ${oSymbol} take your turn.`
    }
}

//click to start game

playButton.on("mousedown", () => {
    //console.log('Button works');
    if(playButton.text() === 'Start Game') {
        playButton.text('Reset Game');
        playButton.removeClass('btn btn-success');
        playButton.addClass('btn btn-primary');
        gameInstructions.html(gamePlayText);

    } else {
        playButton.text('Start Game');
        playButton.removeClass('btn btn-primary');
        playButton.addClass('btn btn-success');
        gameInstructions.text('To play a new game, click the "Start Game" button.')
        refreshPage();

    }
});

//fill in the grid

function fillTheGrid() {
   for (const gridCell of gridCells) {
    if (turn % 2 === 0) {
        gridCell.html(`${xSymbol}`);
        turn++;
    } else {
        gridCell.html(`${oSymbol}`);
        turn++
    }
}
}

//game logic

function checkWinStatus() {

}


//find a winner

for (const gridCell of gridCells) {
    //handles a cell of all cells
    gridCell.addEventListener("click", console.log(`I'm alive!`));
}
