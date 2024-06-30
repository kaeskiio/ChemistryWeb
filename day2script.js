//Day 2
const questions = [
    {
        //#1
        question: "What makes up the atomic mass of an element?",
        answers: [
            { text: "The number of protons and electrons in the nucleus of an atom.", correct: false },
            { text: "The number of neutrons and electrons in the nucleus of an atom.", correct: false },
            { text: "The number of protons and neutrons in the nucleus of an atom.", correct: true },
            { text: "The total number of electrons in an atom.", correct: false }
        ]
    },
    {
        //#2
        question: "Add 7 protons, 6 neutrons, and 7 electrons. What element does it make?",
        answers: [
            { text: "Carbon (C)", correct: false },
            { text: "Nitrogen (N)", correct: true },
            { text: "Oxygen (O)", correct: false },
            { text: "Hydrogen (H)", correct: false }
        ]
    },
    {
        //#3
        question: "What are the subatomic particles that make up an atom?",
        answers: [
            { text: "Protons, Neutrons, and Electrons.", correct: true },
            { text: "Protons and Electrons only.", correct: false },
            { text: "Neutrons and Electrons only.", correct: false },
            { text: "Protons and Neutrons only.", correct: false }
        ]
    },
    {
        //#4
        question: "Which subatomic particle has a positive charge?",
        answers: [
            { text: "Neutron", correct: false },
            { text: "Electron", correct: false },
            { text: "Proton", correct: true },
            { text: "Nucleus", correct: false }
        ]
    },
    {
        //#5
        question: "What is the charge of a neutron?",
        answers: [
            { text: "Positive", correct: false },
            { text: "Negative", correct: false },
            { text: "Neutral", correct: true },
            { text: "Depends on the atom", correct: false }
        ]
    },
    {
        //#6
        question: "What is the atomic number of an element?",
        answers: [
            { text: "The number of protons in the nucleus of an atom.", correct: true },
            { text: "The number of neutrons in the nucleus of an atom.", correct: false },
            { text: "The total number of protons and neutrons in an atom.", correct: false },
            { text: "The number of electrons orbiting the nucleus.", correct: false }
        ]
    },
    {
        //#7
        question: "What is a period on the periodic table?",
        answers: [
            { text: "A horizontal row of elements.", correct: true },
            { text: "A vertical column of elements.", correct: false },
            { text: "A set of elements with the same number of protons.", correct: false },
            { text: "A section of elements that are all nonmetals.", correct: false }
        ]
    },
    {
        //#8
        question: "What is a group on the periodic table?",
        answers: [
            { text: "A horizontal row of elements.", correct: false },
            { text: "A vertical column of elements.", correct: true },
            { text: "A set of elements with the same number of neutrons.", correct: false },
            { text: "A section of elements that are all metals.", correct: false }
        ]
    },
    {
        //#9
        question: "What is the smallest unit of matter that retains the properties of an element?",
        answers: [
            { text: "Molecule", correct: false },
            { text: "Atom", correct: true },
            { text: "Proton", correct: false },
            { text: "Electron", correct: false }
        ]
    },
    {
        //#10
        question: "What does the electron cloud represent in an atom?",
        answers: [
            { text: "The location of protons", correct: false },
            { text: "The location of neutrons", correct: false },
            { text: "The area where electrons are likely to be found", correct: true },
            { text: "The nucleus of the atom", correct: false }
        ]
    }
];


function redirectToNewPage() {
window.location.href = 'vernhome.html'; // Change 'newpage.html' to the desired URL
}

// Add event listener to the button
document.getElementById('home-button').addEventListener('click', redirectToNewPage);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const tryAgainButton = document.getElementById("tryAgain-btn");

let currentQuestionIndex = 0;
let score  = 0;
let questionNumber;
let visitedQuestions = [];

function startQuiz(){
    visitedQuestions = [];
    console.log("startQuiz");
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    tryAgainButton.innerHTML = "Try Again";
    showQuestion();
}

function showQuestion(){
    console.log("showQuestion");
    resetState();
    questionNumber = Math.floor(Math.random() * questions.length);
    while(visitedQuestions.includes(questionNumber)){
        console.log("questionNumber in visited questions, questionNumber = " + questionNumber);
        questionNumber = Math.floor(Math.random() * questions.length);
    }
    console.log(visitedQuestions + " visited questions");
    console.log(questionNumber);
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

function wrongQuestion(){
    console.log("wrongQuestion");
    resetState();
    let currentQuestion = questions[questionNumber];
    let questionNo = currentQuestionIndex+1;
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
    console.log("resetState");
    nextButton.style.display = "none";
    tryAgainButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    console.log("selectAnswer");
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";

    }
    else{
        selectedBtn.classList.add("incorrect");
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "false"){
                button.classList.add("incorrect");
            }
            button.disabled = true;
        });
        nextButton.style.display= "block";
        tryAgainButton.style.display = "block";

        
    }
    
}

function showScore(){
    console.log("showScore");
    resetState();
    if(score < 10*.7)
    {
        questionElement.innerHTML = `You scored ${score} out of ${10}. Play again to improve your score!`;
    }
    else{
        questionElement.innerHTML = `You scored ${score} out of ${10}!`;
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    console.log("handleNextButton");
    currentQuestionIndex++;
    if(currentQuestionIndex<10){
        showQuestion();
    }
    else{
        showScore();
    }
}

tryAgainButton.addEventListener("click", () => {
    wrongQuestion();
});

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < 10){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});



startQuiz();