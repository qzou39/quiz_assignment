
var questions = [
    {
        question: 'Commonly Used Data Types DO NOT include:',
        options: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer: 2
    }, 
    {
        question: 'The condition in an if/else statment is enclosed with ____',
        options: ['quotes', 'curly brackets', 'parenthesis', 'square bracket'],
        answer: 2
    }, 
    {
        question: 'Arrays in Javascript can be used to store',
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 3
    },
    {
        question: 'A very useful tool used during development and debugging for printing context to the debugger is:',
        options: ['JavaScript', 'Terminal/Bash', 'For Loops', 'Console Log'],
        answer: 3
    }
]
var score = 0; // Each correct answer is worth 5 points. Incorrect subtract 1 and ten seconds from timer
var timeLeft = 100;

var questionIndex = 0;
var quizFinished = false;

document.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.querySelector('main');

    var startSection = document.getElementById('start-section')
    var quizSection = document.getElementById('quiz-section')
    var completedSection = document.getElementById('completed-section')
    var highScoreSection = document.getElementById('high-score-section')
    var startQuizBtn = document.getElementById('start-quiz-btn')

    var questionHeader = document.getElementById('question-header')
    var answerOptionsList = document.getElementById('answer-options')
    var options = answerOptionsList.querySelectorAll('li')
    var answerResult = document.getElementById('answer-result')
    var timer = document.getElementById('timer')
    var finalScore = document.getElementById('final-score')
    var form = document.querySelector('form')
    var formSubmitBtn = form.querySelector('button')
    var formInput = form.querySelector('input')

    function populateQuestion(index) {
        var question0 = questions[index]
        questionHeader.textContent = question0.question
        var question0Options = question0.options
        for (let i = 0; i < options.length; i++) {
            options[i].textContent = question0Options[i]
        }
    }


    startQuizBtn.addEventListener('click', function() {
        startSection.classList.add('hide')
        quizSection.classList.remove('hide')
        populateQuestion(0)
        let timerInterval = setInterval(() => {
            timer.textContent = timeLeft
            timeLeft -= 1;
            if (timeLeft === 0) {
                alert('Out of Time!')
                clearInterval(timerInterval)
            }
            if (quizFinished === true) {
                clearInterval(timeLeft)
            }
        }, 1000);
    })

    function optionClickHandler(index) {
        let result
        if (index === questions[questionIndex].answer) {
            result = 'Correct!'
            score += 5

        } else {
            result = 'Wrong!'
            score -= 1
            timeLeft -= 10
        }

        if (questionIndex === 3 || timeLeft === 0) {
            quizSection.classList.add('hide')
            completedSection.classList.remove('hide')
            finalScore.textContent = `Your Final Score is ${score}`
            quizFinished = true;
        }
        answerResult.textContent = result
        questionIndex++
        setTimeout(function() {
        populateQuestion(questionIndex)
            answerResult.textContent = ''
        }, 2000)
    }

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', () => optionClickHandler(i) )
    }


    formSubmitBtn.addEventListener('click', function(event) {
        event.preventDefault()
        let formInputValue = formInput.value
        let highScores
        if (JSON.parse(localStorage.getItem('highScores'))) {
            highScores = JSON.parse(localStorage.getItem('highScores'))
        } else {
            highScores = {}
        }
        highScores[formInputValue] = score
        localStorage.setItem('highScores', JSON.stringify(highScores))
        completedSection.classList.add('hide')
        highScoreSection.classList.remove('hide')
        showHighScores()
    })
    form.addEventListener('submit', function(event) {
        event.preventDefault()
    })

    document.getElementById('clear-scores').addEventListener('click', function() {
        localStorage.clear()
        let highScoreList = document.getElementById('high-score-list')
        let highScores = highScoreList.children
        console.log(highScores)
        for (let i = 0; i < highScores.length; i++) {
            highScores[i].remove()
        }
    })
})

function showHighScores() {
    let highScoreList = document.getElementById('high-score-list')
    let highScoreObject = JSON.parse(localStorage.getItem('highScores')) || {}
    console.log(highScoreObject)
    let highScores = Object.entries(highScoreObject)
    console.log(highScores)
    for (let i = 0; i < highScores.length; i++) {
        let li = document.createElement('li')
        li.textContent = `${highScores[i][0] + '-' + highScores[i][1]}`
        highScoreList.appendChild(li)
    }
}
