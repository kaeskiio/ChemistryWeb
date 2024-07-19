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
    {//#27 D
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
