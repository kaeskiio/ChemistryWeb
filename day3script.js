//Day 3
const questions = [
    {
        //#1
        question: "Which of the following statements best describes a compound?",
        answers: [
            { text: "A substance composed of two or more elements that are physically combined.", correct: false },
            { text: "A substance composed of two or more elements that are chemically combined in fixed proportions.", correct: true },
            { text: "A mixture of elements that can be separated by physical means.", correct: false },
            { text: "A homogeneous mixture of elements.", correct: false }
        ]
    },
    {
        //#2
        question: "How can the components of a mixture be separated?",
        answers: [
            { text: "Through chemical reactions.", correct: false },
            { text: "By changing the state of matter.", correct: false },
            { text: "Through physical means such as filtration or distillation.", correct: true },
            { text: "By altering the chemical properties of the components.", correct: false }
        ]
    },
    {
        //#3
        question: "Which of the following is an example of a homogeneous mixture?",
        answers: [
            { text: "A salad.", correct: false },
            { text: "Saltwater.", correct: true },
            { text: "Sand and iron filings.", correct: false },
            { text: "A bowl of cereal with milk.", correct: false }
        ]
    },
    {
        //#4
        question: "What is a key characteristic of a chemical change?",
        answers: [
            { text: "It is reversible.", correct: false },
            { text: "It involves a change in the state of matter.", correct: false },
            { text: "It forms a new substance.", correct: true },
            { text: "It only involves physical properties.", correct: false }
        ]
    },
    {
        //#5
        question: "Which of the following is an indicator of a chemical change?",
        answers: [
            { text: "Change in shape.", correct: false },
            { text: "Change in size.", correct: false },
            { text: "Formation of bubbles (gas).", correct: true },
            { text: "Change in state of matter.", correct: false }
        ]
    },
    {
        //#6
        question: "Which of the following properties is an intensive physical property?",
        answers: [
            { text: "Mass", correct: false },
            { text: "Volume", correct: false },
            { text: "Density", correct: true },
            { text: "Length", correct: false }
        ]
    },
    {
        //#7
        question: "Which statement is true about physical changes?",
        answers: [
            { text: "They are irreversible.", correct: false },
            { text: "They result in the formation of new substances.", correct: false },
            { text: "They include changes in size and shape.", correct: true },
            { text: "They always produce a change in color.", correct: false }
        ]
    },
    {
        //#8
        question: "What distinguishes a heterogeneous mixture from a homogeneous mixture?",
        answers: [
            { text: "Heterogeneous mixtures have components that are evenly distributed.", correct: false },
            { text: "Homogeneous mixtures have visibly distinguishable components.", correct: false },
            { text: "Homogeneous mixtures have components that are not easily distinguished.", correct: true },
            { text: "Heterogeneous mixtures have components that are chemically combined.", correct: false }
        ]
    },
    {
        //#9
        question: "Which of the following is NOT an indicator of a chemical change?",
        answers: [
            { text: "Production of an odor.", correct: false },
            { text: "Change in temperature.", correct: false },
            { text: "Formation of a precipitate.", correct: false },
            { text: "Melting of ice.", correct: true }
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