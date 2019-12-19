  let scores, roundScore, activePlayer,gamePlaying,dice;
let diceImg =  document.querySelector(".dice");
  init();

  //add event to the button"roll dice"
  document.querySelector(".btn-roll").addEventListener("click", function() {
    //1.generate a random number
    if (gamePlaying) {
      dice = Math.floor(Math.random() * 6) + 1;
      //2.select a dice
      //3.add display prop to a dice img.It is visible again when we start the game
      diceImg.style.display = 'block';
      //4.Changing the dice img according to the random number
      diceImg.src = "img/dice-" + dice + '.png';

    if (dice !== 1) {
      //if the random number is not 1, then increase the score by random number;
      roundScore += dice;
      //select the current score in a box "current" Change it
      document.querySelector("#current-" + activePlayer).textContent = roundScore;

    } else {
      //if the random number = 1 then
      nextPlayer();
    }
  }
  });
  // document.getElementById("score-0").textContent = "0";
  // document.getElementById("score-1").textContent = "0";


document.querySelector(".btn-hold").addEventListener("click", function() {
  if(gamePlaying) {
    //Add current score to global score
    scores[activePlayer] += roundScore;
    //update the big score number
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if payer win the game
    if((scores[activePlayer]) >= 10) {
      document.querySelector('#name-' + activePlayer).textContent = "Winner!!!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + '-panel').classList.add('winner');
      document.querySelector(".player-" + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }

  // nextPlayer();
});


function nextPlayer() {
  //1. we switch the player
  (activePlayer == 0) ? activePlayer = 1 : activePlayer = 0;
  //set the score to
  roundScore = 0;

  document.getElementById("current-0").textContent = '0';
  document.getElementById("current-1").textContent = '0';
  document.querySelector(".player-0-panel").classList.toggle('active');
  document.querySelector(".player-1-panel").classList.toggle('active');
  document.querySelector(".dice").style.display = "none";

}
document.querySelector(".btn-new").addEventListener("click", init);

  function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    //Hide the dice img with display none
    diceImg.style.display = 'none';
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
  }
