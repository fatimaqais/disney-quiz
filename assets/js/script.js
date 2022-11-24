// getting the DOM elements
let startButton = document.getElementById('start-btn');
let startPage = document.getElementById('start-container');
let user= document.getElementById('username');
let results = document.getElementById('score-page');
let quizArea = document.getElementById('quiz-container');
let displayQuestion = document.getElementById('question-area');
let answer = document.getElementById('answers');
let nextBtn = document.getElementById('next')
let optionA = document.getElementById('answer-a')
let optionB = document.getElementById('answer-b')
let optionC = document.getElementById('answer-c')
let optionD = document.getElementById('answer-d')

let selectedAnswer;
let currentQuestionIndex;

// start quiz event listener
startButton = addEventListener('click', startQuiz)

//when start button is clicked
function startQuiz() {
    console.log('started')
    startPage.classList.add('display')
    currentQuestionIndex = 0;
    quizArea.classList.remove('display')
    nextQuestion()
}

function nextQuestion(){
    showQuestions(quizQuestions[currentQuestionIndex]);
}

function showQuestions(question) {
    displayQuestion.innerText = question.question;
    optionA.innerText = question.answers[0].option;
    optionB.innerText = question.answers[1].option;
    optionC.innerText = question.answers[2].option;
    optionD.innerText = question.answers[3].option;

    optionA.onclick = pickAnswer;
    optionB.onclick = pickAnswer;
    optionC.onclick = pickAnswer;
    optionD.onclick = pickAnswer
} 

function pickAnswer(event) {
    console.log('selected answer')
    selectedAnswer = e.target;
    let userAnswer = selectedAnswer.innerText;
    let rightAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (userAnswer === rightAnswer) {
        selectedAnswer.classList.add('correct');
        score();
        currentQuestionIndex++;
    }
}

//function score()