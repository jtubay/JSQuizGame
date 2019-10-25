//defined variables to be used
const StartButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("qa-screen");
const questionHeading = document.getElementById("question");
const answerList = document.getElementById("answers");
const timeDisplay = document.getElementById("timeremain");
const finishGame = document.getElementById("endGame");
const finalScore = document.getElementById("final-score");
const timeRemain = document.getElementById("timeEl");

//variables that value will change
let currentQuestion = 0;
let timeLeft = 75;
let timing;
let score;

//starts time counter
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

//function to stop timer
function stopTimer() {
  clearInterval(timing);
}

//runs when start button is clicked
StartButton.addEventListener("click", function(event) {
  startScreen.classList.add("d-none");
  questionScreen.classList.remove("d-none");
  startTimer();
  setUpGame();
});

//arrow function containing the dynamic js that will set up the questions
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

//sets next question as question is clicked 
function nextQuestion() {
  currentQuestion++;
  setUpGame();
}

//checks answers
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

//load the final screen

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


