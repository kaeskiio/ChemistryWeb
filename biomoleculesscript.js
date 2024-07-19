const questions = [
    {
        question: "A model of an enzyme and its corresponding substrate is shown.<br><br>Which model best represents the molecules at the end of the reaction?",
        image: "bio1/twentynine.jpg",
        answers: [
            { text: "", image: "bio1/twentynineA.jpg", correct: false },
            { text: "", image: "bio1/twentynineB.jpg", correct: true },
            { text: "", image: "bio1/twentynineC.jpg", correct: false },
            { text: "", image: "bio1/twentynineD.jpg", correct: false },
        ]
    },
    {
        question: "Which statements best compare a function of proteins and lipids in a human cell?",
        image: "",
        answers: [
            { text: "Proteins provide energy for cellular processes.<br> Lipids catalyze chemical reactions inside the cell.", image: "", correct: false },
            { text: "Proteins catalyze chemical reactions inside the cell.<br> Lipids allow for the transport of certain molecules into and out of the cell.", image: "", correct: true },
            { text: "Proteins allow for the transport of certain molecules into and out of the cell.<br> Lipids store genetic information for cells.", image: "", correct: false },
            { text: "Proteins store genetic information for cells.<br> Lipids provide energy for cellular processes.", image: "", correct: false },
        ]
    },  
    {
        question: "<i>E. coli</i> has three genes that each code for different enzymes that break down lactose. Scientists conducted investigations about the production of these enzymes using samples of <i>E. coli</i>. Their results are shown in the table.<br><br>Which conclusion about the production of the enzymes can be determined by analyzing the scientists results?",
        image: "bio1/fourtyeight.jpg",
        answers: [
            { text: "Gene expression for the enzymes was controlled by the temperature of lactose.", image: "", correct: false },
            { text: "The genes for the enzymes were expressed in equal amounts during both experiments.", image: "", correct: false },
            { text: "Gene expression for the enzymes was controlled by the presence of lactose.", image: "", correct: true },
            { text: "The genes for the enzymes were mutated before being expressed by the presence of lactose.", image: "", correct: false },
        ]
    },
    {
        question: "Which statements best compare the function of an ATP molecule to a DNA molecule?",
        image: "",
        answers: [
            { text: "ATP carries and transmits the genetic information of organisms.<br><br> DNA serves as a biological catalyst that speeds up the rate of chemical reactions.", image: "", correct: false },
            { text: "ATP provides energy for chemical reactions in the cell.<br><br> DNA carries and transmits the genetic information of organisms.", image: "", correct: true },
            { text: "ATP serves as a biological catalyst that speeds up the rate of chemical reactions.<br><br> DNA acts as a structural sugar in the cell walls of plants.", image: "", correct: false },
            { text: "ATP acts as a structural sugar in the cell walls of plants.<br><br> DNA provides energy for chemical reactions in the cell.", image: "", correct: false },
        ]
    },
    {
        question: "For an enzyme to be able to catalyze a reaction, the active site must -",
        image: "",
        answers: [
            { text: "be occupied by an inhibitor", image: "", correct: false },
            { text: "increase the activation energy level", image: "", correct: false },
            { text: "have a complementary shape to the substrate", image: "", correct: true },
            { text: "cause the enzyme to be destroyed in the reaction", image: "", correct: false },
        ]
    },
    {
        question: "A student makes a Venn diagram to compare the functions of carbohydrates and lipids.<br><br> Which cellular function of carbohydrates and lipids should be placed in the shared section of the Venn diagram?",
        image: "",
        answers: [
            { text: "Hormone production", image: "", correct: false },
            { text: "Structural support of cell walls", image: "", correct: false },
            { text: "Energy storage", image: "", correct: true },
            { text: "Catalyst for chemical reactions", image: "", correct: false },
        ]
    },
];

function redirectToNewPage() {
    window.location.href = 'biologyhome.html'; // Change 'newpage.html' to the desired URL
}

// Add event listener to the button
document.getElementById('home-button').addEventListener('click', redirectToNewPage);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questionImage = document.getElementById("question-image");
const nextButton = document.getElementById("next-btn");
const tryAgainButton = document.getElementById("tryAgain-btn");

let currentQuestionIndex = 0;
let score  = 0;
let questionNumber;
let visitedQuestions = [];

function startQuiz(){
    visitedQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    tryAgainButton.innerHTML = "Try Again";
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function wrongQuestion(){
    resetState();
    let currentQuestion = questions[questionNumber];
    let questionNo = currentQuestionIndex +1;
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    tryAgainButton.style.display = "none";
    questionImage.innerHTML = "";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.currentTarget; // Use currentTarget to get the button itself
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
    currentQuestionIndex++;
    if(currentQuestionIndex < 10){
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
