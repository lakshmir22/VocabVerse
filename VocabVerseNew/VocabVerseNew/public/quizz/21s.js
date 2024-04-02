const questions=[
{
question: "1. What does the prefix 'Intra-' in 'Intramuscular' mean ?",
options: ["within", "middle", "in favour of", "partly"], 
correctAnswer: "within"
},
{
question: "2. Which of the following is a common suffix that gives quality to something ?",
options: ["–ify", "–ism", "–tion", "–ship"],
correctAnswer: "–ify"
},
{
question: "3. Suggest an appropriate prefix for the given word:  _____ -scale ,which means _______",
options: ["macro, small", "mono, small", "micro, large", "macro, large"],
correctAnswer: "macro, large"
},
{
question: "4. What is the meaning of the prefix 'neo-'  in the word 'neoclassical' ?",
options: ["opposing", "something old in new form", "multiple", "before"],
correctAnswer: "something old in new form"
},
{
question: "5. If you add the suffix '–ocrat' to the word 'techno', what is the new words meaning ?",
options: ["performing a major part of", "having", "person ruling", "person affected by something"],
correctAnswer: "person ruling"
},
{
question: "6. What is the meaning of the prefix 'retro-'  in the word 'retrospective' ?",
options: ["foremost", "ancient", "old style", "backwards"],
correctAnswer: "backwards"
},
{
question: "7. What is the prefix in the word 'transcontinental' having meaning ______ ?",
options: ["trans-, between", "tran-,across", "tra-,far away", "trans-,across"],
correctAnswer: "trans-,across"
},
{
question: "8. Which of these words has a suffix that means 'type of ruling body'?",
options: ["–ocracy", "-ous", "-ist", "-ology"],
correctAnswer: "–ocracy"
},
{
question: "9. What does the suffix 'hood' in the word 'motherhood' mean ?",
options: ["action", "condition/period/state", "giving quality to something", "act or process"],
correctAnswer: "condition/period/state"
},
{
question: "10. What does prefix '-arch' in the word 'arch-capitalist' mean ?",
options: ["extreme", "favour of", "within", "against"],
correctAnswer: "extreme"
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