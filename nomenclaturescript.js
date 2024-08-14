const questions = [
    { //#1
        question: "What is the name of NH<sub>4</sub><sup>+</sup>?",
        answers: [
            { text: "Ammonium", correct: true},
            { text: "Ammonia", correct: false},
            { text: "Nitrogen Tetrahydride", correct: false},
            { text: "Methane", correct: false},
        ]
   },
   { //#2
    question: "What is the name of H<sub>3</sub>O<sup>+</sup>?",
    answers: [
        { text: "Trihydride Oxide", correct: false},
        { text: "Hydranium", correct: false},
        { text: "Hydronium", correct: true},
        { text: "Water ion", correct: false},
    ]
    },
    { //#3
        question: "What is the name of Hg<sub>2</sub><sup>2+</sup>?",  
        answers: [
            { text: "Hygenium", correct: false},
            { text: "Dimercury", correct: false},
            { text: "Mercurium", correct: false},
            { text: "Mercury I", correct: true},
        ]
    },
    { //#4
        question: "What is the name of H<sub>2</sub>PO<sub>4</sub><sup>-</sup>?",
        answers: [
            { text: "Dihydrogen Phosphate", correct: true},
            { text: "Hydrogen Phosphite", correct: false},
            { text: "Hydronium Phosphate", correct: false},
            { text: "Hydrogen Phosphate", correct: false},
        ]
    },
    { //#5
        question: "What is the name of HCO<sub>3</sub><sup>-</sup>?",
        answers: [
            { text: "Hydrogen Carbonite", correct: false},
            { text: "Hydrogen Carbonate", correct: true},
            { text: "Hydronium Carbonate", correct: false},
            { text: "Hydride Carbonate", correct: false},
        ]
    },
    { //#6
        question: "What is the name of HSO<sub>3</sub><sup>-</sup>?",
        answers: [
            { text: "Hydrogen Sulfate", correct: false},
            { text: "Sulfurous Hydrogen", correct: false},
            { text: "Hydrogen Sulfite", correct: true},
            { text: "Hydride Sulfite", correct: false},
        ]
    },
    { //#7
        question: "What is the name of HSO<sub>4</sub><sup>-</sup>?",
        answers: [
            { text: "Hydrogen Sulfate", correct: true},
            { text: "Sulfurous Hydrogen", correct: false},
            { text: "Hydrogen Sulfite", correct: false},
            { text: "Hydride Sulfite", correct: false},
        ]
    },
    { //#8
        question: "What is the name of NO<sub>2</sub><sup>-</sup>?",
        answers: [
            { text: "Nitrate", correct: false},
            { text: "Nitrous", correct: false},
            { text: "Nitrous Acid", correct: false},
            { text: "Nitrite", correct: true},
        ]
    },
    { //#9
        question: "What is the name of NO<sub>3</sub><sup>-</sup>?",
        answers: [
            { text: "Nitrous", correct: false},
            { text: "Nitrate", correct: true},
            { text: "Nitrous Acid", correct: false},
            { text: "Nitrite", correct: false},
        ]
    },
    { //#10
        question: "What is the name of OH<sup>-</sup>?",
        answers: [
            { text: "Oxygenated Hydrogen", correct: false},
            { text: "Oxygen Hydride", correct: false},
            { text: "Hydroxide", correct: true},
            { text: "Hydronium", correct: false},
        ]
    },
    { //#11
        question: "What is the name of CH<sub>3</sub>COO<sup>-</sup>?",
        answers: [
            { text: "Glucousic Acid", correct: false},
            { text: "Glucose", correct: false},
            { text: "Acetite", correct: false},
            { text: "Acetate", correct: true},
        ]
    },
    { //#12
        question: "What is the name of CN<sup>-</sup>?",
        answers: [
            { text: "Cyanide", correct: true},
            { text: "Carbon Nitride", correct: false},
            { text: "Carbonous Nitrogen", correct: false},
            { text: "Methane", correct: false},
        ]
    },
    { //#13
        question: "What is the name of CNO<sup>-</sup>?",
        answers: [
            { text: "Cyanide", correct: false},
            { text: "Thiocyanate", correct: false},
            { text: "Cyanite", correct: false},
            { text: "Cyanate", correct: true},
        ]
    },
    { //#14
        question: "What is the name of CNS<sup>-</sup>?",
        answers: [
            { text: "Cyanide", correct: false},
            { text: "Thiocyanate", correct: true},
            { text: "Cyanite", correct: false},
            { text: "Cyanate", correct: false},
        ]
    },
    { //#15
        question: "What is the name of O<sub>2</sub><sup>-</sup>?",
        answers: [
            { text: "Oxygen", correct: false},
            { text: "Dioxygen", correct: false},
            { text: "Superoxide", correct: true},
            { text: "Oxide", correct: false},
        ]
    },
    { //#16
        question: "What is the name of MnO<sub>4</sub><sup>-</sup>?",
        answers: [
            { text: "Manganate", correct: false},
            { text: "Manganite", correct: false},
            { text: "Permanganite", correct: false},
            { text: "Permanganate", correct: true},
        ]
    },
    { //#17
        question: "What is the name of ClO<sup>-</sup>?",
        answers: [
            { text: "Hypochlorite", correct: true},
            { text: "Chlorite", correct: false},
            { text: "Chlorate", correct: false},
            { text: "Perchlorate", correct: false},
        ]
    },
    { //#18
        question: "What is the name of ClO<sub>2</sub><sup>-</sup>?",
        answers: [
            { text: "Hypochlorite", correct: false},
            { text: "Chlorite", correct: true},
            { text: "Chlorate", correct: false},
            { text: "Perchlorate", correct: false},
        ]
    },
    { //#19
        question: "What is the name of ClO<sub>3</sub><sup>-</sup>?",
        answers: [
            { text: "Hypochlorite", correct: false},
            { text: "Chlorite", correct: false},
            { text: "Chlorate", correct: true},
            { text: "Perchlorate", correct: false},
        ]
    },
    { //#20
        question: "What is the name of ClO<sub>4</sub><sup>-</sup>?",
        answers: [
            { text: "Hypochlorite", correct: false},
            { text: "Chlorite", correct: false},
            { text: "Chlorate", correct: false},
            { text: "Perchlorate", correct: true},
        ]
    },
    { //#21
        question: "What is the name of BrO<sub>3</sub><sup>-</sup>?",
        answers: [
            { text: "Bromate", correct: true},
            { text: "Bromine Oxide", correct: false},
            { text: "Bromite", correct: false},
            { text: "Perbromate", correct: false},
        ]
    },
    { //#22
        question: "What is the name of IO<sub>3</sub><sup>-</sup>?",
        answers: [
            { text: "Iodite", correct: false},
            { text: "Iodate", correct: true},
            { text: "Periodite", correct: false},
            { text: "Iodine Oxide", correct: false},
        ]
    },
    { //#23
        question: "What is the name of HPO<sub>4</sub><sup>2-</sup>?",
        answers: [
            { text: "Dihydrogen Phosphate", correct: false},
            { text: "Hydrogen Phosphite", correct: false},
            { text: "Hydronium Phosphate", correct: false},
            { text: "Hydrogen Phosphate", correct: true},
        ]
    },
    { //#24
        question: "What is the name of CO<sub>3</sub><sup>2-</sup>?",
        answers: [
            { text: "Carbonite", correct: false},
            { text: "Percarbonate", correct: false},
            { text: "Carbonate", correct: true},
            { text: "Carbonic Acid", correct: false},
        ]
    },
    { //#25
        question: "What is the name of SO<sub>3</sub><sup>2-</sup>?",
        answers: [
            { text: "Sulfate", correct: false},
            { text: "Sulfurous Oxide", correct: false},
            { text: "Persulfate", correct: false},
            { text: "Sulfite", correct: true},
        ]
    },
    { //#26
        question: "What is the name of SO<sub>4</sub><sup>2-</sup>?",
        answers: [
            { text: "Sulfate", correct: true},
            { text: "Sulfurous Oxide", correct: false},
            { text: "Persulfate", correct: false},
            { text: "Sulfite", correct: false},
        ]
    },
    { //#27
        question: "What is the name of S<sub>2</sub>O<sub>3</sub><sup>2-</sup>?",
        answers: [
            { text: "Sulfate", correct: false},
            { text: "Thiosulfate", correct: true},
            { text: "Persulfate", correct: false},
            { text: "Sulfite", correct: false},
        ]
    },
    { //#28
        question: "What is the name of SiO<sub>3</sub><sup>2-</sup>?",
        answers: [
            { text: "Persilicate", correct: false},
            { text: "Silicous Oxide", correct: false},
            { text: "Silicate", correct: true},
            { text: "Silicite", correct: false},
        ]
    },
    { //#29
        question: "What is the name of C<sub>2</sub>O<sub>4</sub><sup>2-</sup>?",
        answers: [
            { text: "Dicarbon Tetraoxide", correct: false},
            { text: "Thioxalate", correct: false},
            { text: "Peroxalate", correct: false},
            { text: "Oxalate", correct: true},
        ]
    },
    { //#30
        question: "What is the name of CrO<sub>4</sub><sup>2-</sup>?",
        answers: [
            { text: "Chromate", correct: true},
            { text: "Chromite", correct: false},
            { text: "Perchromate", correct: false},
            { text: "Dichromate", correct: false},
        ]
    },
    { //#31
        question: "What is the name of Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>?",
        answers: [
            { text: "Chromate", correct: false},
            { text: "Chromite", correct: false},
            { text: "Perchromate", correct: false},
            { text: "Dichromate", correct: true},
        ]
    },
    { //#32
        question: "What is the name of MoO<sub>4</sub><sup>2-</sup>?",
        answers: [
            { text: "Molybdite", correct: false},
            { text: "Molybdate", correct: true},
            { text: "Molybdenum Oxide", correct: false},
            { text: "Permolybdite", correct: false},
        ]
    },
    { //#33
        question: "What is the name of O<sub>2</sub><sup>2-</sup>?",
        answers: [
            { text: "Oxite", correct: false},
            { text: "Oxide", correct: false},
            { text: "Peroxide", correct: true},
            { text: "Dioxide", correct: false},
        ]
    },
    { //#34
        question: "What is the name of PO<sub>4</sub><sup>3-</sup>?",
        answers: [
            { text: "Phosphite", correct: false},
            { text: "Perphosphite", correct: false},
            { text: "Phosphoric Acid", correct: false},
            { text: "Phosphate", correct: true},
        ]
    },
    { //#35
        question: "What is the name of AsO<sub>4</sub><sup>3-</sup>?",
        answers: [
            { text: "Arsenate", correct: true},
            { text: "Arsenite", correct: false},
            { text: "Arsenic Acid", correct: false},
            { text: "Perarsenate", correct: false},
        ]
    },
];

