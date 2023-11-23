import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const readlineSync = require("readline-sync");
const wordBank = require("./word-bank.js");

// Main game loop
const playHangman = () => {
  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  const wordToGuess = getRandomWord(wordBank);
  let displayWord = initializeDisplay(wordToGuess);
  let incorrectGuesses = 0;
  let guessedLetters = [];
};
