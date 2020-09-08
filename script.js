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
    answerOneBtn.addEventListener("click", answerLog);
    answerTwoBtn.addEventListener("click", answerLog);
    answerThreeBtn.addEventListener("click", answerLog);
    answerFourBtn.addEventListener("click", answerLog);

// Once the Start button is clicked, run the a timer function.  Also initiate the first question.
var questionObjectsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        wrongAnswer1: "strings",
        wrongAnswer2: "booleans",
        correctAnswer: "alerts",
        wrongAnswer3: "numbers"
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
    questionHeader.textContent = questionObjectsArray[0].question;
    
// }
    // If the answer is correct, present the second question.
// function answerLog() {
//     var answer;
//     var numberRight = 0;

//     if (answer === "alerts") {
//         // questionObject.correct();
//         alert("Correct!");
//         numberRight++;
//         console.log(numberRight);
//     }
// }
    // return numberRight;
    // If the answer is incorrect, subtract time from the clock.
    // if (answer !== "alerts") {
    //     questionObject.incorrect();
    // }

    // If all questions are answered, the game is over.
    
    // If the timer reaches 0, the game is over.

// After the game is over, save the player's initials and score.
// alert("Number correct: " + answerLog());