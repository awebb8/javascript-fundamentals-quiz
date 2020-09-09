// Create variable for questions
var questionHeader = document.querySelector("#question-header");
var footerResult = document.querySelector("#footer");

// TO DO: set quizSeconds variable
var interval;
var secondsElapsed = 0;

// Create variables for answer buttons
var answerOneBtn = document.querySelector("#answerOne");
var answerTwoBtn = document.querySelector("#answerTwo");
var answerThreeBtn = document.querySelector("#answerThree");
var answerFourBtn = document.querySelector("#answerFour");

console.log(answerOneBtn.textContent);
console.log(answerTwoBtn.textContent);
console.log(answerThreeBtn.textContent);
console.log(answerFourBtn.textContent);

    // Clicking the Start button initiates the quiz.
    // Add event listener to Start button.

// Once the Start button is clicked, run the a timer function.  Also initiate the first question.
var questionObjectsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        Answer1: "1. strings",
        Answer2: "2. booleans",
        Answer3: "3. alerts",
        Answer4: "4. numbers",
        correctAnswer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        Answer1: "quotes",
        Answer2: "curly brackets",
        Answer3: "parentheses",
        Answer4: "square brackets",
        correctAnswer: "parentheses"
    },
    {
        question:  "Arrays in JavaScript can be used to store ________.",
        Answer1: "numbers and strings",
        Answer2: "other arrays",
        Answer3: "booleans",
        Answer4: "all of the above",
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        Answer1: "commas",
        Answer2: "curly brackets",
        Answer3: "quotes",
        answer4: "parentheses",
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        Answer1: "JavaScript",
        Answer2: "terminal/bash",
        Answer3: "for loops",
        Answer4: "console log",
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

// function startTimer() {
//     // Code to start the timer
//     console.log(quizSeconds.value);
//     var timeInSeconds = parseInt(quizSeconds.value);
//     console.log(timeInSeconds);
//     clearInterval(interval);
//     interval = setInterval( function () {
//         console.log("interval is running");
//         console.log("current timeInSeconds", imeInSeconds);
//         timeInSeconds--;
//         console.log("New TimeInSeconds", timeInSeconds);
//     }, 1000)
// }

// var functionsArray [
//     {

//     }
// ];

console.log(questionObjectsArray[0].question);
console.log(questionObjectsArray[0].correctAnswer);
// console.log(questionObject["The condition in an if / else statement is enclosed within ________."]);
// console.log(questionObject["Arrays in JavaScript can be used to store ________."]);
// console.log(questionObject["String values must be enclosed within ________ when being assigned to variables."]);
// console.log(questionObject["A very useful tool used during development and debugging for printing content to the debugger is:"]);

// First page; Intro
var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startBtnFunction);

function startBtnFunction() {
    // Empty/clear the intro
    $("#entire-intro-card").empty();
    
    // TODO: Start the timer
    
}

// function questionsLoop() {
// Loop through all the questions, changing the question & answers each time.
for (var i = 0; i < 5; i++) {
    // Use jQuery code to empty/clear the div
    // var cardElement = document.getElementById("#entire-Card");
    // $("#question-header").empty();
    
    // Display the question
    questionHeader.textContent = questionObjectsArray[i].question;
    console.log(questionObjectsArray[i].question);

    // Display the answer choices
    answerOneBtn.textContent = questionObjectsArray[0].Answer1;
    answerTwoBtn.textContent = questionObjectsArray[0].Answer2;
    answerThreeBtn.textContent = questionObjectsArray[0].Answer3;
    answerFourBtn.textContent = questionObjectsArray[0].Answer4;

    // When an answer button is clicked, run function to determine correct or incorrect
    answerOneBtn.addEventListener("click", answerOneBtnFunction);
    answerTwoBtn.addEventListener("click", answerTwoBtnFunction);
    answerThreeBtn.addEventListener("click", answerThreeBtnFunction);
    answerFourBtn.addEventListener("click", answerFourBtnFunction);

}
// }

// Variable for counting the number of correct answers
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