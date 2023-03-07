
//console.log($('body'));

const gameInstructions = $('#instructions-text');
const playButton = $('#game-button');
const gameGrid = $('.grid-container');

const xSymbol = "x";
const oSymbol = "o";

let turn = 0;

function refreshPage() {
    window.location.reload();
  }

//instructions

  let gamePlayText = () => {
    if (turn % 2 == 0){
        turn++;
        return `Player ${xSymbol} take your turn.`
        
    } else {
        turn++;
        return `Player ${oSymbol} take your turn.`
    }
}
//click to start game
playButton.on("mousedown", () =>{
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

//game logic


//fill in the grid




const gamePlay = () => {

}

//find a winner


