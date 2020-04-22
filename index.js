// const question = $('#js-question-text');
// console.log($(question).html())


//My questions & answers

let score = 0;




let counter = 0
function start() {
  for (let i = 0; i < questions.length; i++) {
    $('#choice' + i).html(questions[counter].answers[i])


    // console.log(questions[counter].answers[i])
        // Auburn University
        // Harper College
        // Seton Hall
        // Valparaiso University
        // DePaul University

  }

  // counter++;
  // questionNumber++
  //questions[0] refers to the first object of the questions array which is the first question

    checkAnswer()
}

function checkAnswer() {
  $('.checkAnswerButton').on('click', function(event) {
      event.preventDefault();
      const userAnswer = parseInt($('input[name="answerChoice"]:checked').val());

      const rightAnswer = questions[counter].correctAnswer;

      if (userAnswer === rightAnswer) {
        //do something
      }


})

let questions = [{
    question: 'What University does Gus Malzahn coach at as of the year 2020?',
    answers: ['Auburn University',
      'Harper College',
      'Seton Hall',
      'Valparaiso University',
      'Depaul University'
    ],
    correctAnswer: 0
  },





  {
    question: 'What first name was given to Gus Malzahn at birth',
    answers: ['Ronald',
      'Tim',
      'Arthur',
      'John',
      'Frederick'
    ],
    correctAnswer: 2
  },
  {
    question: 'What is the name of Gus Malzahn\'s wife',
    answers: ['Erin',
      'Lori',
      'Kristi',
      'Alex',
      'Twyla'
    ],
    correctAnswer: 2
  },
  {
    question: 'At which University did Gus Malzahn land his first head coaching job',
    answers: ['Mizzou',
      'Kansas',
      'Georgetown',
      'Georgia Tech',
      'Arkansas State'
    ],
    correctAnswer: 4
  },
  {
    question: 'At which two colleges did Gus Malzahn play football at',
    answers: ['Arkansas, Henderson State',
      'DePaul, Harper College',
      'Pitt, Marshall',
      'West Virginia, Washington State',
      'Florida Atlantic, Florida State'
    ],
    correctAnswer: 0
  },
];

start();
