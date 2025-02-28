const quizData = [
    {
        question: "1. What HTML tag is used to create a section of performatted text?",
        choices: ["<pre>", "<script>", "<code>", "<text>"],
        correct: 0
    },
    {
        question: " 2. How do you create a section of content with a specific margin in HTML?",
        choices: ["using the margin property", "using the padding attribute", "using the Style attribute", "using the space attribute"],
        correct: 2
    },
    {
        question: "3. Which Tag is used to create a table in HMTL?",
        choices: ["<tb>", "<t>", "<tab>", "<table>"],
        correct: 0
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

function loadQuiz() {
    const currentQuestion = quizData[currentQuiz];
    questionEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => selectChoice(index));
        choicesEl.appendChild(button);
    });
}

function selectChoice(selected) {
    const correct = quizData[currentQuiz].correct;
    if (selected === correct) {
        resultEl.textContent = "Correct!";
        score++;
    } else {
        resultEl.textContent = "Wrong!";
    }

    setTimeout(() => {
        resultEl.textContent = "";
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
    choicesEl.innerHTML = "";
    submitBtn.style.display = "none";
}

loadQuiz();




