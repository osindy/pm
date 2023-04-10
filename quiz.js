const quizData = [
  // Add your questions and answers here
  // Example question format:
  // {
  //   question: 'What is the capital of France?',
  //   options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
  //   correctAnswer: 0,
  //   correctFeedback: 'Correct! Paris is the capital of France.',
  //   incorrectFeedback: 'Incorrect. The correct answer is Paris.'
  // },
];

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const nextButton = document.getElementById('next-question');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-quiz');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestionIndex];
  questionContainer.innerText = question.question;

