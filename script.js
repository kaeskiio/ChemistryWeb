

const questions = [
    {
        question: "What is the name of KNO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: true},
            { text: "Potassium Nitrite", correct: false},
            { text: "Potassium Sulfate", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
    },
    {
        question: "What is the name of Na<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "Sodium Nitrate", correct: false},
            { text: "Sodium Nitrite", correct: false},
            { text: "Sodium Sulfate", correct: true},
            { text: "Sodium Sulfite", correct: false},
        ]
    },
    {
        question: "What is the name of CaSO<sub>4</sub>?",
        answers: [
            { text: "Calcium Nitrate", correct: false},
            { text: "Calcium Nitrite", correct: false},
            { text: "Calcium Sulfate", correct: true},
            { text: "Calcium Sulfite", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score  = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});



startQuiz();