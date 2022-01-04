const quizData = [
    {
Question: "Which of the following is not a real eCommerce platform?",
  a: "Shopify",
  b: "WooCommerce",
  c: "ShopCommerce",
  d: "BigCommerce",
    answer: "c"
    },
    {
Question: "If Shopify is so good, why are Shopify developers necessary?",
  a: "To save time on things like store setups and migrations",
  b: "To extend the limited design options and functionalities of themes with custom code",
  c: "To provide support with a deep understanding of how the platform works and what its limitations are",
  d: "All the above",
   answer: "d"
    },
    {
Question: "Which of the following is true about Shopify developers?",
  a: "They are paid extremely well",
  b: "There is a high demand for them",
  c: "They need to know web development, the platform itself, and the liquid template language",
  d: "All the above",
   answer: "d"
    }
];
  


const quizID = document.getElementById("quiz")
const answerEl = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const aText = document.getElementById("aText")
const bText = document.getElementById("bText")
const cText = document.getElementById("cText")
const dText = document.getElementById("dText")
const nextBtn = document.getElementById("next-button")
const backBtn = document.getElementById("back-button")


