//Day 4
const questions = [
        {
            //#1
            question: "Who first proposed the idea of atoms?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "John Dalton", correct: true },
                { text: "Albert Einstein", correct: false },
                { text: "Niels Bohr", correct: false }
            ]
        },
        {
            //#2
            question: "Which of the following best describes J.J. Thomson's Plum Pudding Model?",
            answers: [
                { text: "The atom is a solid sphere.", correct: false },
                { text: "The atom has a nucleus surrounded by electrons.", correct: false },
                { text: "The atom is a sphere of positive charge with negatively charged electrons embedded in it.", correct: true },
                { text: "The atom consists of protons, neutrons, and electrons.", correct: false }
            ]
        },
        {
            //#3
            question: "According to the Bohr model, what happens when an electron jumps to a lower energy level?",
            answers: [
                { text: "It absorbs energy.", correct: false },
                { text: "It releases energy as light.", correct: true },
                { text: "It forms a new element.", correct: false },
                { text: "It moves closer to the nucleus without energy change.", correct: false }
            ]
        },
        {
            //#4
            question: "Which of the following statements about electron orbitals is true?",
            answers: [
                { text: "Electron orbitals are regions of fixed size and shape.", correct: false },
                { text: "Electron orbitals are regions where electrons are most likely to be found.", correct: true },
                { text: "All electron orbitals have the same shape.", correct: false },
                { text: "Electrons move in circular paths in all orbitals.", correct: false }
            ]
        },
        {
            //#5
            question: "Which of the following best describes a covalent bond?",
            answers: [
                { text: "A bond where atoms share electrons.", correct: true },
                { text: "A bond formed by the transfer of electrons.", correct: false },
                { text: "A bond that occurs between metals.", correct: false },
                { text: "A bond that forms a crystal lattice structure.", correct: false }
            ]
        },
        {
            //#6
            question: "Which of the following is an example of a molecule formed by covalent bonding?",
            answers: [
                { text: "Sodium Chloride (NaCl)", correct: false },
                { text: "Water (H2O)", correct: true },
                { text: "Magnesium Oxide (MgO)", correct: false },
                { text: "Potassium Bromide (KBr)", correct: false }
            ]
        },
        {
            //#7
            question: "Which of the following best describes an ionic bond?",
            answers: [
                { text: "A bond where atoms share electrons.", correct: false },
                { text: "A bond formed by the transfer of electrons.", correct: true },
                { text: "A bond that forms molecules.", correct: false },
                { text: "A bond that occurs only between nonmetals.", correct: false }
            ]
        },
        {
            //#8
            question: "Which of the following is an example of a compound formed by ionic bonding?",
            answers: [
                { text: "Methane (CH4)", correct: false },
                { text: "Carbon Dioxide (CO2)", correct: false },
                { text: "Sodium Chloride (NaCl)", correct: true },
                { text: "Water (H2O)", correct: false }
            ]
        },
        {
            //#9
            question: "What is the significance of valence electrons in chemical reactions?",
            answers: [
                { text: "They determine the chemical properties and reactivity of an element.", correct: true },
                { text: "They do not participate in chemical reactions.", correct: false },
                { text: "They are located in the nucleus.", correct: false },
                { text: "They do not affect bonding.", correct: false }
            ]
        },
        {
            //#10
            question: "What happens to the properties of elements when they form a compound?",
            answers: [
                { text: "They retain their original properties.", correct: false },
                { text: "They can be separated by physical means.", correct: false },
                { text: "They form a substance with new properties.", correct: true },
                { text: "They remain as individual elements.", correct: false }
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