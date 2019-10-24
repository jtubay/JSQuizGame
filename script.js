var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("questions");
var answersList = document.getElementById("answers");

startBtn.addEventListener("click", function(event) {
    document.getElementById("start-screen").classList.add("d-none")
    document.getElementById("qa-screen").classList.remove("d-none")

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
