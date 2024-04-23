const questions = [
    {
        question: "1-5=?",
        answers: [
            {text: "6", correct: false},
            {text: "4", correct: false},
            {text: "-4", correct: true},
            {text: "-6", correct: false},
        ]
    },
    {
        question: "1+1=?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "16-9=?",
        answers: [
            {text: "7", correct: true},
            {text: "8", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        question: "1*0=?",
        answers: [
            {text: "3", correct: false},
            {text: "2", correct: false},
            {text: "1", correct: false},
            {text: "0", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", (e) => selectAnswer(e));
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }

    // Show Solution
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} \
    out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();