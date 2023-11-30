import prompt from "readline-sync";
import wordBank from "./word-bank.js";

// Function to pick a random word from the word bank
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex].toLowerCase(); // Ensure lowercase for case insensitivity
};

// Function to initialize the display
const initializeDisplay = (word) => {
  return "_".repeat(word.length); // Display underscores for each letter in the word
};

// Function to update the display after each guess
const updateDisplay = (word, display, letter) => {
  let newDisplay = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      newDisplay += letter;
    } else {
      newDisplay += display[i];
    }
  }
  return newDisplay;
};
// Function to check if the guessed letter is in the word
const checkGuess = (word, letter) => {
  return word.includes(letter);
};

// Function to update the number of remaining guesses
const updateGuesses = (guesses, isCorrect) => {
  return isCorrect ? guesses : guesses - 1;
};

// Function to check if the game is over
const isGameOver = (word, display, guesses) => {
  return display === word || guesses === 0;
};

// Function to display game information
const displayGameInfo = (display, guesses) => {
  console.log(`\nWord: ${display}`);
  console.log(`Guesses left: ${guesses}`);
};

// Main game loop
const playHangman = () => {
  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  let word = getRandomWord();
  let display = initializeDisplay(word);
  let guesses = 6;

  while (!isGameOver(word, display, guesses)) {
    displayGameInfo(display, guesses);

    const letter = prompt.question("Please guess a letter: ").toLowerCase();

    if (checkGuess(word, letter)) {
      console.log("Correct!");
      display = updateDisplay(word, display, letter);
    } else {
      console.log("Incorrect!");
      guesses = updateGuesses(guesses, false);
    }
  }

  if (display === word) {
    console.log("Congratulations! You've guessed the word!");
  } else {
    console.log(`Game over! The word was: ${word}`);
  }
};

// Start the game
playHangman();
