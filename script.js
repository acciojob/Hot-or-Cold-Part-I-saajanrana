
let secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = 0;

function guessNumber() {
  const guess = parseInt(document.getElementById("guess").value);
  let message = "";
  if (guess === secretNumber) {
    message = "Congratulations! You guessed the number!";
  } else {
    const difference = Math.abs(guess - secretNumber);
    const previousDifference = previousGuess ? Math.abs(previousGuess - secretNumber) : difference + 1;
    if (difference < previousDifference) {
      message = "Getting hotter!";
    } else {var secretNumber = Math.floor(Math.random() * 100) + 1;
var previousGuess = null;

function checkGuess() {
  var guessInput = document.getElementById('guess');
  var guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    displayMessage('Please enter a valid number.');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('Congratulations! You guessed the correct number.');
  } else {
    if (previousGuess !== null) {
      var currentDifference = Math.abs(guess - secretNumber);
      var previousDifference = Math.abs(previousGuess - secretNumber);

      if (currentDifference < previousDifference) {
        displayMessage('Getting hotter!');
        if (guess < secretNumber) {
          displayMessage('Guess higher!');
        } else {
          displayMessage('Guess lower!');
        }
      } else {
        displayMessage('Getting colder!');
      }
    }

    previousGuess = guess;
  }

  guessInput.value = '';
}

function displayMessage(message) {
  var responseElement = document.getElementById('response');
  responseElement.textContent = message;
}

      message = "Getting colder!";
    }
    if (guess < secretNumber) {
      message += " Guess higher!";
    } else {
      message += " Guess lower!";
    }
    previousGuess = guess;
  }
  document.getElementById("response").textContent = message;
}
