// getting the DOM elements
let start = document.getElementById('start-btn');
let startPage = document.getElementById('start-container');
let user= document.getElementById('username');
let results = document.getElementById('score-page');
let quizArea = document.getElementById('quiz-container');
let question = document.getElementById('question-area');
let answer = document.getElementById('answers');

let currentQuestionIndex;
let shuffleQuestion;

// start quiz event listener
start.addEventListener('click', startQuiz);

//when start button is clicked
function startQuiz() {
    startQuiz.classList.add('display');
    startPage.classList.add('display');
    results.classList.add('display');
    quizArea.classList.remove('display');
    currentQuestionIndex = 0
    shuffleQuestion = question.sort(() => Math.random() - .5)
    showQuestions()
    console.log('showing questions next')
}

function showQuestions(question) {
    question.innerText= quizQuestions.question;
}