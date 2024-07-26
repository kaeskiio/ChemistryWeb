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
    { //#13 C
        question: "A student produces a labeled drawing of a virus for a presentation. The student states that the capsid has a function similar to the nuclear membrane found in animal cells.<br> Which of these describes the similar functions of capsids and nuclear membranes?",
        image: "bio1/_thirteen.jpg",
        answers: [
            { text: "Both transport proteins throughout the structures.", image: "", correct: false },
            { text: "Both provide energy for activities in the structures.", image: "", correct: false },
            { text: "Both protect genetic information for the structures.", image: "", correct: true },
            { text: "Both code for the proteins needed for reproduction of the structures.", image: "", correct: false },
        ]
    },
    { //#14 B
        question: "Enzymes are proteins that have a three-dimensional shape that is specific to a particular substrate. Environmental conditions can change the shape of the protein.<br> What is the most likely result if the shape of the enzyme changes?",
        image: "",
        answers: [
            { text: "The substrate will change its shape to match the enzyme.", image: "", correct: false },
            { text: "The enzyme will no longer be able to catalyze the reaction with the substrate.", image: "", correct: true },
            { text: "The products made from the enzyme and the substrate will be changed.", image: "", correct: false },
            { text: "The enzyme will be able to bind to more diverse substrates than before.", image: "", correct: false },
        ]
    },
    { //#30 B
        question: "In a study of physical endurance, researchers observed significant increases in the heart rates and breathing rates of participants immediately after they engaged in strenuous exercise.<br> Which statement best explains the increase in the heart rate and the breathing rate during exercise?",
        image: "",
        answers: [
            { text: "The water concentration in the blood increases.", image: "", correct: false },
            { text: "Body cells require increased oxygen as energy is expended.", image: "", correct: true },
            { text: "Muscle cells increase in temperature and require fluid to reduce the temperature.", image: "", correct: false },
            { text: "An increase in muscle activity causes increases in glucose levels in red blood cells.", image: "", correct: false },
        ]
    },
    {
     //#37 C
        question: "Which of these components are found in the cells of all living organisms?",
        image: "",
        answers: [
            { text: "Estrogen and testosterone", image: "", correct: false },
            { text: "Hemoglobin and lymphocytes", image: "", correct: false },
            { text: "Cytosine and guanine", image: "", correct: true },
            { text: "Cellulose and chlorophyll", image: "", correct: false },
        ]
    },
    {
     //#40 A
        question: "A table of four types of carbohydrates is shown. Which list correctly matches the functions to the types of carbohydrates?",
        image: "bio1/_fourty.jpg",
        answers: [
            { text: "Energy: glycogen and starch<br>Structure: cellulose and chitin", image: "", correct: true },
            { text: "Energy: cellulose and chitin<br>Structure: glycogen and starch", image: "", correct: false },
            { text: "Energy: chitin and glycogen<br>Structure: cellulose and starch", image: "", correct: false },
            { text: "Energy: cellulose and starch<br>Structure: chitin and glycogen", image: "", correct: false },
        ]
    },
    { //#50 C
        question: "Transmembrane proteins span the width of cell membranes. Four types of transmembrane proteins are shown in a section of cell membrane.<br> Although these proteins have different specific functions, they all -",
        image: "bio1/_fifty.jpg",
        answers: [
            { text: "stop chemical reactions within the cell", image: "", correct: false },
            { text: "synthesize molecules that signal other cells", image: "", correct: false },
            { text: "help the cell interact with its external environment", image: "", correct: true },
            { text: "remove large waste particles from the cytoplasm of the cell", image: "", correct: false },
        ]
    },
];

function redirectToNewPage() {
    window.location.href = 'biologyhome.html'; 
}

// Add event listener to the button
document.getElementById('home-button').addEventListener('click', redirectToNewPage);

const MAX_QUESTIONS = 10;

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
