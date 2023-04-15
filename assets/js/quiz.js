// DOM elements
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");

//timer variables
var time = questions.length * 10;
var timerId;
//variable for questions array
var currentQuestionIndex = 0;

function startQuiz() {
  // hide start screen, show questions and start timer with 1 sec tick interval
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get question and display title from array
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  // clear content
  choicesEl.innerHTML = "";

  // loop over choices and create buttons for each choice with event listeners
  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 20;

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Incorrect!";
    // play feed back sound
    var audio = new Audio("./assets/sfx/loose.wav");
    audio.play();
  } else {
    feedbackEl.textContent = "Well Done!";
    // play feed back sound
    var audio = new Audio("./assets/sfx/win.wav");
    audio.play();
  }

  // flash right/wrong feedback
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // next question if not last, if last, end quiz
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer, hide questions, show end screen
  clearInterval(timerId);
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // If timer is out of time, call quizEnd
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // save score as object
    var newScore = {
      score: time,
      initials: initials,
    };
    // saves and gets highscores
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "./highscores.html";
  }
}

function checkForEnter(event) {
  // CHECK FOR ENTER WHEN ENTERING INITIALS
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// submit initials
submitBtn.onclick = saveHighscore;

// start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
