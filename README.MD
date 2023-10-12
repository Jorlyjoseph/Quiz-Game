# QUIZ GAME

## Description

This is a quiz Game to test the knowledge of animal lovers.

## Live Site

If you want to play the game, click here for [Live Site](https://jorlyjoseph.github.io/Quiz-Game/)

## Quiz Structure

There are five multiple choice questions. Each one of question have four options. if you will click the right answer, you will get 1 score. At the end you can see how much score you get it.

## MVP

1.  when the game app open it shows first question with four options.
2.  choose one option from that.
3.  if it is right answer button shows green.
4.  otherwise it shows red.
5.  after 500 millisecond, the next qustion will come automatically.
6.  After all questions it shows the score .
7.  Then click the start again button, game will start again.

## Backlog

List of features you might implement after the MVP

1. adding questions and options.
2. Compare the options, which one is right.
3. when game over ,in disply shows the score bord.
4. According to the right answer, add the score.
5. according to the answer button color will change.

## TECHNOLOGIES

Languages Used

This quiz is created using HTML5, CSS3 and JavaScript.

## Tools

- Git - For version control

- GitHub - To create my repositories, save and store my project files
- VScode - to host a virtual workspace

- Google Fonts - To import fonts
- Google Dev Tools - To debug, troubleshoot and test features and adjust property values.
- LICEcap - to generate gif file of the Quiz
- [LICEcap](./quiz_animation.gif) - to generate gif files for testing all the features of the app

## Data structure

- DOM Manipulation

States & States Transitions

1. Game Screen
2. Game Over Screen
3. ![My Image](images./../IMG_0297.png)

### Task

1. set up html file
2. Create a css file and apply styles to html elements.
3. create externel js file, first make an array containing questions, options and correct answers.
4. Perform DOM Manipulation with getElementById method. (HTML element can be accessed by unique id attribute to manipulate or retrieve information from specific elements.)
5. Define loadQuestion() function to load qustions and option.
6. Define checkAnswer() to mach user selecton with the correct answer and increment the score with each correct answer and no increment when wrong answer is selected
7. Define setTimeout() to set a short delay after the user click the answer, and to display final score to the user

Quiz.js

buildDom();
createGameScreen();
removeGameScreen();
createGameOverScreen();
startGame();
gameOver();

## Links

Slides : https://rb.gy/6yrpm

Deploy : https://jorlyjoseph.github.io/Quiz-Game/
