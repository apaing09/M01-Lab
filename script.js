function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numberOfGuesses = 0;
  let prevGuess = null;

  while (numberOfGuesses < totalGuesses) {
    let promptText = "Enter a number between 1 and 100.";

    if (prevGuess !== null) {
      if (prevGuess < numToGuess) {
        promptText = `${prevGuess} is too small. Guess a larger number.`;
      } else if (prevGuess > numToGuess) {
        promptText = `${prevGuess} is too large. Guess a smaller number.`;
      }
    }

    const userGuess = prompt(promptText);
    if (userGuess === null) {
      return 0;
    }

    const guess = Number(userGuess);

    if (isNaN(guess)) {
      alert("Please enter a number.");
      continue;
    }

    numberOfGuesses++;
    prevGuess = guess;

    if (guess === numToGuess) {
      alert(`Congratulations! You guessed the number ${numToGuess} in ${numberOfGuesses} tries.`);
      return numberOfGuesses;
    }
  }

  alert(`Sorry, you couldn't guess the correct number within ${totalGuesses} tries. The correct number was ${numToGuess}.`);
  return 0;
}

const numToGuess = 5;
const totalGuesses = 10;
playGuessingGame(numToGuess, totalGuesses);
