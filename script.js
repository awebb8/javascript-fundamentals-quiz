// Create variable for questions
var questionHeader = document.querySelector("#question-header");
var footerResult = document.querySelector("#footer");

// Create variables for answer buttons
var answerOneBtn = document.querySelector("#answerOne");
var answerTwoBtn = document.querySelector("#answerTwo");
var answerThreeBtn = document.querySelector("#answerThree");
var answerFourBtn = document.querySelector("#answerFour");

console.log(answerOneBtn);
console.log(answerTwoBtn);
console.log(answerThreeBtn);
console.log(answerFourBtn);

// Clicking the Start button initiates the quiz.
    // Add event listener to Start button.
    answerOneBtn.addEventListener("click", answerOneBtnFunction);
    answerTwoBtn.addEventListener("click", answerTwoBtnFunction);
    answerThreeBtn.addEventListener("click", answerThreeBtnFunction);
    answerFourBtn.addEventListener("click", answerFourBtnFunction);

// Once the Start button is clicked, run the a timer function.  Also initiate the first question.
var questionObjectsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        wrongAnswer1: "1. strings",
        wrongAnswer2: "2. booleans",
        correctAnswer: "3. alerts",
        wrongAnswer3: "4. numbers"
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        wrongAnswer1: "quotes",
        wrongAnswer2: "curly brackets",
        correctAnswer: "parentheses",
        wrongAnswer3: "square brackets"
    },
    {
        question:  "Arrays in JavaScript can be used to store ________.",
        wrongAnswer1: "numbers and strings",
        wrongAnswer2: "other arrays",
        wrongAnswer3: "booleans",
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        wrongAnswer1: "commas",
        wrongAnswer2: "curly brackets",
        correctAnswer: "quotes",
        wrongAnswer3: "parentheses"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        wrongAnswer1: "JavaScript",
        wrongAnswer2: "terminal/bash",
        wrongAnswer3: "for loops",
        correctAnswer: "console log"
    }
];

// correct: function() {
//     alert("Correct!");
    // Initiate function to diplay a new question
// }

    // incorrect: function() {
    //     alert("Wrong");
    // }

console.log(questionObjectsArray[0].question);
console.log(questionObjectsArray[0].correctAnswer);
// console.log(questionObject["The condition in an if / else statement is enclosed within ________."]);
// console.log(questionObject["Arrays in JavaScript can be used to store ________."]);
// console.log(questionObject["String values must be enclosed within ________ when being assigned to variables."]);
// console.log(questionObject["A very useful tool used during development and debugging for printing content to the debugger is:"]);


// Loop through all the questions, changing the question & answers each time.
// for (var i = 0; i < 5; i++) {
    // Display the question
    questionHeader.textContent = questionObjectsArray[0].question;
    // Display the answer choices
    answerOneBtn.textContent = questionObjectsArray[0].wrongAnswer1;
    
// }
    // If the answer is correct, present the second question.

var numberRight = 0;

function answerOneBtnFunction() {
    // If the answer is correct, alert "Correct!"
    if (answerOneBtn.textContent == questionObjectsArray[0].correctAnswer) {
        // questionObjectsArray.correct();
        footerResult.textContent = "Correct!";
        numberRight++;
        console.log(numberRight);
    }
    // If the answer is incorrect, display "Wrong" and subtract time from the clock.
    else if (answerOneBtn.textContent !== questionObjectsArray[0].correctAnswer) {
    //     questionObjectsArray.incorrect();
        footerResult.textContent = "Wrong";
    }
}
    // return numberRight;
function answerTwoBtnFunction() {
    // If the answer is correct, alert "Correct!"
    if (answerTwoBtn.textContent == questionObjectsArray[0].correctAnswer) {
        footerResult.textContent = "Correct!";
        numberRight++;
        console.log(numberRight);
    }
    // If the answer is incorrect, display "Wrong" and subtract time from the clock.
    else if (answerTwoBtn.textContent !== questionObjectsArray[0].correctAnswer) {
        footerResult.textContent = "Wrong";
    }
}
function answerThreeBtnFunction() {
    // If the answer is correct, alert "Correct!"
    if (answerThreeBtn.textContent == questionObjectsArray[0].correctAnswer) {
        footerResult.textContent = "Correct!";
        numberRight++;
        console.log(numberRight);
    }
    // If the answer is incorrect, display "Wrong" and subtract time from the clock.
    else if (answerThreeBtn.textContent !== questionObjectsArray[0].correctAnswer) {
        footerResult.textContent = "Wrong";
    }
}
function answerFourBtnFunction() {
    // If the answer is correct, alert "Correct!"
    if (answerFourBtn.textContent == questionObjectsArray[0].correctAnswer) {
        footerResult.textContent = "Correct!";
        numberRight++;
        console.log(numberRight);
    }
    // If the answer is incorrect, display "Wrong" and subtract time from the clock.
    else if (answerFourBtn.textContent !== questionObjectsArray[0].correctAnswer) {
        footerResult.textContent = "Wrong";
    }
}


    // If all questions are answered, the game is over.
    
    // If the timer reaches 0, the game is over.

// After the game is over, save the player's initials and score.
// alert("Number correct: " + answerLog());