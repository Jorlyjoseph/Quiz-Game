const questions = [
  {
    question: "What is the name of the fastest land animal?",
    options: ["Cheetah", "Springbok", "Blue Wildebeest", "Tiger"],
    answer: "Cheetah",
  },

  {
    question: " How many humps does a Bactrian camel have?",
    options: ["four", "three", "two", "one"],
    answer: "two",
  },
  {
    question: "What is the only mammal that can't jump?",
    options: ["Hippo", "White rhinoceros", "Polar bear", "Elephant"],
    answer: "Elephant",
  },
  {
    question: " What is a rhinos horn made of?",
    options: ["Bones", "Collagen", "Fibroin", "Keratin"],
    answer: "Keratin",
  },
  {
    question: "which is the longest snake in the world?",
    options: ["Black Mamba", "Reticulated python", "puff Adder", "Anaconda"],
    answer: "Reticulated python",
  },
  {
    question: "How many eyes does a honeybee have ?",
    options: ["two", "three", "four", "five"],
    answer: "five",
  },
];

let points = 0;
const qustionElemnt = document.getElementById("question");

const firstOption = document.getElementById("option1");
const secondOption = document.getElementById("option2");
const ThirdOption = document.getElementById("option3");
const fourthOption = document.getElementById("option4");

firstOption.addEventListener("click", checkAnswer);
secondOption.addEventListener("click", checkAnswer);
ThirdOption.addEventListener("click", checkAnswer);
fourthOption.addEventListener("click", checkAnswer);

let currentQuestionIndex = 0;
let currentQuestionSet;

function loadQuestion() {
  currentQuestionSet = questions[currentQuestionIndex];

  qustionElemnt.innerText = currentQuestionSet.question;

  firstOption.innerText = currentQuestionSet.options[0];
  secondOption.innerText = currentQuestionSet.options[1];
  ThirdOption.innerText = currentQuestionSet.options[2];
  fourthOption.innerText = currentQuestionSet.options[3];
}

// console.log(firstOption.innerText);

function checkAnswer(option) {
  if (currentQuestionSet.answer === option.target.innerText) {
    // console.log("correct");

    option.target.style.backgroundColor = "#228B22";
    points = points + 1;
  } else {
    // console.log("wrong");

    option.target.style.backgroundColor = "#F08080";
  }
  // console.log(option.target.innerText);
  currentQuestionIndex = currentQuestionIndex + 1;

  setTimeout(() => {
    if (questions.length === currentQuestionIndex) {
      // alert(`GAME OVER your point ${points}`);
      let score = document.getElementById("score");
      score.innerText = `${points} out of ${questions.length}`;

      let quizBox = document.getElementById("quizBox");
      quizBox.style.display = "none";
      let resultBox = document.getElementById("resultBox");
      resultBox.style.display = "block";

      document.getElementById("again").addEventListener("click", function () {
        location.reload();
      });
    } else {
      option.target.style.backgroundColor = "white";
      loadQuestion();
    }
  }, 500);
}

loadQuestion();