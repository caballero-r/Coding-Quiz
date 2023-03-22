// Defining the links we have to the HTML
var startButtonEl = document.getElementById("start-button");
var startScreenEl = document.querySelector(".start-screen-container");
var gameScreenEl = document.querySelector(".game-screen");


// Transition from Initial screen to Questions screen
startButtonEl.addEventListener("click", function() {
    startScreenEl.classList.add("hide");
    gameScreenEl.classList.remove("hide");
})

// Data Structure of the Questions & Answers
var quesAndAns = [
    {
        question: "Question 1",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 3"
    },
    {
        question: "Question 2",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 1"
    },
    {
        question: "Question 3",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 3"
    },
    {
        question: "Question 4",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 1"
    },
    {
        question: "Question 5",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 1"
    },
    {
        question: "Question 6",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 1"
    },
    {
        question: "Question 7",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 3"
    },
    {
        question: "Question 8",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 1"
    },
    {
        question: "Question 9",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 3"
    },
    {
        question: "Question 10",
        answers: [
            "answer 1", 
            "answer 2",
            "answer 3",
            "answer 4"
        ],
        correctAnswer: "answer 1"
    },
]

// This is what happens on the game screen


