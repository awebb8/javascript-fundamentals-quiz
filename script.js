// Create variable for questions
var questionHeader = document.querySelector("#question-header");
var footerResult = document.querySelector("#footer");
var questionSection = document.querySelector("#question-section");
var resultsSection = document.querySelector("#results-section");
var highScores = document.querySelector("#high-scores");

// Create variables for answer buttons
var answerOneBtn = document.querySelector("#answerOne");
var answerTwoBtn = document.querySelector("#answerTwo");
var answerThreeBtn = document.querySelector("#answerThree");
var answerFourBtn = document.querySelector("#answerFour");


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
        
        // If the timer reaches 0 or the questions are finished, the game is over.
        if (timeLeft === 0 || questionIndex >= 6) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            timerEl.textContent = 0;

            // Display results only
            questionSection.classList.remove("display");
            resultsSection.classList.add("display");

            var resultScore = numberRight * 20;
            console.log(resultScore);

            var yourScore = document.querySelector("#your-score");
            yourScore.textContent = resultScore;
      }

    }, 1000);
  }



// Clicking the Start button initiates the quiz.
// First page; Intro & Start Button
var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startBtnFunction);

function startBtnFunction() {

    // Display questions and hide other sections
    $("#question-section").addClass("display");
    $("#entire-intro-card").addClass("hide");
    $("#results-section").addClass("hide");
    
    // Start the timer
    setTimer();

    // Run the iterate function (loop through the questions & answers).
    iterate();

}


var questionIndex = 0;
var numberRight = 0;

// Loop through all the questions, changing the question & answers each time.
function iterate() {

    if (this.textContent === undefined) {
        console.log(this.text);
    }
    else if (this.textContent === questionObjectsArray[questionIndex - 1].correctAnswer){
        footerResult.textContent = "Correct!";
        numberRight++;
        console.log(numberRight);
        setTimeout(function() {
            footerResult.textContent = "";
        }, 1000);
    }
    else if (this.textContent !== questionObjectsArray[questionIndex - 1].correctAnswer) {
        footerResult.textContent = "Wrong";
        timeLeft = timeLeft - 10;
        setTimeout(function() {
            footerResult.textContent = "";
        }, 1000);
    }

    console.log(this.textContent);
    
    // Display the question
    questionHeader.textContent = questionObjectsArray[questionIndex].question;

    // Display the answer choices
    answerOneBtn.textContent = questionObjectsArray[questionIndex].Answer1;
    answerTwoBtn.textContent = questionObjectsArray[questionIndex].Answer2;
    answerThreeBtn.textContent = questionObjectsArray[questionIndex].Answer3;
    answerFourBtn.textContent = questionObjectsArray[questionIndex].Answer4;

    questionIndex += 1;

} 

    // When an answer button is clicked, run function to determine correct or incorrect
    answerOneBtn.addEventListener("click", iterate);
    answerTwoBtn.addEventListener("click", iterate);
    answerThreeBtn.addEventListener("click", iterate);
    answerFourBtn.addEventListener("click", iterate);


// Local Storage - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// After the game is over, save the player's initials and score.
var initialsInput = document.querySelector("#name");
var playerInitialsSpan = document.querySelector("#player-initials");
var submitBtn = document.querySelector("#submit-button");
var msgDiv = document.querySelector("#msg");


function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}


submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // create player object from submission
    var player = {
        initials: initialsInput.value
    };

    console.log(player);
    console.log(player.initials);

    $("#high-scores").addClass("display");
    $("#results-section").addClass("hide");

    // validate the initials field
    if (player.initials === "") {
        displayMessage("error", "Initials cannot be blank");
    } 
    else {
        displayMessage("success", "Initials stored successfully");

        // set new submission
        localStorage.setItem("player", JSON.stringify(player));
        console.log(player.initials);
            
        // get most recent submission
        var lastPlayer = JSON.parse(localStorage.getItem("player"));
        playerInitialsSpan.textContent = lastPlayer.initials;
    }

    var highScores = [];
    var currentHighScore = {
    user: playerInitialsSpan,
    };

    if (!highScores) {
        scoreStorageArray = [];
    }

    highScores.push(currentHighScore);
    localStorage.setItem("player", JSON.stringify(highScores));
    });


// for (i = 0; i < highScoresStorageArray.length; i++) {
//     var initialsStore = document.querySelector("player");
//     initialsScore.textContent = highScoresStorageArray[i].player;
//     highScores.appendChild(initialsInput);
// }


// High Scores Card Buttons - - - - - - - - - - - - - - - - - - - - - - - -
var tryAgainBtn = document.querySelector("#try-again-button");
var clearHighScoresBtn = document.querySelector("#clear-button");

tryAgainBtn.addEventListener('click', goBackToStart);
clearHighScoresBtn.addEventListener('click', clearHighScores);

function goBackToStart() {
    location.reload();
}

function clearHighScores() {
    localStorage.clear();
    playerInitialsSpan.remove();
}
