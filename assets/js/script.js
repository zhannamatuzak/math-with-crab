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
const rules = document.querySelector('#rules-btn');
let gameSet = document.getElementById("game-set");
let startBtn = document.getElementById("start-btn");
let newGame = document.getElementById("new-game");
let scoreArea = document.getElementById("score-area");
let timeDisplay = document.getElementById("time-display");
let question = document.getElementById("question");
let happy = document.getElementById("happy");
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
  cry.style.display = "none";
  happy.style.display = "none";
}

/**
 * Varification of user (child) name and a later interaction with it
 */
document.getElementById("submit-btn").addEventListener("click", checkUsername);



function checkUsername() {
  let username = document.getElementById("user").value.trim();


  if (username.length >= 1 && username.length <= 10 && username[0] == username[0].toUpperCase()){
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
    cry.style.display = "none";
    happy.style.display = "none";
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
 * Timer variable constant for start/reset timer functions
 * It is global and can be used in startGame function 
 */
let timeLeft = 10;
let timerInterval;
let correctAnswer = 0;
timerSecondsshown = document.getElementById("timer-seconds");

/**
 * When the start button is clicked, the function nextQuestion will be called and 
 * The timer will be triggered to start and when it gets 0, the game stops
 * Setting interval: the time that is left decreases; for every second the time will be changed
 * 1000 milliseconds are between the seconds
 */
function startGame() {
  timeDisplay.style.display = "block";
  startBtn.disabled = true;
  
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
  }, 1000)
}
const currentScore = document.getElementById("current-score");
function resetGame() {
  resetTimer();
  startGame();; 
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  currentScore.textContent = 'Current Score: 0';
  
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    timerSecondsshown;
    
  }
/**
 * The nextQuestion function will choose the random operation
 * And change the buttons to equal 4 addition results
 * One of this results should be the correct answer
 */
function nextQuestion() {
  let operationField = document.getElementById("operation");
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
 * function that checks whether the result is correct
 */
function checkAnswer(buttonIndex) {
  let cry = document.getElementById("cry");
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
  
  document.getElementById("current-score").innerHTML = "Current Score: " + score;
  
  nextQuestion();
}



const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');


/** 
 * Open Instructions 
 * */
rules.addEventListener('click', openModal);

  //Close instructions 
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
};

/**
 * Close instructions modal window
 */
function closeModal () {
  modal.classList.add('modal--hidden');
  overlay.classList.add('overlay--hidden');
};