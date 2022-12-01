// getting the DOM elements
let startButton = document.getElementById('start-btn');
let startPage = document.getElementById('start-container');
let userName = document.getElementById('username');
let message = document.getElementById('message')
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
let scoreMessage = document.getElementById('score-message');

let currentQuestionIndex = 0;
let questionNumber = 1;
let userScore = 0;
let selectedAnswer;


// getting username and displaying messages
let user = userName;
let messageEmpty = "Please enter a username without using spaces or numbers";
let characterMessage = "Username needs to be more than 3 characters";

 // validating username

function checkUser() {

    var letters = /^[A-Za-z]+$/; //no blank spaces and numbers are accepted

    if (!user.value.match(letters)) {
        message.innerHTML = messageEmpty; 
    } else if (user.value.length <= Number(3)) {
        message.innerHTML = characterMessage;
    } else if (user.value.length >= Number(3)){
        console.log('hi')
        startQuiz()
    }

}

// start quiz event listener
startButton.onclick = () => {

    checkUser();

}

//when start button is clicked
function startQuiz() {
    console.log('started')
    startPage.classList.add('display')
    quizArea.classList.remove('display')

    showQuestions(quizQuestions[currentQuestionIndex]);
    questionCounter.innerText = questionNumber;
    score.innerText = userScore;
    nextBtn.classList.remove
    ('display')
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
    selectedAnswer = event.target;
    let chosenAnswer = selectedAnswer.innerText;
    console.log(chosenAnswer)
    let rightAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (chosenAnswer === rightAnswer) {
        userScore ++;
        score.innerText = `${userScore} / 10`;
        console.log(userScore)
        showQuestions(quizQuestions[currentQuestionIndex]);
        selectedAnswer.classList.add('correct-answer')
        console.log('correct answer')
        optionA.setAttribute('disabled', 'disabled');
        optionB.setAttribute('disabled', 'disabled');
        optionC.setAttribute('disabled', 'disabled');
        optionD.setAttribute('disabled', 'disabled');
    } else {
        showQuestions(quizQuestions[currentQuestionIndex]);
        selectedAnswer.classList.add('wrong-answer')
        console.log('wrong answer')
        optionA.setAttribute('disabled', 'disabled');
        optionB.setAttribute('disabled', 'disabled');
        optionC.setAttribute('disabled', 'disabled');
        optionD.setAttribute('disabled', 'disabled');
    }

    showQuestions(quizQuestions[currentQuestionIndex]);
}

// when next button is clicked

nextBtn.onclick = () => {
    next()
    resetQuestionState();
}

function next(){
    currentQuestionIndex++;
    questionNumber++;
    if (currentQuestionIndex <= '9') {
        console.log('showing question')
        questionCounter.innerText = questionNumber;
        nextBtn.classList.add('display')
    } else {
        results.classList.remove('display')
        quizArea.classList.add('display')
        console.log('showing result')
        nextBtn.classList.add('display')
        return (currentQuestionIndex)
    }
    showQuestions(quizQuestions[currentQuestionIndex]);
    finalScore()
}

function resetQuestionState() {
    console.log("reset")
    selectedAnswer.classList.remove('correct-answer')
    selectedAnswer.classList.remove('wrong-answer')
    optionA.removeAttribute('disabled', 'disabled');
    optionB.removeAttribute('disabled', 'disabled');
    optionC.removeAttribute('disabled', 'disabled');
    optionD.removeAttribute('disabled', 'disabled');
    nextBtn.classList.add('display')

}

// results page displaying user scare and play aging option
function finalScore() {
    //scoreMessage.innerText = `Congratulations ${user.value} you finale score is`
    if (userScore < 5) {
        scoreMessage.innerText = `You answered less than 5 questions correctly! Don't give up ${user.value}. Try Again!`
    } else {
        scoreMessage.innerText = `You answered more than 5 questions correctly! Great Job ${user.value}!`
    }
}

playAgainBtn.onclick = () => {
    console.log('startPage')
    window.location.reload();
}