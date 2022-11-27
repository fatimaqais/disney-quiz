// getting the DOM elements
let startButton = document.getElementById('start-btn');
let startPage = document.getElementById('start-container');
let userName = document.getElementById('username');
let results = document.getElementById('score-page');
let quizArea = document.getElementById('quiz-container');
let displayQuestion = document.getElementById('question-area');
let answer = document.getElementById('answers');
let nextBtn = document.getElementById('next');
let nextContainer = document.getElementById('next-conatiner')
let optionA = document.getElementById('answer-a');
let optionB = document.getElementById('answer-b');
let optionC = document.getElementById('answer-c');
let optionD = document.getElementById('answer-d');
let progressBar = document.getElementById('progress-bar');
let playAgainBtn = document.getElementById('play-again');
let questionCounter = document.getElementById('question-counter');
let score = document.getElementById('score');

let currentQuestionIndex = 0;
let questionNumber = 1;
let userScore = 0;

// start quiz event listener
startButton.onclick = () => {
    startQuiz()
}

//when start button is clicked
function startQuiz() {
    console.log('started')
    startPage.classList.add('display')
    quizArea.classList.remove('display')

    showQuestions(quizQuestions[currentQuestionIndex]);
    questionCounter.innerText = questionNumber;
    score.innerText = userScore;
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
//    optionA.setAttribute('disabled', 'disabled');
//    optionB.setAttribute('disabled', 'disabled');
//    optionC.setAttribute('disabled', 'disabled');
//    optionD.setAttribute('disabled', 'disabled'); 
    let selectedAnswer = event.target;
    let chosenAnswer = selectedAnswer.innerText;
    console.log(chosenAnswer)
    let rightAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (chosenAnswer === rightAnswer) {
        userScore += 2;
        showQuestions(quizQuestions[currentQuestionIndex]);
        console.log('correct answer')
    } else {
        showQuestions(quizQuestions[currentQuestionIndex]);
        console.log('wrong answer')
    }
    showQuestions(quizQuestions[currentQuestionIndex]);
}

// when next button is clicked
nextBtn.onclick = () => {
    currentQuestionIndex++;
    questionNumber++;
    if (currentQuestionIndex <= '9') {
        console.log('showing question')
        questionCounter.innerText = questionNumber;
    } else {
        results.classList.remove('display')
        quizArea.classList.add('display')
        console.log('showing result')
        return (currentQuestionIndex)
    }
    showQuestions(quizQuestions[currentQuestionIndex]);
    score.innerText = userScore;
}

playAgainBtn.onclick = () => {
    console.log('startPage')
    window.location.reload();
}