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
question: "4. There was a phone on the floor, so I picked it up and said, _______ phone is this ?",
options: ["Whose", "When", "What", "Why"],
correctAnswer: "Whose"
},
{
question: "5. ___________ are your parents from ?",
options: ["Where", "Who", "Why", "What"],
correctAnswer: "Where"
},
{
question: "6. Jenny made a suggestion. She said, _______ we go for a walk ?",
options: ["Why do", "Why didn't", "Why doesn't", "Why don't"],
correctAnswer: "Why don't"
},
{
question: "7. 'How come ?' is a more informal way of saying.",
options: ["Why", "What", "Which", "When"],
correctAnswer: "Why"
},
{
question: "8. I pointed at the phone I wanted to buy and said, _______ is that one ?",
options: ["Why", "What cost", "How many","How less"],
correctAnswer: "What cost"
},
{
question: "9. There was a phone on the floor, so I picked it up and said, _______ phone is this?",
options: ["Where", "Whom", "Who", "Whose"],
correctAnswer: "Whose"
},
{
question: "10. ___ has taken the magazine ?",
options: ["Which", "Where", "Who", "Why"],
correctAnswer: "Who"
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