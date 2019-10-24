//global variables defined for ease

var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("questions");
var answersList = document.getElementById("answers");
var timeEl = document.getElementById('time');
let secondsLeft = 60;


//timer function
function setTime () {
    var timerInterval = setInterval(function(){
      secondsLeft --;
      timeEl.textContent = "You have " + secondsLeft + " seconds left"
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        document.getElementById("qa-screen").classList.add("d-none")
        document.getElementById("end-screen").classList.remove("d-none")
      }
  
    }, 1000)
  };

//event that triggers the game and hides the start screen
startBtn.addEventListener("click", function(event) {
    document.getElementById("start-screen").classList.add("d-none")
    document.getElementById("qa-screen").classList.remove("d-none")
    setTime();

    questionHeading.textContent = questions[0].title;
    answersList.innerHTML = " ";

var choices =questions[0].choices
for(var i =0; i< choices.length; i++){
    var newChoice = document.createElement("button")
    newChoice.textContent =choices[i];
    newChoice.classList.add("btn-primary", "btn")
    newChoice.setAttribute("style", "display:block; margin-bottom:10px")
    answersList.appendChild(newChoice)

}
});
