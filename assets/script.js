// Defining the links we have to the HTML
var startButtonEl = document.getElementById("start-button");
var timeEL = document.getElementById("timer-counter");
var startScreenEl = document.querySelector(".start-screen-container");
var gameScreenEl = document.querySelector(".game-screen");
var gameOverScreenEl = document.querySelector(".game-over-screen");
var finalScreenEl = document.querySelector('.high-scores-screen');
var questEl = document.getElementById("quest");
var choicesEl = document.querySelectorAll(".choices");
var playAgainEl = document.getElementById("play-again-button");

//Defining variables to use later in code
var initial = 0;
var currentScore = 0;
var count = 130;

// Transition from Initial screen to Questions screen
startButtonEl.addEventListener("click", function() {
    startScreenEl.classList.remove("show");
    startScreenEl.classList.add("hide");
    gameScreenEl.classList.remove("hide");
    gameScreenEl.classList.add("show");

    var timerCounter = setInterval(() => {
        if (count <= 0) {
            clearInterval(timerCounter);
            timeEL.textContent ='0';
        } else {
            count--;
            timeEL.textContent = count;
        }
    }, 1000);

    gameStart();
})

// Data Structure of the Questions & Answers
var quesAndAns = [
    {
        question: "Which of the following is commonly used for styling a webpage?",
        answers: ["JavaScript", "HTML", "CSS","Java"],
        correctAnswer: "CSS"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hypotext Markup Language", "Hypertext Markdown Language", "Hypertext Markup Language","None of the above"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "To link HTML to Javascript which HTML tag should be used?",
        answers: ["<scripts></scripts>", "<javascript></javascript>", "<js></js>", "<script></script>"],
        correctAnswer: "<script></script>"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Carousel Style Sheet", "Cascading Style Sheet", "Cascading Sheet Style", "None of the above"],
        correctAnswer: "Cascading Style Sheet"
    },
]

// This is what happens on the game screen
function gameStart() {
    questEl.textContent = quesAndAns[initial].question;
    choicesEl.forEach((answers, index) => {
        answers.textContent = quesAndAns[initial].answers[index];
        answers.addEventListener('click', function() {
            if (answers.textContent === quesAndAns[initial].correctAnswer) {
                currentScore++;
                nextQuest();
            } else if (answers.textContent !== quesAndAns[initial].correctAnswer) {
                count -= 15;
                nextQuest();
            }
        })
    })
}



function nextQuest() {
    if (initial === 3) {
        endGame();
    } else if (count === 0) {
        endGame();
    } else {
        initial++;
        gameStart();
    }
}


// This is what happens on the end game screen
function endGame() {
    gameScreenEl.classList.add("hide");
    gameOverScreenEl.classList.remove("hide");
    gameOverScreenEl.classList.add("show");
    playAgainEl.addEventListener('click', function() {
        gameOverScreenEl.classList.add("hide");
        gameScreenEl.classList.remove("hide")
        var count = 130;

        var timerCounter = setInterval(() => {
            if (count <= 0) {
                clearInterval(timerCounter);
                timeEL.textContent ='0';
            } else {
                count--;
                timeEL.textContent = count;
            }
        }, 1000);
        gameStart();
    })
}
