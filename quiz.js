const questions = [
  {
    question: "which planet is closest to the sun?",
    options: ["Earth", "Mercury", "Mars", "Pluto"],
    answer: "Mercury",
  },

  {
    question: "which planet is closest to the moon?",
    options: ["Earth", "Mercury", "Mars", "Pluto"],
    answer: "Earth",
  },
  {
    question: "which is the smallest planet?",
    options: ["Earth", "Mercury", "Mars", "Pluto"],
    answer: "pluto",
  },
];

let point = 0;
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
console.log(firstOption.innerText);
