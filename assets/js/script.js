let startQuiz = document.getElementById('start-container');
let startBtn = document.getElementById('start-btn');
let gameContainer = document.getElementById('game-container');
let questionArea = document.getElementById('question-area');
let username = document.getElementById('username');
let answers = document.getElementById('answers');
let nextBtn = document.getElementById('next-btn');
let answerBtn = document.getElementById('answers');


let currentQuestion = 0;

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log("Game has started");
    startQuiz.classList.add('hide');
    gameContainer.classList.remove('hide');
}

function incremetQuiz(){
    displayQuestion(quizQuestions)
}
