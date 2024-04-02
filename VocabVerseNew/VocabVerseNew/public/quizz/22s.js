const questions=[
{
question: "1. What is a synonym for 'happy' ?",
options: ["Confused", "Angry", "Sad", "Joyful"],
correctAnswer: "Joyful"
},
{
question: "2. Which word is a synonym for 'big' ?",
options: ["Small", "Large", "Miniature", "Huge"],
correctAnswer: "Large"
},
{
question: "3. What is the antonym of 'cold' ?",
options: ["icy", "chilled", "warm", "frozen"],
correctAnswer: "warm"
},
{
question: "4. What is another word for 'Begin' ?",
options: ["Conclude", "Finish", "Start", "End"],
correctAnswer: "Start"
},
{
question: "5. Choose the synonym for 'friendly': ",
options: ["Hostile", "Furious", "Amicable", "Aggressive"],
correctAnswer: "Amicable"
},
{
question: "6. What is another word for 'quick' ?",
options: ["Slow", "Speedy", "Lazy", "Tired"],
correctAnswer: "Speedy"
},
{
question: "7. Which word is a synonym for 'beautiful' ?",
options: ["unattractive", "attractive", "ugly", "plain"],
correctAnswer: "attractive"
},
{
question: "8. What is the antonym for bold ?",
options: ["honest", "scary", "fear","timid"],
correctAnswer: "timid"
},
{
question: "9. What is the antonym for Expensive ?",
options: ["Costly", "Cheap", "Priceless", "delusive"],
correctAnswer: "Cheap"
},
{
question: "10. What is the word opposite to 'real' ?",
options: ["original", "false ", "imagination", "fake"],
correctAnswer: "fake"
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