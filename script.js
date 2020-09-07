// Create variable for questions
var questionHeader = document.querySelectorAll("h2");

// Create variables for answer buttons
var answerOneBtn = document.querySelector("#answerOne");
var answerTwoBtn = document.querySelector("#answerTwo");
var answerThreeBtn = document.querySelector("#answerThree");
var answerFourBtn = document.querySelector("#answerFour");

// Clicking the Start button initiates the quiz.
    // Add event listener to Start button.
    answerOneBtn.addEventListener("click", answerLog);

// Once the Start button is clicked, run the a timer function.  Also initiate the first question.
var questionObject = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        answer: "parentheses"
    },
    {
        question:  "Arrays in JavaScript can be used to store ________.",
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "console log"
    }
];

// correct: function() {
//     alert("Correct!");
    // Initiate function to diplay a new question
// }

    // incorrect: function() {
    //     alert("Wrong");
    // }


console.log(questionObject[0].question);
console.log(questionObject[0].answer);
// console.log(questionObject["The condition in an if / else statement is enclosed within ________."]);
// console.log(questionObject["Arrays in JavaScript can be used to store ________."]);
// console.log(questionObject["String values must be enclosed within ________ when being assigned to variables."]);
// console.log(questionObject["A very useful tool used during development and debugging for printing content to the debugger is:"]);


// Loop through all the questions, changing the question & answers each time.
// for (var i = 0; i < 5; i++) {
    questionHeader.setAttribute(questionObject[0].question);
    
// }
    // If the answer is correct, present the second question.
// function answerLog() {
//     var answer;
//     var numberRight = 0;

//     if (answer === "alerts") {
//         questionObject.correct();
//         numberRight++;
//         console.log(numberRight);
//     }
//     return numberRight;
    // If the answer is incorrect, subtract time from the clock.
    // if (answer !== "alerts") {
    //     questionObject.incorrect();
    // }

    // If all questions are answered, the game is over.
    
    // If the timer reaches 0, the game is over.

// After the game is over, save the player's initials and score.
// alert("Number correct: " + answerLog());



