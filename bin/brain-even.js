#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor((Math.random() * 100));
}

function isEven(n) {
  return n % 2 === 0;
}

function playGame() {
  let correctAnswer = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  while (correctAnswer < 3) {
    const randomNumber = getRandomNumber();
    console.log('Question: ', randomNumber);

    const userAnswer = readlineSync.question('Answer ').toLowerCase();

    if (isEven(randomNumber) && userAnswer === 'yes') {
      console.log('Correct!');
      correctAnswer++;
    } else if (!isEven(randomNumber) && userAnswer === 'no') {
      console.log('Correct!');
      correctAnswer++;
    } else {
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' `);

      break;
    }
  }

  if (correctAnswer === 3) {
    console.log('Congratulations, Bill!');
  }
}

playGame();
