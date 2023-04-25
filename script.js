
let secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;

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
    } else {
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
