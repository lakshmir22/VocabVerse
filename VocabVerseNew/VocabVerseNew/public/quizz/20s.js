const questions=[
{
question: "1. Choose the correct prefix: Human",
options: ["Non","In","Un", "De"],
correctAnswer: "Non"
},
{
question: "2. Which of the following words contains a prefix ?",
options: ["Swim", "Teacher", "Jumped", "Impossible"],
correctAnswer: "Impossible"
},
{
question: "3. What does 'circum' in 'Circumnavigate' stand for ?",
options: ["Shape", "Slope", "Curvy", "Round"],
correctAnswer: "Round"
},
{
question: "4.  What does 'Co' in 'Co-author' stand for ?",
options: ["With", "For", "Across","Self"],
correctAnswer: "With"
},
{
question: "5. The message was wrongly translated, in what alternate way can this be said ?",
options: ["The message was mistranslated.", "The message was distranslated.", "The message was non-translated.", "The message was intranslated."],
correctAnswer: "The message was mistranslated."
},
{
question: "6. What is the meaning of the prefix 'Over' in 'Overcook' ?",
options: ["Very less" , "Few", "Too much", "Huge"],
correctAnswer: "Too much"
},
{
question: "7. What Suffix can be applicable to Urgent ?",
options: ["-er", "-able" , "-fy", "-cy"],
correctAnswer: "-cy"
},
{
question: "8. Which of these words has a suffix that means 'Study of' ?" ,
options: ["professorship", "development", "genetics", "clarify"],
correctAnswer: "genetics"
},
{
question: "9. What is the suffix in the word 'extremity'?" ,
options: ["ex" , "extra" , "ity" , "ty" ],
correctAnswer: "ity"
},
{
question: "10. Add an appropriate suffix to 'Joy' " ,
options: ["-ous" , "-er" , "-able" , "-ness" ],
correctAnswer: "-ous"
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