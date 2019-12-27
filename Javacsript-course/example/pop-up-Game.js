
2
function Question(question,answers,correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}
const question1 = new Question("Where come from the best beer in the world?" , [" England", " Germany", " Czech Republic"], 2);
const question2 = new Question("Where come from the best cheese in the world?" , [" Russia", " Switzerland",": Germany" ], 1);
const question3 = new Question("Where come from the best fish in the world?" , [" Russia", "Germany", " Africa"], 0);

let questions = [question1,question2, question3];



// Question.prototype.randomNumber = function () {
//   let n = (Math.floor(Math.random() * questions.length ));
// };
//
// Question.prototype.randomQuestion = function ()  {
//   console.log(this.question);
//   for(let i = 0; i < this.answers.length; i++) {
//     console.log(i + " : " + this.answers[i]);
//   }
//
// };
//
//
// questions[n].randomQuestion();
//
//
//  let yourAnswer = +prompt("enter number of your answer");
//
//
//
//
// Question.prototype.isCorrect = function (ans) {
//   if(ans == this.correctAnswer ) {
//     console.log(" you are correct!!!")
//     yourAnswer = +prompt("enter number of your answer");1
//   } else {
//     console.log("think twice before choosing ")
//   }
// };
// let n ;
// question1.randomNumber();
// questions[n].isCorrect(yourAnswer);
// questions[n].randomQuestion();

Question.prototype.randomQuestion = function () {
  console.log(this.question);
  for (let i = 0; i < this.answers.length; i++) {
    console.log(i + " : " + this.answers[i]);
  }
};
Question.prototype.checkAnswer = function (ans) {
  if(ans === this.correctAnswer) {
    console.log('correct Answer')
  }
};
function score() {
  let sr = 0;
  return function(correct) {
    if(correct) {
      sr++;
    }
    return score;
  }
}
let keepScore = score();
function nextQuestion() {

  let n = +(Math.floor(Math.random() * questions.length ));
  questions[n].randomQuestion();
  let yourAnswer = prompt("enter number of your answer");

  if(Number(yourAnswer) === questions[n].correctAnswer ) {
    score++;
    console.log(" you are correct!!!");
    console.log("your score is " + score );
    console.log("+++++++++++++++++++++++++++++++++++");
    nextQuestion()
  }else if(yourAnswer === "exit") {

   console.log('Bye Bye . Have a nice day');
  console.log("You final score is " + score);
  return;

  } else {
    console.log("think twice before choosing ");
    score--;
    console.log('Your score is ' + score);
     console.log("------------------------------------");
    nextQuestion()
  }

  }






nextQuestion();