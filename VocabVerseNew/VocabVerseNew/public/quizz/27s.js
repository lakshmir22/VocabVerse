const questions=[
{
question: "1. ___ does she like that school ? Because it is the best one in this city.",
options: ["What", "Where", "Why", "Who"],
correctAnswer: "Why"
},
{
question: "2. ___________ did you go on vacation last summer ?",
options: ["Who", "When", "Where", "What"],
correctAnswer: "Where"
},
{
question: "3.  ___________ is playing the piano in the next room ?",
options: ["Who", "Where", "When", "Why"],
correctAnswer: "Who"
},
{
question: "4. ________ you study hard ?",
options: ["Why does", "Why do", "Why hasn't","Why are"],
correctAnswer: "Why do"
},
{
question: "5. _____ did you shout at him ?",
options: ["Why", "Which", "Whom", "Who"],
correctAnswer: "Why"
},
{
question: "6. _______ bouquet is yours ?",
options: ["Which", "Who", "When","What"],
correctAnswer: "Which"
},
{
question: "7. _____ this ? It's a pencil",
options: ["What's", "Where is" , "Which", "Why is"],
correctAnswer: "What's"
},
{
question: "9. _____ will you reach home? I will go home using public transport",
options: ["How" , " When" , "Why" , "Where" ],
correctAnswer: "How"
},
{
question: "10. ___________ this ? This is Alisia",
options: ["Who is" , "Who are" , "Where is" , "Why is" ],
correctAnswer: "Who is"
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