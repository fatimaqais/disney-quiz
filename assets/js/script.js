// getting the DOM elements
let startButton = document.getElementById('start-btn');
let startPage = document.getElementById('start-container');
let userName = document.getElementById('username');
let message = document.getElementById('message');
let results = document.getElementById('score-page');
let quizArea = document.getElementById('quiz-container');
let displayQuestion = document.getElementById('question-area');
let answer = document.getElementById('answers');
let nextBtn = document.getElementById('next');
let nextContainer = document.getElementById('next-conatiner');
let optionA = document.getElementById('answer-a');
let optionB = document.getElementById('answer-b');
let optionC = document.getElementById('answer-c');
let optionD = document.getElementById('answer-d');
let progressBar = document.getElementById('progress-bar');
let timeLeft = document.getElementById('time');
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
    //doesn't accept empty spaces
    if (!user.value.match(letters)) {
        message.innerHTML = messageEmpty;

        //checks if the username is more than 3 characters
    } else if (user.value.length <= Number(3)) {
        message.innerHTML = characterMessage;

        //allows username if more than 3 characters
    } else if (user.value.length >= Number(3)) {
        console.log('hi');
        startQuiz();
    }

}

// start quiz event listener
startButton.onclick = () => {

    checkUser();

}

/**
 * runs when the username has been validated
 * displays quiz area and hides start page
 * allow the question to be displayed
 */
function startQuiz() {
    console.log('started')
    startPage.classList.add('display')
    quizArea.classList.remove('display')

    showQuestions(quizQuestions[currentQuestionIndex]);
    questionCounter.innerText = questionNumber;
    score.innerText = userScore;
    nextBtn.style.display = "none";
    count = 10;
    startTimer();
}

/**
 * displays the question from the array
 * displays answer options
 * allows the user to pick an answer
 */
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

/**
 * checks answer selected by the user from the question array
 * increments the score by 1 if correct answer
 * disables the answer option once selected
 * 
 */
function pickAnswer(event) {
    selectedAnswer = event.target;
    let chosenAnswer = selectedAnswer.innerText;
    console.log(chosenAnswer)
    let rightAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (chosenAnswer === rightAnswer) {
        userScore++;
        score.innerText = `${userScore} / 10`;
        console.log(userScore)
        showQuestions(quizQuestions[currentQuestionIndex]);
        selectedAnswer.classList.add('correct-answer')
        console.log('correct answer')
        optionA.setAttribute('disabled', 'disabled');
        optionB.setAttribute('disabled', 'disabled');
        optionC.setAttribute('disabled', 'disabled');
        optionD.setAttribute('disabled', 'disabled');
        nextBtn.style.display = "block";
    } else {
        showQuestions(quizQuestions[currentQuestionIndex]);
        selectedAnswer.classList.add('wrong-answer')
        console.log('wrong answer')
        optionA.setAttribute('disabled', 'disabled');
        optionB.setAttribute('disabled', 'disabled');
        optionC.setAttribute('disabled', 'disabled');
        optionD.setAttribute('disabled', 'disabled');
        nextBtn.style.display = "block";
    }

    showQuestions(quizQuestions[currentQuestionIndex]);
}

//when next button is clicked

nextBtn.onclick = () => {
    next()
    resetQuestionState();
    setTimeout(() => {
        if (count >= questionTime) {
            timeLeft.innerHTML = `Time Left: ${count}`;
            progressBar.style.width = progressUnit * count + 'px';
            count--
        }
    }, 10);
}

/**
 * shows next question from the quizQuestions array
 * increments question number everytime next button is clicked
 * when the array has dsiplayed 10 question, shows results page 
 */
function next() {
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
    finalScore();
    count = 10;
    nextBtn.style.display = "none";
}

//when next button is clicked, resets the answer option
//removes the correct answer color
//removes wrong answer color
function resetQuestionState() {
    console.log("reset")

    if (selectedAnswer){
        selectedAnswer.classList.remove('correct-answer')
        selectedAnswer.classList.remove('wrong-answer')
    }

    optionA.removeAttribute('disabled', 'disabled');
    optionB.removeAttribute('disabled', 'disabled');
    optionC.removeAttribute('disabled', 'disabled');
    optionD.removeAttribute('disabled', 'disabled');

    nextBtn.classList.add('display')

}

//code idea taken from https://www.codeexplained.dev/2018/10/create-multiple-choice-quiz-using-javascript.html?m=1
//creates a 10 second timer for each question
let questionTime = 0;
const barWidth = 150;
let count = 10; //10 sec countdown timer
const progressUnit = barWidth / 10;

//timer = setInterval(counter, 1000);
function startTimer() {
    timer = setInterval(() => {
        //displays time left if more than 0sec left
        if (count >= questionTime) {
            timeLeft.innerHTML = `Time Left: ${count}`;
            progressBar.style.width = progressUnit * count + 'px'; //timer bar styling
            count--
            //stops the user from picking an answer when time is up
        } else if (questionTime === 0) {
            timeLeft.innerHTML = "Time Up. Go to the next question!";
            timeLeft.style.width = '150px';
            optionA.setAttribute('disabled', 'disabled');
            optionB.setAttribute('disabled', 'disabled');
            optionC.setAttribute('disabled', 'disabled');
            optionD.setAttribute('disabled', 'disabled');
            console.log('time is up')
            nextBtn.style.display = "block";
        }
    }, 1000);
}


//results page displaying user scare and play aging option
function finalScore() {
    if (userScore < 5) {
        scoreMessage.innerText = `You answered less than 5 questions correctly! Don't give up ${user.value}. Try Again!`
    } else {
        scoreMessage.innerText = `You answered more than 5 questions correctly! Great Job ${user.value}!`
    }
}

//takes the user back to start page when play again is selected
playAgainBtn.onclick = () => {
    console.log('startPage')
    window.location.reload();
}