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
  document.getElementById("child-name").innerText = "";
  document.getElementById("user").focus();
}

function checkUsername() {
}

function startGame() {
}

function nextQuestion() {
}

function checkAnawer() {
}





