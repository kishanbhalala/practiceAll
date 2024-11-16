const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let countdown;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    countdown = setInterval(updateTimer, 1000);
    isRunning = true;
    startButton.textContent = 'Pause';
  } else {
    clearInterval(countdown);
    isRunning = false;
    startButton.textContent = 'start';
  }
}

function resetTimer() {
  clearInterval(countdown);
  isRunning = false;
  startButton.textContent = 'Start';
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(countdown);
      isRunning = false;
      startButton.textContent = 'Start';
      // You could add a sound or notification here to signal the end of a Pomodoro session.
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
