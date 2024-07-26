const questions = [
    {//#5 D
        question: "Which of these shows an example of an insertion mutation?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/fiveA.jpg", correct: false },
            { text: "", image: "bio1/fiveB.jpg", correct: false },
            { text: "", image: "bio1/fiveC.jpg", correct: false },
            { text: "", image: "bio1/fiveD.jpg", correct: true },
        ]
    },{//#10 D
        question: "When a stem cell divides, it produces two daughter cells. One daughter cell will remain a stem cell, while the other daughter cell will differentiate into a specialized cell.<br><br>Which factor will most directly determine what type of specialized cell will be produced?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The size of the cell", image: "", correct: false },
            { text: "The length of the cell cycle", image: "", correct: false },
            { text: "The number of chromosomes that are replicated", image: "", correct: false },
            { text: "The genes that are expressed", image: "", correct: true },
        ]
    },{//#16 D
        question: "A model of transcription and a codon chart are shown. Which amino acid would be coded first from the DNA strand being transcribed?",
        image: "bio1/sixteen.jpg",
        imageBottom: "",
        answers: [
            { text: "Cys", image: "", correct: false },
            { text: "Phe", image: "", correct: false },
            { text: "Ile", image: "", correct: false },
            { text: "Met", image: "", correct: true },
        ]
    },{//#20 C/H
        question: "What components make up the backbone of a DNA molecule?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Purines and deoxyribose", image: "", correct: false },
            { text: "Pyrimidines and purines", image: "", correct: false },
            { text: "Deoxyribose and phosphate groups", image: "", correct: true },
            { text: "Phosphate groups and pyrimidines", image: "", correct: false },
        ]
    },{//#28 D/J
        question: "A model of DNA is shown.<br><br>Which part of the DNA model is most directly associated with the coding of genetic information?",
        image: "bio1/twentyeight.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/twentyeightA.jpg", correct: false },
            { text: "", image: "bio1/twentyeightB.jpg", correct: false },
            { text: "", image: "bio1/twentyeightC.jpg", correct: false },
            { text: "", image: "bio1/twentyeightD.jpg", correct: true },
        ]
    },
    {//#3 C
        question: "An illustration of how a particular DNA mutation will most likely affect the polypeptide produced is shown.<br><br> What type of mutation is illustrated?",
        image: "bio1/!three.jpg",
        imageBottom: "",
        answers: [
            { text: "Insertion", image: "", correct: false },
            { text: "Translocation", image: "", correct: false },
            { text: "Substitution", image: "", correct: true },
            { text: "Deletion", image: "", correct: false },
        ]
    },
    {//#11 C
        question: "A segment of DNA is shown in the diagram.<br><br> Which of these identifies the part of the DNA segment labeled X?",
        image: "bio1/!eleven.jpg",
        imageBottom: "",
        answers: [
            { text: "Nucleotide", image: "", correct: false },
            { text: "Phosphate group", image: "", correct: false },
            { text: "Hydrogen bond", image: "", correct: true },
            { text: "Deoxyribose", image: "", correct: false },
        ]
    },
    {//#23 D
        question: "Environmental factors typically activate genes in a cell by causing the cell to -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "produce identical daughter cells through mitosis", image: "", correct: false },
            { text: "form haploid gamete cells through meiosis", image: "", correct: false },
            { text: "fuse with another cell to increase the size of its genome", image: "", correct: false },
            { text: "transcribe specific DNA segments to mRNA for translation", image: "", correct: true },
        ]
    },
    {//#27 A
        question: "A partial DNA segment and an mRNA codon chart are shown.<br><br> What amino acid sequence is encoded in the partial DNA segment?",
        image: "bio1/!twentyseven.jpg",
        imageBottom: "",
        answers: [
            { text: "Serine - Threonine - Tyrosine", image: "", correct: true },
            { text: "Serine - Serine - Tyrosine", image: "", correct: false },
            { text: "Serine - Threonine - Methionine", image: "", correct: false },
            { text: "Serine - Alanine - Methionine", image: "", correct: false },
        ]
    },
    {//#3 B
        question: "Eight components present in nucleic acids are listed in the box. Which components bond with adenine in a section of double-stranded DNA?",
        image: "bio1/_three.jpg",
        imageBottom: "",
        answers: [
            { text: "1, 3, 5, and 6 only", image: "", correct: false },
            { text: "3 and 5 only", image: "", correct: true },
            { text: "2 and 4 only", image: "", correct: false },
            { text: "3, 4, 7, and 8 only", image: "", correct: false },
        ]
    },
    {//#8 B
        question: "Students are modeling mRNA during the process of protein synthesis. Which answer choice correctly describes the model of the mRNA strand being transcribed?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The mRNA strand is complementary to the DNA template strand; however, uracil instead of adenine is paired with thymine.", image: "", correct: false },
            { text: "The mRNA strand is complementary to the DNA template strand; however, uracil instead of thymine is paired with adenine.", image: "", correct: true },
            { text: "The mRNA strand is an exact copy of the DNA template strand; however, uracil instead of adenine is paired with thymine.", image: "", correct: false },
            { text: "The mRNA strand is an exact copy of the DNA template strand; however, uracil instead of thymine is paired with adenine.", image: "", correct: false },
        ]
    },
    {//#23 A
        question: "CRISPR-Cas9 is a genetic modification technique that edits parts of the genome of an organism. Using this technique scientists can add, remove, or modify sections of the DNA sequence.<br><br> How can scientists use this technique to control gene expression?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "By activating or deactivating specific genes", image: "", correct: true },
            { text: "By calculating the number of genes different organisms produce", image: "", correct: false },
            { text: "By identifying how closely related one individual is to another", image: "", correct: false },
            { text: "By determining the number of chromosomes in an organism", image: "", correct: false },
        ]
    },
    {//#28 B
        question: "The model shows a mutation to a partial sequence of bases in a gene. Which type of mutation does the model demonstrate?",
        image: "bio1/_twentyeight.jpg",
        imageBottom: "",
        answers: [
            { text: "Deletion", image: "", correct: false },
            { text: "Insertion", image: "", correct: true },
            { text: "Substitution", image: "", correct: false },
            { text: "Translocation", image: "", correct: false },
        ]
    },
    {//#46 C
        question: "Which table shows two steps of DNA replication?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/_fourtysixA.jpg", correct: false },
            { text: "", image: "bio1/_fourtysixB.jpg", correct: false },
            { text: "", image: "bio1/_fourtysixC.jpg", correct: true },
            { text: "", image: "bio1/_fourtysixD.jpg", correct: false },
        ]
    },
];

function redirectToNewPage() {
    window.location.href = 'biologyhome.html'; // Change 'newpage.html' to the desired URL
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
