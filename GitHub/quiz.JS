const questions = [
    {
question: "Which of the following is not a real eCommerce platform?",
  choice1: "Shopify",
  choice2: "WooCommerce",
  choice3: "ShopCommerce",
  choice4: "BigCommerce",
    answer: "3"
    },
    {
question: "If Shopify is so good, why are Shopify developers necessary?",
  choice1: "To save time on things like store setups and migrations",
  choice2: "To extend the limited design options and functionalities of themes with custom code",
  choice3: "To provide support with a deep understanding of how the platform works and what its limitations are",
  choice4: "All the above",
   answer: "4"
    },
    {
question: "Which of the following is true about Shopify developers?",
  choice1: "They are paid extremely well",
  choice2: "There is a high demand for them",
  choice3: "They need to know web development, the platform itself, and the liquid template language",
  choice4: "All the above",
   answer: "4"
    }
];
  


const quizID = document.getElementById("quiz")
const choices = Array.from(document.getElementsByClassName("choice-text"));
const question = document.getElementById("question")
const nextBtn = document.getElementById("next-button")
const backBtn = document.getElementById("back-button")
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');


let questionNumber = 0;

let acceptingAnswers = true;
let score = 0;
let questionCounter = 0; 
let availableQuestions = []

//CONSTANTS
const correctBonus = 10;
const maxQuestions = 3;

startgame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
  
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > maxQuestions){

    return window.location.assign("/end.hmtml");
  }
  questionCounter++
  questionCounterText.innerText = `${questionCounter}/${maxQuestions}`;


  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question;
 
  
  choices.forEach( choice => {
    const number = choice.dataset['number'];
    
    choice.innerText = currentQuestion['choice' + number];
  
    
  })
  availableQuestions.splice(questionIndex, 1);


  acceptingAnswers = true;
};


choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];

  let classToApply =
  selectedAnswer = currentQuestion.answer ? "correct" : "incorrect";
   
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout( () => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();

    }, 1000);
  console.log(classToApply)
    getNewQuestion();
  })
})
startgame()