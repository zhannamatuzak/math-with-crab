/*jshint esversion: 6 */

/**
 * Wait for the DOM to filish loading befor running the game
 * Run the main screen with greeting and user (child) log-in
*/
document.addEventListener('DOMContentLoaded', function () {
runMainScreen();
});

/**
 * Set up of global variables to vary display/hide
 */
let greeting = document.getElementById("user-input");
let childName = document.getElementById("child-name");
let errorMessage = document.getElementById("error-message");
let gameSet = document.getElementById("game-set");
let startBtn = document.getElementById("start-btn");
let newGame = document.getElementById("new-game");
let scoreArea = document.getElementById("score-area");
let timeDisplay = document.getElementById("time-display");
let question = document.getElementById("question");
let happy = document.getElementById("happy");
let cry = document.getElementById("cry");
let submitBtn = document.getElementById("submit-btn");

/**
 * Global variables to set timer and to check score and correct answer
 */
let timeLeft = 31;
let timerInterval;
let correctAnswer = 0;
let score = 0;
let highScore = 0;
let operationField = document.getElementById("operation");
let currentScore = document.getElementById("current-score");
let timerSecondsshown = document.getElementById("timer-seconds");

/**
 * Block-scoped local variables for modal window
 */
const rules = document.querySelector('#rules-btn');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');

/**
 * Supportive functions to shorten the code length
 */
function errorsTimerEmoji() {
  errorMessage.style.display = "none";
  timeDisplay.style.display = "none";
  cry.style.display = "none";
  happy.style.display = "none";
}

function btnTrue() {
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
}

/** 
 * Variable with an array elements
 */
let elementsToModify = [rules, gameSet, startBtn, newGame, scoreArea, childName, question];

/**
* Show the main screen with greeting and user (child) log-in
*/
function runMainScreen() {
  for (let el in elementsToModify) {
    elementsToModify[el].style.display = "none";
  }
  greeting.style.display = "block";
  document.getElementById("child-name").innerText = "";
  document.getElementById("user").focus();
  question.style.display = "none";
  errorsTimerEmoji();
}

/**
 * Varification of user (child) name and a later interaction with it
 */
document.getElementById("submit-btn").addEventListener("click", checkUsername);

function checkUsername() {
  let username = document.getElementById("user").value.trim();
  if (username.length >= 1 && username.length <= 10 && username == username.charAt(0).toUpperCase() + username.slice(1)){
    document.getElementById("child-name").innerText = username + ",";
    document.getElementById("child-name-rule").innerText = username + ",";
    greeting.style.display = "none";
    newGame.disabled = true;
    for (let el in elementsToModify) {
      elementsToModify[el].style.display = "block";
    }
    errorsTimerEmoji();
    btnTrue();
    document.getElementById("welcome").play();

  } else {
    errorMessage.style.display = "block";
    timeDisplay.style.display = "block";
  }
  
}

checkUsername();

/**
 * When the start button is clicked, the function nextQuestion will be called and 
 * The timer will be triggered to start and when it gets 0, the game stops
 * Setting interval: the time that is left decreases; for every second the time will be changed
 * 1000 milliseconds are between the seconds
 */
document.getElementById("start-btn").addEventListener("click", startGame);

function startGame() {
  timeDisplay.style.display = "block";
  startBtn.disabled = true;
  newGame.disabled = false;
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  nextQuestion();
  timerInterval = setInterval(function () {
    // Time decrease for 1 second
    timeLeft -= 1;
    // Showing time that is left
    timerSecondsshown.innerHTML = timeLeft;
    if (timeLeft == 0) {
      // Time stops changing after getting to 0
      clearInterval(timerInterval);
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
    }
  }, 1000);
}

/**
 * resetGame resets game screen and prepare for the next game. 
 * As well resetGame resets timer and score
 */
document.getElementById("new-game").addEventListener("click", resetGame);

