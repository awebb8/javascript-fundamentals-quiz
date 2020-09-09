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
        Answer1: "1. quotes",
        Answer2: "2. curly brackets",
        Answer3: "3. parentheses",
        Answer4: "4. square brackets",
        correctAnswer: "3. parentheses"
    },
    {
        question:  "Arrays in JavaScript can be used to store ________.",
        Answer1: "1. numbers and strings",
        Answer2: "2. other arrays",
        Answer3: "3. booleans",
        Answer4: "4. all of the above",
        correctAnswer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        Answer1: "1. commas",
        Answer2: "2. curly brackets",
        Answer3: "3. quotes",
        Answer4: "4. parentheses",
        correctAnswer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        Answer1: "1. JavaScript",
        Answer2: "2. terminal/bash",
        Answer3: "3. for loops",
        Answer4: "4. console log",
        correctAnswer: "4. console log"
    },
    {
        question: "calculating score",
        Answer1: "calculating score",
        Answer2: "calculating score",
        Answer3: "calculating score",
        Answer4: "calculating score",
        correctAnswer: "calculating score"
    }
];


// Set variables for the timer
var timerEl = $("#timer");
var timeLeft = 120;
console.log(timerEl);

// Create function for the timer
function setTimer() {

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.text(timeLeft);
        
  
        if (timeLeft === 0 || questionIndex >= 6) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            timerEl.textContent = 0;
            alert("You ran out of time");
        
      }
    }, 1000);
  }



// First page; Intro & Start Button
var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startBtnFunction);

function startBtnFunction() {
    // Empty/clear the intro
    // $("#entire-intro-card").empty();
    $("#question-section").addClass("display");

    $("#entire-intro-card").addClass("hide");
    
    // TODO: Start the timer
    setTimer();

    iterate();
}

var questionIndex = 0;

// Loop through all the questions, changing the question & answers each time.
function iterate() {

    numberRight = 0;

    if (this.textContent === undefined) {
        console.log(this.text);
    }
    else if (this.textContent === questionObjectsArray[questionIndex - 1].correctAnswer) {
        footerResult.textContent = "Correct!";
        numberRight++;
        console.log(numberRight);
    }

    console.log(this.textContent);
    // Use jQuery code to empty/clear the div
    // var cardElement = document.getElementById("#entire-Card");
    // $("#question-header").empty();
    
    // Display the question
    questionHeader.textContent = questionObjectsArray[questionIndex].question;

    // Display the answer choices
    answerOneBtn.textContent = questionObjectsArray[questionIndex].Answer1;
    answerTwoBtn.textContent = questionObjectsArray[questionIndex].Answer2;
    answerThreeBtn.textContent = questionObjectsArray[questionIndex].Answer3;
    answerFourBtn.textContent = questionObjectsArray[questionIndex].Answer4;

    questionIndex += 1;


}

// Variable for counting the number of correct answers
// var numberRight = 0;

// function answerOneBtnFunction() {
//     // If the answer is correct, alert "Correct!"
//     if (answerOneBtn.textContent == questionObjectsArray[i].correctAnswer) {
//         // questionObjectsArray.correct();
//         footerResult.textContent = "Correct!";
//         numberRight++;
//         console.log(numberRight);
//     }
//     // If the answer is incorrect, display "Wrong" and subtract time from the clock.
//     else if (answerOneBtn.textContent !== questionObjectsArray[i].correctAnswer) {
//     //     questionObjectsArray.incorrect();
//         footerResult.textContent = "Wrong";
//     }
// }
//     // return numberRight;
// function answerTwoBtnFunction() {
//     // If the answer is correct, alert "Correct!"
//     if (answerTwoBtn.textContent == questionObjectsArray[i].correctAnswer) {
//         footerResult.textContent = "Correct!";
//         numberRight++;
//         console.log(numberRight);
//     }
//     // If the answer is incorrect, display "Wrong" and subtract time from the clock.
//     else if (answerTwoBtn.textContent !== questionObjectsArray[i].correctAnswer) {
//         footerResult.textContent = "Wrong";
//     }
// }
// function answerThreeBtnFunction() {
//     // If the answer is correct, alert "Correct!"
//     if (answerThreeBtn.textContent == questionObjectsArray[i].correctAnswer) {
//         footerResult.textContent = "Correct!";
//         numberRight++;
//         console.log(numberRight);
//     }
//     // If the answer is incorrect, display "Wrong" and subtract time from the clock.
//     else if (answerThreeBtn.textContent !== questionObjectsArray[i].correctAnswer) {
//         footerResult.textContent = "Wrong";
//     }
// }
// function answerFourBtnFunction() {
//     // If the answer is correct, alert "Correct!"
//     if (answerFourBtn.textContent == questionObjectsArray[i].correctAnswer) {
//         footerResult.textContent = "Correct!";
//         numberRight++;
//         console.log(numberRight);
//     }
//     // If the answer is incorrect, display "Wrong" and subtract time from the clock.
//     else if (answerFourBtn.textContent !== questionObjectsArray[i].correctAnswer) {
//         footerResult.textContent = "Wrong";
//     }
// }
// }
    // If all questions are answered, the game is over.
    
    // If the timer reaches 0, the game is over.

// After the game is over, save the player's initials and score.

// alert("Number correct: " + answerLog());

    // When an answer button is clicked, run function to determine correct or incorrect
    answerOneBtn.addEventListener("click", iterate);
    answerTwoBtn.addEventListener("click", iterate);
    answerThreeBtn.addEventListener("click", iterate);
    answerFourBtn.addEventListener("click", iterate);


function displayResults () {

}

var submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener('click', displayResults);

