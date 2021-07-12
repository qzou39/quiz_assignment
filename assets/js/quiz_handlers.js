
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

var questionIndex = 0;


document.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.querySelector('main');

    var startSection = document.getElementById('start-section')
    var quizSection = document.getElementById('quiz-section')
    var startQuizBtn = document.getElementById('start-quiz-btn')
    var questionHeader = document.getElementById('question-header')
    var answerOptionsList = document.getElementById('answer-options')
    var options = answerOptionsList.querySelectorAll('li')
    var answerResult = document.getElementById('answer-result')

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
    })

    function optionClickHandler(index) {
        let result
        if (index === questions[questionIndex].answer) {
            result = 'Correct!'
        } else {
            result = 'Wrong!'
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

})