function resetGame() {
  resetTimer(); 
  startBtn.disabled = false;
  newGame.disabled = true;
  cry.style.display = "none";
  happy.style.display = "none";
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn1").textContent = 'x',
  document.getElementById("btn2").textContent = 'x',
  currentScore.textContent = 'Current Score: 0';
  score = 0;
  operationField.textContent = '0 + 0';
}

/**
 * resetTimer resets timer
 */
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 31;
    timerSecondsshown.innerHTML = 0;
}
  
/**
 * The nextQuestion function will choose the random operation
 * And change the buttons to equal 2 addition results
 * One of this results should be the correct answer
 */
function nextQuestion() {
  // Highest possible number to add and 10 will be the highest answer
  let firstNum = Math.floor(Math.random() * 5);
  let secondNum = Math.floor(Math.random() * 5);
  
  correctAnswer = firstNum + secondNum;
  operationField.innerHTML = firstNum + "+" + secondNum;
  // Set buttons to have random answers and one should be the correct naswer
  
  let wrongAnswer1 = Math.floor(Math.random() * 5) + Math.floor(Math.random() * 5);
  let wrongAnswer2 = Math.floor(Math.random() * 5) + Math.floor(Math.random() * 5);
  if (wrongAnswer1 == correctAnswer || wrongAnswer2 == correctAnswer) nextQuestion();

  // Set buttons to have each of the answers
  document.getElementById("btn1").innerHTML = wrongAnswer1;
  document.getElementById("btn2").innerHTML = wrongAnswer2;
  
  // Index to put in the correctAnswer
  let correctAnswerIndex = Math.floor(Math.random()*2)+1; // 1 2  
  // Extract the id
  let correctAnswerId = "btn" + correctAnswerIndex;
  document.getElementById(correctAnswerId).innerHTML = correctAnswer;
}

/**
 * checkAnswer checks whether the result is correct
 * shows the current and high score
 */
function checkAnswer(buttonIndex) {
  let answer = document.getElementById("btn" + buttonIndex).innerHTML;
  if (answer == correctAnswer) {
    score += 1;
    cry.style.display = "block";
    happy.style.display = "none";
  }
  else {
    happy.style.display = "block";
    cry.style.display = "none";
  }
  currentScore.innerHTML = "Current Score: " + score;
  if (score > highScore) highScore = score;
  localStorage.setItem("high-score", highScore);
  document.getElementById("high-score").innerHTML = "High Score: " + highScore;
  nextQuestion();
}

/**
 * Set the high score using Window localStorage Property
 */
window.onload = function () {
  let scoreFromBrowser = localStorage.setItem("high-score", highScore);
  if (scoreFromBrowser != undefined) {
    highScore = scoreFromBrowser;
  }
  else {
  }
  document.getElementById("high-score").innerHTML = "High Score: " + highScore;
}

/** 
 * Open Instructions button
 */
rules.addEventListener('click', openModal);

/**
 * Close instructions 
 * */
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});

/**
 * Open instructions modal window
 */
function openModal() {
  modal.classList.remove('modal--hidden');
  overlay.classList.remove('overlay--hidden');
  document.getElementById("welcome").play().disabled = true;
}

/**
 * Close instructions modal window
 */
function closeModal () {
  modal.classList.add('modal--hidden');
  overlay.classList.add('overlay--hidden');
}

let audioOn = false;
let audion = document.getElementById("welcome");
document.getElementById("audio-btn").addEventListener("click", function () {
  if (audioOn) {
    audio.pause();
    // turn audio off - you need to add some funcionality here
    // then you need to update your boolean
    audioOn = false;
    // update the icon
    // do something here with the class hidden and it to one
    document.getElementById("off").classList.add("hidden");
    document.getElementById("on").classList.remove("hidden");
  } else {
    audio.play();
    // turn audio on
    audioOn = true;
    document.getElementById("on").add("hidden");
    document.getElementById("off").remove("hidden");
    // update the icon
  }
});