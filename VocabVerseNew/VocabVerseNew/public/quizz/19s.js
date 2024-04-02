const questions=[
{
question: "1. What is a prefix ?",
options: ["A word added to the end of a base word.","A word added to the beginning of a base word.","A word that stands alone.","A word that describes an action."],
correctAnswer: "A word added to the beginning of a base word."
},
{
question: "2. Which of the following is a common suffix that makes a word plural ?",
options: ["-ful", "-er","-s","-ing"],
correctAnswer: "-s"
},
{
question: "3. Suggest an appropriate prefix for the given sentence: He was very _______satisfied with the service.",
options: ["mis", "dis", "un", "non"],
correctAnswer: "dis"
},
{
question: "4. What is the meaning of the prefix 'bi-'in the word 'bilingual' ?",
options: ["One", "Two", "Three", "Four"],
correctAnswer: "Two"
},
{
question: "5. If you add the suffix '-able' to the word 'read' ,what is the new word's meaning ?",
options: ["The act of reading.","Capable of being read.","The opposite of reading.","A reader."],
correctAnswer: "Capable of being read."
},
{
question: "6. What is the meaning of the prefix 're-' in words like 'redo' ?",
options: ["Before", "Again", "Not", "Together"],
correctAnswer: "Again"
},
{
question: "7. What is the suffix in the word 'teacher' ?",
options: ["-teach", "-her", "-er", "tea-"],
correctAnswer: "-er"
},
{
question: "8. Which of these words has a suffix that means 'full of' ?",
options: ["Beautiful", "Quickly", "Danger", "Unhappy"],
correctAnswer: "Beautiful"
},
{
question: "9. What does the prefix 'Hyper' in the word 'Hyperactive' mean ? ",
options: ["More", "Huge", "Beyond", "Extreme"],
correctAnswer: "Extreme"
},
{
question: "10. What does 'Anti' in the word 'Anti-racist' mean ?",
options: ["support", "favour of", "extra", "against"],
correctAnswer: "against"
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