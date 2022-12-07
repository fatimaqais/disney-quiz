# Disney Quiz - Portfolio Project 2
This is a multiple-choice quiz website. It is a quiz game containing questions from different Disney movies. It has timed conditions to make the quiz more challenging and then displays your overall score at the end.

The aim of the project is to build a responsive website/game using HTML, CSS and JavaScript.
The website is responsive on mobile phones, tablet and desktop. 

[Live Link to the site](https://fatimaqais.github.io/disney-quiz/)

![Mock up screenshot](documents/testing/mockup-screenshot.jpg)

## __User Experience (UX) and Design__
### __User Stories__

- As a user, I'd like to see an image that clearly shows what the quiz is going to be about.
- As a user, I would like to enter a username and start the quiz.
- As a user, I would like to see which question I am on and how much time I have to answer it.
- As a user, I would like to see the questions and the options I get with it.
- As a user, I would like to see if the answer I have chosen is right or wrong before moving on to the next question.
- As a user, I would like to see my final score and an option to play again.

### __Color Scheme__
- The color scheme for this page was taken from [coolors](https://coolors.co/palette/fffaf5-95a78d-3a4336-d88f81).
Some colours were adjusted accordingly to improve visibility.

![coolors color palette](documents/images/coolors-palette.jpg)

### __Typography__
- The font for this page was taken from [google fonts](https://fonts.google.com/)
    - The font Satisfy was used for the header.
    - The font 'Bree Serif" was used for the body.

![Satisfy](documents/images/satisfy-font.jpg)
![Bree Serif](documents/images/bree-serif-font.jpg)

### __Wireframes__
- To check out the wireframes for this project, [click here](/WIREFRAMES.md).

## __Features__
### __Common Features__
These features are seen throughout the whole quiz game:

- __Header__
- This is present on every page and shows the name of the quiz game to the user. The header is in a cursive font so it is similar to the original Disney logo. The text is on blue background colour to increase visibility for the user.

![Header](documents/images/header.png)

- __Footer__
- The footer is seen throughout the quiz so the user can click on the icon and access the link whenever they like. The footer links open in a new tab. It contains a GitHub link and a LinkedIn link.

![Footer](documents/images/footer.png)

- __Title Icon__
- The title shows the quiz name and it has an icon of a castle next to it.

![Icon](assets/images/disney-icon.png)

### Start Page
When the user clicks on the link for the site, this is the first thing they'll see. The background image is colourful to try and match the theme of Disney movies which is usually happy. The background image is from the Disney movie 'Up'. The start page container has an image of Walt Disney studios and then an input username box for the user to enter before starting the quiz. The username is verified and then allows the user to press the start quiz button to start the game.

![Full Start Page](documents/images/full-start-page.png)

- __Username Input Box and Start Button__
- This checks the user has entered enough characters to start the game. It also doesn't allow the user to leave an empty field before starting the game.

- The start button only starts the quiz once the username meets the criteria.

![Empty Username](documents/testing/empty-username.png)
![Less Characters](documents/testing/few-characters.png)

### Quiz Page
When the user has started the quiz, they'll see a timer with the question number and the question with its answer option. They'll see the next button once they have selected an answer or when the time is up.

![Full Quiz Page](documents/images/full-quiz-page.png)

- __Timer__
- The timer displays the time in number as well as a meter that goes down with the time left.

![Timer](documents/images/timer.png)
![Time Up](documents/images/time-up.png)

- __Question Number__
- The question number is displayed in the top corner to show the user what question number they're on.

![Question Number](documents/images/question-nmbr.png)

- __Question and Answer Options__
- The question is displayed on the quiz which is fetched from the question.js file. It displays 4 options from which only one answer is correct. If the user's answer is correct, the selected option changes to green but if it is wrong it changes to red.
- Once an answer is selected the next button is displayed. Or if the time is up the next button is displayed.

![question and answer](documents/images/question-answer.png)

### Score Page
Once 10 questions are answered by the user, the score page is displayed. If the user has answered more than 5 questions correctly, a congratulations message is displayed with a happy gif. If the user gets less than 5 questions right a try again message is displayed with a sad gif.

![Full Score Page](documents/images/full-score-page.png)

- Gif displayed when less than 5 questions are answered correctly.

![sad gif](documents/images/low-score.png)

- Play Again button takes the user back to the start page.

### Features Left to Implement
- I would like to add different difficulties for users where they can answer more than 10 questions if a higher difficulty level is selected.
- I would also like to add different categories in the future where people can choose to play quizzes related to the movie/show they like.

