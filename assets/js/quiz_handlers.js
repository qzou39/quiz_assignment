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
    }
]


var mainElement = document.querySelector('main');

document.addEventListener('DOMContentLoaded', function() {
    var startSection = document.getElementById('start-section')
    var quizSection = document.getElementById('quiz-section')
    var startQuizBtn = document.getElementById('start-quiz-btn')
    startQuizBtn.addEventListener('click', function() {
        startSection.classList.add('hide')
        quizSection.classList.remove('hide')
        
    })
})
