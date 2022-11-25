// getting the DOM elements
let startButton = document.getElementById('start-btn');
let startPage = document.getElementById('start-container');
let userName = document.getElementById('username');
let results = document.getElementById('score-page');
let quizArea = document.getElementById('quiz-container');
let displayQuestion = document.getElementById('question-area');
let answer = document.getElementById('answers');
let nextBtn = document.getElementById('next');
let optionA = document.getElementById('answer-a');
let optionB = document.getElementById('answer-b');
let optionC = document.getElementById('answer-c');
let optionD = document.getElementById('answer-d');
let progressBar = document.getElementById('progress-bar');
let playAgainBtn = document.getElementById('play-again');
let questionCounter = document.getElementById('question-counter')

let selectedAnswer;
let currentQuestionIndex = 0;
let questionNumber = 1;

// start quiz event listener
startButton = addEventListener('click', startQuiz)

//when start button is clicked
function startQuiz() {
    console.log('started')
    startPage.classList.add('display')
    quizArea.classList.remove('display')
    if(currentQuestionIndex <= '9') {
        console.log('showing question')
        questionCounter.innerText = questionNumber;
    } else {
        results.classList.remove('display')
        quizArea.classList.add('display')
        console.log('showing result')
        return (currentQuestionIndex)
    }
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
    optionD.onclick = pickAnswer;
}

function pickAnswer(event) {
    console.log('selected answer')
}

// when next button is clicked
nextBtn.onclick = () => {
    currentQuestionIndex++;
    questionNumber++;
}

function score() {
    
}

playAgainBtn.onclick = () => {
    console.log('startPage')
    startPage.classList.remove('display')
    results.classList.add('display')
    quizArea.classList.remove('display')
}