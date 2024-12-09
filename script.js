const flashcards = [
    {
      question: "What is the Pythagorean identity for sine and cosine?",
      correctAnswer: "sin²(x) + cos²(x) = 1",
      options: [
        "sin²(x) + cos²(x) = 1",
        "sin²(x) - cos²(x) = 1",
        "sin(x) + cos(x) = 1",
        "sin(x) - cos(x) = 1"
      ]
    },
    {
      question: "What is the formula for sin(2x)?",
      correctAnswer: "2 · sin(x) · cos(x)",
      options: [
        "2 · sin(x) · cos(x)",
        "sin²(x) + cos²(x)",
        "1 - 2sin²(x)",
        "cos²(x) - sin²(x)"
      ]
    },
    {
      question: "What is the formula for cos(2x)?",
      correctAnswer: "cos²(x) - sin²(x)",
      options: [
        "cos²(x) - sin²(x)",
        "2cos²(x) - 1",
        "1 - 2sin²(x)",
        "cos(x) · sin(x)"
      ]
    },
    {
      question: "What is the formula for sin(-x)?",
      correctAnswer: "-sin(x)",
      options: [
        "-sin(x)",
        "sin(x)",
        "cos(x)",
        "-cos(x)"
      ]
    },
    {
      question: "What is the formula for cos(-x)?",
      correctAnswer: "cos(x)",
      options: [
        "cos(x)",
        "-cos(x)",
        "sin(x)",
        "-sin(x)"
      ]
    },
    {
      question: "What is the formula for tan(-x)?",
      correctAnswer: "-tan(x)",
      options: [
        "-tan(x)",
        "tan(x)",
        "cot(x)",
        "-cot(x)"
      ]
    },
    {
      question: "What is the formula for cot(-x)?",
      correctAnswer: "-cot(x)",
      options: [
        "-cot(x)",
        "cot(x)",
        "tan(x)",
        "-tan(x)"
      ]
    },
    {
      question: "What is the periodicity formula for sin(x)?",
      correctAnswer: "sin(x + 2πk) = sin(x)",
      options: [
        "sin(x + 2πk) = sin(x)",
        "sin(x + πk) = sin(x)",
        "cos(x + 2πk) = sin(x)",
        "cos(x + πk) = sin(x)"
      ]
    },
    {
      question: "What is the periodicity formula for cos(x)?",
      correctAnswer: "cos(x + 2πk) = cos(x)",
      options: [
        "cos(x + 2πk) = cos(x)",
        "sin(x + 2πk) = cos(x)",
        "sin(x + πk) = cos(x)",
        "cos(x + πk) = cos(x)"
      ]
    },
    {
      question: "What is the periodicity formula for tan(x)?",
      correctAnswer: "tan(x + πk) = tan(x)",
      options: [
        "tan(x + πk) = tan(x)",
        "tan(x + 2πk) = tan(x)",
        "cot(x + πk) = tan(x)",
        "cot(x + 2πk) = tan(x)"
      ]
    },
    {
      question: "What is the periodicity formula for cot(x)?",
      correctAnswer: "cot(x + πk) = cot(x)",
      options: [
        "cot(x + πk) = cot(x)",
        "cot(x + 2πk) = cot(x)",
        "tan(x + πk) = cot(x)",
        "tan(x + 2πk) = cot(x)"
      ]
    },
    {
      question: "What is the formula for sin(a + b)?",
      correctAnswer: "sin(a) · cos(b) + sin(b) · cos(a)",
      options: [
        "sin(a) · cos(b) + sin(b) · cos(a)",
        "sin(a) · cos(b) - sin(b) · cos(a)",
        "cos(a) · cos(b) - sin(a) · sin(b)",
        "cos(a) · cos(b) + sin(a) · sin(b)"
      ]
    },
    {
      question: "What is the formula for sin(a - b)?",
      correctAnswer: "sin(a) · cos(b) - sin(b) · cos(a)",
      options: [
        "sin(a) · cos(b) - sin(b) · cos(a)",
        "sin(a) · cos(b) + sin(b) · cos(a)",
        "cos(a) · cos(b) - sin(a) · sin(b)",
        "cos(a) · cos(b) + sin(a) · sin(b)"
      ]
    },
    {
      question: "What is the formula for cos(a + b)?",
      correctAnswer: "cos(a) · cos(b) - sin(a) · sin(b)",
      options: [
        "cos(a) · cos(b) - sin(a) · sin(b)",
        "cos(a) · cos(b) + sin(a) · sin(b)",
        "sin(a) · cos(b) + sin(b) · cos(a)",
        "sin(a) · cos(b) - sin(b) · cos(a)"
      ]
    },
    {
      question: "What is the formula for cos(a - b)?",
      correctAnswer: "cos(a) · cos(b) + sin(a) · sin(b)",
      options: [
        "cos(a) · cos(b) + sin(a) · sin(b)",
        "cos(a) · cos(b) - sin(a) · sin(b)",
        "sin(a) · cos(b) + sin(b) · cos(a)",
        "sin(a) · cos(b) - sin(b) · cos(a)"
      ]
    },
    {
      question: "What is the formula for sin(a) + sin(b)?",
      correctAnswer: "2sin((a + b)/2)cos((a - b)/2)",
      options: [
        "2sin((a + b)/2)cos((a - b)/2)",
        "sin(a)cos(b) + cos(a)sin(b)",
        "cos(a)cos(b) - sin(a)sin(b)",
        "2cos((a + b)/2)sin((a - b)/2)"
      ]
    },
    {
      question: "What is the formula for sin(a) - sin(b)?",
      correctAnswer: "2cos((a + b)/2)sin((a - b)/2)",
      options: [
        "2cos((a + b)/2)sin((a - b)/2)",
        "sin(a)cos(b) - cos(a)sin(b)",
        "cos(a)cos(b) + sin(a)sin(b)",
        "2sin((a + b)/2)cos((a - b)/2)"
      ]
    },
    {
      question: "What is the formula for cos(a) + cos(b)?",
      correctAnswer: "2cos((a + b)/2)cos((a - b)/2)",
      options: [
        "2cos((a + b)/2)cos((a - b)/2)",
        "2sin((a + b)/2)sin((a - b)/2)",
        "cos(a)cos(b) + sin(a)sin(b)",
        "cos(a)cos(b) - sin(a)sin(b)"
      ]
    },
    {
      question: "What is the formula for cos(a) - cos(b)?",
      correctAnswer: "-2sin((a + b)/2)sin((a - b)/2)",
      options: [
        "-2sin((a + b)/2)sin((a - b)/2)",
        "2cos((a + b)/2)cos((a - b)/2)",
        "cos(a)cos(b) - sin(a)sin(b)",
        "-2cos((a + b)/2)cos((a - b)/2)"
      ]
    },
    {
      question: "What is the product-to-sum formula for sin(a) · sin(b)?",
      correctAnswer: "(cos(a - b) - cos(a + b))/2",
      options: [
        "(cos(a - b) - cos(a + b))/2",
        "(cos(a + b) - cos(a - b))/2",
        "(sin(a + b) + sin(a - b))/2",
        "(sin(a - b) - sin(a + b))/2"
      ]
    },
    {
      question: "What is the product-to-sum formula for cos(a) · cos(b)?",
      correctAnswer: "(cos(a + b) + cos(a - b))/2",
      options: [
        "(cos(a + b) + cos(a - b))/2",
        "(cos(a - b) - cos(a + b))/2",
        "(sin(a + b) + sin(a - b))/2",
        "(sin(a - b) - sin(a + b))/2"
      ]
    }
]
let currentFlashcard;
let userAnswered = false;

function getRandomFlashcard() {
  return flashcards[Math.floor(Math.random() * flashcards.length)];
}

function showFlashcard() {
  userAnswered = false;
  document.getElementById("result").innerText = "";
  document.getElementById("next-btn").style.display = "none";

  currentFlashcard = getRandomFlashcard();

  document.getElementById("question").innerText = currentFlashcard.question;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  currentFlashcard.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(option));
    choicesContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  if (userAnswered) return;

  userAnswered = true;
  const resultDiv = document.getElementById("result");

  if (selectedAnswer === currentFlashcard.correctAnswer) {
    resultDiv.innerText = "Correct!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.innerText = `Wrong! Correct answer: ${currentFlashcard.correctAnswer}`;
    resultDiv.style.color = "red";
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

document.getElementById("next-btn").addEventListener("click", showFlashcard);

showFlashcard();