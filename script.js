var StartButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("qa-screen");
var questionHeading = document.getElementById("question");
var answerList = document.getElementById("answers");
var timeDisplay = document.getElementById("timeremain");
var finishGame = document.getElementById("endGame");
var finalScore = document.getElementById("final-score");
var timeRemain = document.getElementById("timeEl");
var name;
var currentQuestion = 0;
var timeLeft = 75;
var timing;
var score;

function startTimer() {
  timing = setInterval(function() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft < 1) {
      clearInterval(timing);
      endScreen();
    } 
    
  }, 1000);
}

function stopTimer() {
  clearInterval(timing);
}

StartButton.addEventListener("click", function(event) {
  startScreen.classList.add("d-none");
  questionScreen.classList.remove("d-none");
  startTimer();
  setUpGame();
});

const setUpGame = () => {
  questionHeading.textContent = questions[currentQuestion].title;
  answerList.innerHTML = "";

  var answerChoices = questions[currentQuestion].choices;

  for (var i = 0; i < answerChoices.length; i++) {
    var newChoice = document.createElement("button");
    var buttonSpacing = document.createElement("div");

    newChoice.classList.add("btn", "btn-primary", "float-left", "buttons");
    newChoice.textContent = questions[currentQuestion].choices[i];
    newChoice.setAttribute("dataChoice", questions[currentQuestion].choices[i]);
    newChoice.setAttribute("onclick", "answerChecker (event)");
    buttonSpacing.classList.add("row", "text-center", "p-3");
    answerList.appendChild(newChoice);
    buttonSpacing.appendChild(newChoice);
    answerList.appendChild(buttonSpacing);
  }
};

function nextQuestion() {
  currentQuestion++;
  setUpGame();
}

function answerChecker(event) {
  if (
    event.target.attributes.dataChoice.value ===
      questions[currentQuestion].answer &&
    currentQuestion < 9
  ) {
    nextQuestion();
  } else if (
    event.target.attributes.dataChoice.value !==
      questions[currentQuestion].answer &&
    currentQuestion < 9
  ) {
    timeLeft -= 10;
    nextQuestion();
  } else {
    endScreen();
  }
}

function endScreen() {
  if (timeLeft < 0) {
    timeLeft = 0;
    timeDisplay.textContent = timeLeft;
  }
  questionScreen.classList.add("d-none");
  finishGame.classList.remove("d-none");
  score = timeLeft;
  finalScore.textContent = score;
}


