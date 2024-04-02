const questions=[
{
question: "1. Select the most appropriate synonym of the word 'stringent' ?",
options: ["strained" , "shrill", "rigorous", "dry"], 
correctAnswer: "rigorous"
},
{
question: "2. Which of the following has similar meaning to the word 'adversity' ?",
options: ["helplessness", "misfortune", "failure", "crisis"],
correctAnswer: "misfortune"
},
{
question: "3. What is the word opposite to 'feasible' ?",
options: ["workable", "difficult", "impossible", "impractical"],
correctAnswer: "impractical"
},
{
question: "4. What is the antonym for 'crestfallen' ?",
options: ["vainglorious", "indignant", "triumphant", "disturbed"],
correctAnswer: "triumphant"
},
{
question: "5. What is the word similar to 'reckless' ?",
options: ["courageous", "rash", "bold", "daring"],
correctAnswer: "rash"
},
{
question: "6. What is the synonym for 'ironic' ?",
options: ["inflexible", "good-natured", "bitter", "sarcastic"],
correctAnswer: "sarcastic"
},
{
question: "7. What is the synonym for 'extricate' ?",
options: ["complicate", "tie", "pull" , "free"],
correctAnswer: "free"
},
{
question: "8. What is the antonym for 'liability' ?",
options: ["easy", "possible", "asset", "alternate"],
correctAnswer: "asset"
},
{
question: "9. What is the antonym for 'impertinent' ?",
options: ["respectful", "healthy", "smooth", "inadequate"],
correctAnswer: "respectful"
},
{
question: "10. What is the antonym for 'expedite' ?",
options: ["defer", "delay", "adjourn", "postpone"],
correctAnswer: "delay"
},
];
const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress');
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 100;
const timerInterval = setInterval(updateTimer, 1000);
function updateTimer() {
if (timeLeft <= 0) {
clearInterval(timerInterval);
endQuiz();
} else {
const minutes = Math.floor(timeLeft / 100);
const seconds = timeLeft % 100;
timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
timeLeft--;
const progressWidth = ((100 - timeLeft) / 100) * 100;
progressBar.style.width = `${progressWidth}%`;
}
}
function showQuestion() {
if (currentQuestionIndex < questions.length) {
const currentQuestion = questions[currentQuestionIndex];
questionElement.textContent = currentQuestion.question;
optionsElement.innerHTML = '';
currentQuestion.options.forEach(option => {
const optionElement = document.createElement('div');
optionElement.classList.add('option');
optionElement.textContent = option;
optionElement.addEventListener('click', () => checkAnswer(option, currentQuestion.correctAnswer));
optionsElement.appendChild(optionElement);
});
} else {
endQuiz();
}
}
function checkAnswer(selectedOption, correctAnswer) {
if(selectedOption === correctAnswer) {
score++;
}
currentQuestionIndex++;
showQuestion();
}
function endQuiz() {
quizContainer.innerHTML = `
<h2>Quiz Ended!</h2>
<p>Your Score: <span id="final-score">${score}</span></p>
`;
clearInterval(timerInterval);
progressBar.style.width='100%';
}
showQuestion();