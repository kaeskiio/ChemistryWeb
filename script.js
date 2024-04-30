const questions = [
    {
        //#1
        question: "What is the name of KNO<sub>3</sub>?",
        answers: [
            { text: "Potassium Nitrate", correct: true},
            { text: "Potassium Nitrite", correct: false},
            { text: "Potassium Sulfate", correct: false},
            { text: "Potassium Sulfite", correct: false},
        ]
    },
    {
        //#2
        question: "What is the name of Na<sub>2</sub>SO<sub>4</sub>?",
        answers: [
            { text: "Sodium Nitrate", correct: false},
            { text: "Sodium Nitrite", correct: false},
            { text: "Sodium Sulfate", correct: true},
            { text: "Sodium Sulfite", correct: false},
        ]
    },
    { //#3
        question: "What is the name of CaSO<sub>4</sub>?",
        answers: [
            { text: "Calcium Nitrate", correct: false},
            { text: "Calcium Nitrite", correct: false},
            { text: "Calcium Sulfate", correct: true},
            { text: "Calcium Sulfite", correct: false},
        ]
    },
    { //#4
        question: "What is the formula of Chromium (VI) Phosphate?",
        answers: [
            { text: "Cr<sub>3</sub>(PO<sub>4</sub>)", correct: false},
            { text: "Cr<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub>", correct: false},
            { text: "Cr(PO<sub>4</sub>)", correct: false},
            { text: "Cr(PO<sub>4</sub>)<sub>2</sub>", correct: true},
        ]
    },
    { //#5
        question: "What is the name of CO?",
        answers: [
            { text: "Carbon Oxide", correct: false},
            { text: "Carbonic Oxide", correct: false},
            { text: "Carbon Monoxide", correct: true},
            { text: "Monocarbonic Oxide", correct: false},
        ]
    },
    { //#6
        question: "What is the formula of Magnesium Sulfate Heptahydrate?",
        answers: [
            { text: "Mg(SO<sub>4</sub>) * 7H<sub>2</sub>O", correct: true},
            { text: "Mg(SO<sub>4</sub>) * 6H<sub>2</sub>O", correct: false},
            { text: "Mg(SO<sub>3</sub>) * 7H<sub>2</sub>O", correct: false},
            { text: "Mg(SO<sub>3</sub>) * 6H<sub>2</sub>O", correct: false},
        ]
    },
    {  //#7
        question: "What is the name of CCI<sub>4</sub>?",
        answers: [
            { text: "Carbon Chloride", correct: false},
            { text: "Carbon Tetrachloride", correct: true},
            { text: "Carbon Chlorate", correct: false},
            { text: "Carbon Pentachloride", correct: false},
        ]
    },
    { //#8
        question: "What is the name of V<sub>2</sub>S<sub>3</sub>?",
        answers: [
            { text: "Vanadium(III) Sulfide", correct: true },
            { text: "Vanadium(II) Sulfide", correct: false},
            { text: "Vanadium(IV) Sulfide", correct: false },
            { text: "Vanadium(VI) Sulfide", correct: false},
        ]
    },
    { //#9
        question: "What is the name of SO<sub>2</sub>?" ,
        answers: [
            { text: "Sulfuric Acid", correct: false},
            { text: "Sulfur Monoxide", correct: false},
            { text: "Sulfur Oxide", correct: false},
            { text: "Sulfur Dioxide", correct: true},
        ]
    },
    { //#10
        question: "What is the name of AgC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>?",
        answers: [
            { text: "Carbon Oxide", correct: false},
            { text: "Silver Acetate", correct: true},
            { text: "Carbon Tetrachloride", correct: false} ,
            { text: "Monocarbonic Oxide", correct: false},
        ]
    },
    { //#11
        question: "What is the name of FePO<sub>4</sub>?",
        answers: [
            { text: "Iron(II) Phosphate", correct: false},
            { text: "Iron(VI) Phosphate", correct: false},
            { text: "Iron(III) Phosphate", correct: true},
            { text: "Iron(IV) Phosphate", correct: false},
        ]
    },
    {  //#12
        question: "What is the name of Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?",
        answers: [
            { text: "Manganese (II) Phosphate", correct: true},
            { text: "Manganese (VI) Phosphate", correct: false},
            { text: "Manganese (IV) Phosphate", correct: false} ,
            { text: "Manganese (III) Phosphate", correct: false},
        ]
    },
    { //#13
        question: "What is the name of B<sub>2</sub>Br<sub>4</sub>?",
        answers: [
            { text: "Boron(IV) Bromide", correct: false},
            { text: "Tetraboron Octabromide", correct: false},
            { text: "Diboron Tetrabromide", correct: true},
            { text: "Boron Bromide", correct: false},
        ]
    },
    { //#14
        question: "What is the name of SnSe<sub>2</sub>?",
        answers: [
            { text: "Tin (IV) Selenide", correct: true},
            { text: "Tin (II) Selenium", correct: false},
            { text: "Tin (III) Selenide", correct: false},
            { text: "Tin (IV) Selenium", correct: false},
        ]
    },
    { //#15
        question: "What is the name of Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>?",
        answers: [
            { text: "Calcium Acetite", correct: false},
            { text: "Calconic Acetate", correct: false},
            { text: "Acetic Acid", correct: false},
            { text: "Calcium Acetate", correct: true},
        ]
    },
    { //#16
        question: "What is the name of ZnS?",
        answers: [
            { text: "Zinc Sulfur", correct: false},
            { text: "Zinc(III) Sulfide", correct: false},
            { text: "Zinc Sulfide", correct: true},
            { text: "Zinc Sulfite", correct: false},
        ]
    },
	{ //#17
        question: "What is the name of CdSO<sub>3</sub>?",
        answers: [
            { text: "Cadmium Sulfite", correct: true},
            { text: "Cadmium Sulfate", correct: false},
            { text: "Cadmium Sulfide", correct: false},
            { text: "Cadmium Sulfur", correct: false},
        ]
    },
	{ //#18
        question: "What is the name of Fe(HCO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "Iron (III) Bicarbonate", correct: false},
            { text: "Iron (II) Carbonate", correct: false},
            { text: "Iron (IV) Bicarbonate", correct: false},
            { text: "Iron (II) Bicarbonate", correct: true},
        ]
    },
	{ //#19
        question: "What is the name of PbS?",
        answers: [
            { text: "Lead (IV) Sulfide", correct: false},
            { text: "Lead Sulfide", correct: false},
            { text: "Lead (II) Sulfide", correct: true},
            { text: "Lead (II) Sulfite", correct: false},
        ]
    },
	{ //#20
        question: "What is the name of BBr<sub>3</sub>?",
        answers: [
            { text: "Boron Tribromide", correct: true},
            { text: "Boron Bromide", correct: false},
            { text: "Boron Tribromine", correct: false},
            { text: "Boronbrominic acid", correct: false},
        ]
    },
	
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score  = 0;
let questionNumber;
let visitedQuestions = [];

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    questionNumber = Math.floor(Math.random() * questions.length);
    while(visitedQuestions.includes(questionNumber)){
        questionNumber = Math.floor(Math.random() * questions.length);
    }
    let currentQuestion = questions[questionNumber];
    visitedQuestions.push(questionNumber);
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
    visitedQuestions = [];
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
    if(score < questions.length*.7)
    {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}. Play again to improve your score!`;
    }
    else{
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    }
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