function redirectToNewPage() {
    window.location.href = 'apprac.html'; // Change 'newpage.html' to the desired URL
}

// Add event listener to the button
document.getElementById('home-button').addEventListener('click', redirectToNewPage);

const MAX_QUESTIONS = 20;

const nameForm = document.getElementById("name-form");
const quizContainer = document.getElementById("quiz-container");
const nameInput = document.getElementById("name-input");
const startQuizBtn = document.getElementById("start-quiz-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questionImage = document.getElementById("question-image");
const nextButton = document.getElementById("next-btn");
const tryAgainButton = document.getElementById("tryAgain-btn");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let userName = '';
let lastIncorrectQuestionIndex = null; // To track the last incorrect question

startQuizBtn.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName) {
        nameForm.style.display = "none";
        quizContainer.style.display = "block";
        startQuiz();
    } else {
        alert("Please enter your name.");
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    shuffledQuestions = shuffleArray([...questions]).slice(0, MAX_QUESTIONS);
    currentQuestionIndex = 0;
    score = 0;
    lastIncorrectQuestionIndex = null; // Reset the index for incorrect answers
    nextButton.innerHTML = "Next";
    tryAgainButton.innerHTML = "Try Again";
    showQuestion();
}

function showQuestion() {
    resetState();

    if (currentQuestionIndex >= MAX_QUESTIONS) {
        showScore();
        return;
    }

    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        const img = document.createElement("img");
        img.src = currentQuestion.image;
        questionImage.appendChild(img);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = `
            ${answer.image ? `<img src="${answer.image}" alt="Answer image">` : ""}
            ${answer.text ? `<span>${answer.text}</span>` : ""}
        `;
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    tryAgainButton.style.display = "none";
    questionImage.innerHTML = "";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    } else {
        selectedBtn.classList.add("incorrect");
        lastIncorrectQuestionIndex = currentQuestionIndex; // Track incorrect question
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "false") {
                button.classList.add("incorrect");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
        tryAgainButton.style.display = "block";
    }
}

function showScore() {
    resetState();
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    questionElement.innerHTML = `Congratulations ${userName}!<br>Your score is ${score}/${MAX_QUESTIONS}.<br>Completed on ${dateStr} at ${timeStr}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < MAX_QUESTIONS){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < MAX_QUESTIONS) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

tryAgainButton.addEventListener("click", () => {
    if (lastIncorrectQuestionIndex !== null) {
        // Show the last incorrect question again
        currentQuestionIndex = lastIncorrectQuestionIndex;
        showQuestion();
    }
});
