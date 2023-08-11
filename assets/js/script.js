/**
 * Wait for the DOM to filish loading befor running the game
 * Run the main screen with greeting and user (child) log-in
*/
document.addEventListener('DOMContentLoaded', function () {
runMainScreen();
});

/**
 * Set up of game variables to vary display/hide
 */
let greeting = document.getElementById("user-input");
let childName = document.getElementById("child-name");
let errorMessage = document.getElementById("error-message");
let rules = document.getElementById("rules-btn");
let gameSet = document.getElementById("game-set");
let startBtn = document.getElementById("start-btn");
let newGame = document.getElementById("new-game");
let scoreArea = document.getElementById("score-area");
let timeDisplay = document.getElementById("time-display");
let question = document.getElementById("question");

/**
* Show the main screen with greeting and user (child) log-in
*/
function runMainScreen() {
  greeting.style.display = "block";
  errorMessage.style.display = "none";
  rules.style.display = "none";
  gameSet.style.display = "none";
  startBtn.style.display = "none";
  newGame.style.display = "none";
  scoreArea.style.display = "none";
  childName.style.display = "none";
  timeDisplay.style.display = "none";
  document.getElementById("child-name").innerText = "";
  document.getElementById("user").focus();
  question.style.display = "none";
}

/**
 * Varification of user (child) name and a later interaction with it
 */
document.getElementById("submit-btn").addEventListener("click", checkUsername);

function checkUsername() {
  let username = document.getElementById("user").value.trim();

  if (username.length >= 1 && username.length <= 10) {
    document.getElementById("child-name").innerText = username + ",";
    document.getElementById("child-name-rule").innerText = username + ",";
    greeting.style.display = "none";
    errorMessage.style.display = "none";
    rules.style.display = "block";
    gameSet.style.display = "block";
    startBtn.style.display = "block";
    newGame.style.display = "block";
    scoreArea.style.display = "block";
    childName.style.display = "block";
    question.style.display = "block";
    timeDisplay.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    document.getElementById("user").focus();
    document.getElementById("user").value = "";
    }
}

checkUsername();

/**
 * Set up a variable for the timer.
 * 10 is the amount of seconds
 */
let timeLeft = 10;
// Timer variable constant for start/reset timer functions 
// It is global and can be used in startGame function
let timer = document.getElementById("timer");
let timerInterval;

/**
 * When the start button is clicked, the function nextQuestion will be called and 
 * the timer will be triggered to start
 * When the timer gets 0, the game stops
 */
function startGame() {

  timeDisplay.style.display = "block";

  startBtn.disabled = true;

  timerInterval = setInterval(function () {
    // Time decrease for 1 second
    timeLeft -= 1;
    // Showing time that is left
    timeDisplay.innerHTML = timeLeft;
    if (timeLeft == 0) {
      // Time stops changing after getting to 0
      clearInterval(timerInterval);
    }
  // Setting interval: the time that is left decreases.
  // For every second the time will be changed.
  // 1000 milliseconds are between the seconds
  }, 1000)
  
  nextQuestion()
}

/**
 * The nextQuestion function will choose the random operation
 * And change the buttons to equal 4 addition results
 * One of this results should be the correct answer
 */
function nextQuestion() {
  let operationField = document.getElementById("operation");
  // Highest possible number to add
  // 10 will be the highest answer
  let firstNum = Math.floor(Math.random() * 5);
  let secondNum = Math.floor(Math.random() * 5);
  let correctAnswer = firstNum + secondNum;
  operationField.innerHTML = firstNum + "+" + secondNum;
}

function checkAnawer() {
}





