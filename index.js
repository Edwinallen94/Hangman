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
