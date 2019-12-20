let scores, roundScore, activePlayer, gamePlaying, dice1,dice2, previousDice, maxScore;
let dice1Img = document.querySelector(".dice1");
let dice2Img = document.querySelector(".dice2");

  init();
  //add event to the button"roll dice"
  document.querySelector(".btn-roll").addEventListener("click", function () {
  //1.generate a random number

  if (gamePlaying) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1);
    console.log(dice2);
    //2.select a dice
    //3.add display prop to a dice img.It is visible again when we start the game
    dice1Img.style.display = 'block';
    dice2Img.style.display = 'block';
    //4.Changing the dice img according to the random number
    dice1Img.src = "img/pig-game/dice-" + dice1 + '.png';
    dice2Img.src = "img/pig-game/dice-" + dice2 + '.png';
    if (dice1 == 1 || dice2 == 1) {
      console.log("bingo")
      nextPlayer();
    }

    if (dice1 !== 1 || dice2 !== 1) {
      //if the random number is not 1, then increase the score by random number;
      roundScore += dice1 + dice2;
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


document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    //Add current score to global score
    scores[activePlayer] += roundScore;
    //update the big score number
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if payer win the game

    if ((scores[activePlayer]) >= maxScore) {
      document.querySelector('#name-' + activePlayer).textContent = "Winner!!!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + '-panel').classList.add('winner');
      document.querySelector(".player-" + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
      previousDice = 0;
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
  previousDice = 0;
  document.getElementById("current-0").textContent = '0';
  document.getElementById("current-1").textContent = '0';
  document.querySelector(".player-0-panel").classList.toggle('active');
  document.querySelector(".player-1-panel").classList.toggle('active');
  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice2").style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  previousDice = 0;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  //Hide the dice img with display none
  dice1Img.style.display = 'none';
  dice2Img.style.display = 'none';
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
document.querySelector(".btn-input").addEventListener("click",setMaxScore);

 function setMaxScore() {

   let input = document.querySelector(".input-field");
  let score = +(input.value);
   if(isFinite(score) && score > 0) {
     maxScore = score ;
     console.log(maxScore)
   }
   input.value = " ";
 }