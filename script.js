const instructions = document.getElementById("inst")
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const finish = document.getElementById("all-done")
const doneButton = document.getElementById('done-btn')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
doneButton.addEventListener("click", function () {
    doneButton.classList.add('hide')
    resetState();
    questionElement.classList.add('hide')
    finish.classList.remove("hide")
})

function startGame() {
  startButton.classList.add('hide')
  instructions.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')

  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    doneButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [{ text: "strings", correct: false }, { text: "Booleans", correct: false }, { text: "alerts", correct: true}, {text: "numbers", correct: false}]
      },
      {
        question: "The condition in an if / else statement is enclosed within ___?",
        answers: [
          { text: "quotes", correct: false },
          { text: "curly brackets", correct: false },
          { text: "parentheses", correct: true },
          { text: "square brackets", correct: false}
        ]
      },
      {
        question: "Arrays in JavaScript can be used to store ____",
        answers: [
          { text: "Number and strings", correct: false },
          { text: "Other arrays", correct: false },
          { text: "booleans", correct: false },
          { text: "All the above", correct: true }
        ]
      },
      {
        question: "String values must be enclosed within ___ when being assigned to variables.",
    
        answers: [
            { text: "commas", correct: false },
             { text: "curly brackets", correct: false }, 
             {text: "quotes", correct: false}, 
             {text: "parentheses", correct: true}
            ]
      },
      {
        question: "A very useful tool used during development and debugging for priting content to the debugger is:",
    
        answers: [
            { text: "JavaScript", correct: false },
             { text: "terminal/ bash", correct: false }, 
             {text: "for loops", correct: false}, 
             {text: "console. log", correct: true}
            ]
      }
]


