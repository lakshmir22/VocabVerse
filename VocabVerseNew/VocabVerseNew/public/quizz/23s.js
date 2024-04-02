const questions=[
{
question: "1. Select the most appropriate antonym of the word 'hospitality' ?",
options: ["coldness" , "cordiality", "complaint", "wrathful"], 
correctAnswer: "coldness"
},
{
question: "2. Which of the following has similar meaning to the word 'retaliate' ?",
options: ["clap", "react", "facilitate", "rotate"],
correctAnswer: "react"
},
{
question: "3. What is the word opposite to 'commissioned' ?",
options: ["started", "terminated", "finished", "unlocked"],
correctAnswer: "terminated"
},
{
question: "4. What is the synonym for 'abondon' ?",
options: ["Keep", "forsake", "cherish", "enlarge"],
correctAnswer: "forsake"
},
{
question: "5. What is the word opposite to 'gloomy' ?",
options: ["disguising", "tragic", "dull", "bright"],
correctAnswer: "bright"
},
{
question: "6. What is the synonym for 'massive' ?",
options: ["strong", "little", "lump sum", "huge"],
correctAnswer: "huge"
},
{
question: "7. What is the synonym for 'cease' ?",
options: ["create", "stop", "dull" , "begin"],
correctAnswer: "stop"
},
{
question: "8. What is the antonym for 'startled' ?",
options: ["relaxed", "amused", "endless", "astonished"],
correctAnswer: "relaxed"
},
{
question: "9. What is the antonym for 'vanity' ?",
options: ["ostentatious", "conceit", "pride", "humility"],
correctAnswer: "humility"
},
{
question: "10. What is the synonym for 'germinate' ?",
options: ["breed", "sprout", "decay", "produce"],
correctAnswer: "sprout"
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