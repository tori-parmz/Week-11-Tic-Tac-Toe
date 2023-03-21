//game constants
const gameInstructions = $('#instructions-text');
const instructionsBackground = $('.instructions');
const playButton = $('#game-button');

//currentPlayer begins on string X because X will take the first turn
let currentPlayer = 'X'

//select grid cells
const gridCells = document.getElementsByClassName('grid-cell');

//game begins with game inactive and winner null
let gameIsActive = false;
let winner = null;

function refreshPage() {
    window.location.reload();
  }

//click to start game, game becomes active and instructions text changes

playButton.on("mousedown", () => {
    if(playButton.text() === 'Start Game') {
        playButton.text('Reset Game');
        playButton.removeClass('btn btn-success');
        playButton.addClass('btn btn-primary');
        gameIsActive = true;
        gameInstructions.html(`Player ${currentPlayer} take your turn.`);

    } else {
        playButton.text('Start Game');
        playButton.removeClass('btn btn-primary');
        playButton.addClass('btn btn-success');
        gameInstructions.text('To play a new game, click the "Start Game" button.')
        refreshPage();

    }
});

//a for/of loop adds an event listener to each of the grid cells

function fillTheGrid() {
  
  for (let gridCell of gridCells){
  
  gridCell.addEventListener("click", () => {

    if (gameIsActive === true &&(gridCell.innerHTML === '')) { //game must be active and cell must be empty
          //console.log('passed condition');
          gridCell.innerHTML = `${currentPlayer}`;
          
          if (currentPlayer === 'X') { //automatically switches to player O after click event
            currentPlayer = 'O';
            gridCell.style.color = '#f57b42';
            //console.log(currentPlayer);
          } else {
            currentPlayer = 'X';
            gridCell.style.color = '#638beb';
            //console.log(currentPlayer);
          }
          gameInstructions.html(`Player ${currentPlayer} take your turn.`); //updates instructions after the current player is switched
          checkWinStatus(); //after all of this is done, it will check fo win status
      
      
          }
      });
    } 
  }

fillTheGrid();



function checkWinStatus() {

  //assign the variables to compare using the indexes of the grid cells
  //comparing the inner html
  const topLeft = gridCells[0].innerHTML;
  const topMiddle = gridCells[1].innerHTML;
  const topRight = gridCells[2].innerHTML;
  const middleLeft = gridCells[3].innerHTML;
  const middleMiddle = gridCells[4].innerHTML;
  const middleRight = gridCells[5].innerHTML;
  const bottomLeft = gridCells[6].innerHTML;
  const bottomMiddle = gridCells[7].innerHTML;
  const bottomRight = gridCells[8].innerHTML;


    if (topLeft && topLeft === topMiddle && topLeft === topRight) { //top row is all the same
    gameIsActive = false;//game is no longer active
    winner = topLeft; //assigns winner
    console.log('Winner: ', winner);
    
    gameInstructions.html(`${winner} is the winner!`); //announces winner
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');

  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) { //middle row is all the same
    gameIsActive = false;
    winner = middleLeft;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');
    
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) { //bottom row is all the same
    gameIsActive = false;
    winner = bottomLeft;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');

  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft){ //left side
    gameIsActive = false;
    winner = topLeft;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');
    
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) { //middle column
    winner = topMiddle;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');

  } else if (topRight && topRight === middleRight && topRight === bottomRight) { //right side
    gameIsActive = false;
    winner = topRight;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');

  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) { //diagonal top left to bottom right
    gameIsActive = false;
    winner = topLeft;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');

  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) { //diagonal top right to bottom left
    gameIsActive = false;
    winner = topRight;
    console.log('Winner: ', winner);
    gameInstructions.html(`${winner} is the winner!`);
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#7ec466');

  } else if ( //tie condition
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
    gameIsActive = false; //game is no longer active
    console.log('No winner');
    gameInstructions.html(`It's a tie!`); //announces tie
    gameInstructions.css("color",'white');
    gameInstructions.css("font-size",'2rem');
    instructionsBackground.css("background-color",'#e08767');
  }
  
}


/* Win Conditions
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// */