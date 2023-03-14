//game constants
const gameInstructions = $('#instructions-text');
const playButton = $('#game-button');
const gameGrid = $('.grid-container');

//symbols
const xSymbol = "X";
const oSymbol = "O";

//selecting grid cells
const gridCells = document.getElementsByClassName('grid-cell');

//organize my grid

let gameCell1 = $(".grid-cell top-left");
let gameCell2 = $(".grid-cell top-middle");
let gameCell3 = $(".grid-cell top-right");
let gameCell4 = $(".grid-cell middle-left");
let gameCell5 = $(".grid-cell middle");
let gameCell6 = $(".grid-cell middle-right");
let gameCell7 = $(".grid-cell bottom-left");
let gameCell8 = $(".grid-cell bottom-middle");
let gameCell9 = $(".grid-cell bottom-right");


let turn = 0;
let gameStatus = ["", "", "", "", "", "", "", ""];

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

function fillTheGrid() {
    for (let i = 0; i < gridCells.length; i++) {
        
        gridCells[i].addEventListener("click", () => {
        if (gameIsActive === true && (gameStatus[i] === "")){
            for (const gridCell of gridCells){
        if (turn % 2 === 0) {
            gameInstructions.html(`Player ${xSymbol} take your turn.`);
            gridCells[i].innerHTML = `${oSymbol}`;
            gridCells[i].style.color = '#638beb';
            gameStatus[i] = `${oSymbol}`
            
            
    
        } else {
            
            gameInstructions.html(`Player ${oSymbol} take your turn.`);
            gridCells[i].innerHTML = `${xSymbol}`;
            gridCells[i].style.color = '#f57b42';
            
            gameStatus[i] = `${xSymbol}`
            
            //console.log(gameStatus);
            
        }
        //checkWinStatus();
        turn++;
        console.log(turn);}

    

    }
    });
        
    }
}
   


//game logic

fillTheGrid();



function checkWinStatus() {
    
let topLeft = gameStatus[0]
  let topMiddle = gameStatus[1]
  let topRight = gameStatus[2]
  let middleLeft = gameStatus[3]
  let middleMiddle = gameStatus[4]
  let middleRight = gameStatus[5]
  let bottomLeft = gameStatus[6]
  let bottomMiddle = gameStatus[7]
  let bottomRight = gameStatus[8]

    if (topLeft === topMiddle && topLeft === topRight) {
    gameIsActive = false;
    winner = topLeft;
    
  } else if (middleLeft === middleMiddle && middleLeft === middleRight) {
    gameIsActive = false;
    winner = middleLeft;
    
  } else if (bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    gameIsActive = false;
    winner = bottomLeft;

  } else if (topLeft === middleLeft && topLeft === bottomLeft){
    gameIsActive = false;
    winner = topLeft;
    
  } else if (topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    gameIsActive = false;
    winner = topMiddle;
  } else if (topRight === middleRight && topRight === bottomRight) {
    gameIsActive = false;
    winner = topRight;
  } else if (topLeft === middleMiddle && topLeft === bottomRight) {
    gameIsActive = false;
    winner = topLeft;

  } else if (topRight === middleMiddle && topRight === bottomLeft) {
    gameIsActive = false;
    winner = topRight;
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsActive = false;
  }

    }

    //for loop, current iteration to winner
    //creat variables for each win condition
    /*for (let i = 0; i < 9; i++) {
        

    }

}

/* let winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]; */


//find a winner
//checkWinStatus();