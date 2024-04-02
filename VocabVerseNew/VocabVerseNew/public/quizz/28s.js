const questions=[
{
question: "1. What is correct homophone for'right' ?",
options: ["wright","writ","write","rite"],
correctAnswer: "write"
},
{
question: "2. Choose the correct homophone for 'ate'.",
options: ["eight","it","at","ete"],
correctAnswer: "eight"
},
{
question: "3. Which homograph refers to the act of bending forward, often as a sign of respect ?",
options: ["Wind(the air in motion)","Bow(a weapon)","Bow(to bend forward)","Lead (a heavy metal)"],
correctAnswer: "Bow(to bend forward)"
},
{
question: "4. Which word is the correct homophone for'sail' ?",
options: ["sale","seil","cell","sell"],
correctAnswer: "sale"
},
{
question: "5. Which word can mean both'a piece of paper'and'a formal written request' ?",
options: ["shit","sheet","sheat","seat"],
correctAnswer: "sheet"
},
{
question: "6. In the sentence: She was content with her content.What does'content'mean in the first instance ?",
options: ["Happy and satisfied","The substance of a book or document","A state of peacefulness","The subject matter of a conversation"],
correctAnswer: "Happy and satisfied"
},
{
question: "7. Select the correct homophone for: bear",
options: ["bare","bier","byer","beer"],
correctAnswer: "bare"
},
{
question: "8. Which word is the correct homophone for'plane' ?",
options: ["plain","plaine","plan","plein"],
correctAnswer: "plain"
},
{
question: "9. What word can mean'to move suddenly and quickly'and'a type of small boat' both ?",
options: ["roe","row","rose","ro"],
correctAnswer: "row"
},
{
question: "10. In the phrase : The farm produces fine produce ,what is the meaning of the homograph'produce' ?",
options: ["Fresh fruits and vegetables","To create or manufacture","An artistic performance","To display or exhibit"],
correctAnswer: "Fresh fruits and vegetables"
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