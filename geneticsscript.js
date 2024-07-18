const questions = [
    {//#9 A
        question: "A model of the genetic control of coat color in rabbits is shown. Which Punnett square represents a cross that would produce albino offspring?",
        image: "bio1/nine.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/nineA.jpg", correct: true },
            { text: "", image: "bio1/nineB.jpg", correct: false },
            { text: "", image: "bio1/nineC.jpg", correct: false },
            { text: "", image: "bio1/nineD.jpg", correct: false },
        ]
    },
    {//#18 C/H
        question: "A cellular process is shown. Which of these is the most likely result of the process shown in the diagram?",
        image: "bio1/eighteen.jpg",
        imageBottom: "",
        answers: [
            { text: "Chromosome replication will cease to avoid errors that result in mutations.", image: "", correct: false },
            { text: "Offspring will no longer express traits from previous generations.", image: "", correct: false },
            { text: "Gametes will contain new allele combinations.", image: "", correct: true },
            { text: "Chromatids will have less genetic variety.", image: "", correct: false },
        ]
    },
    {//#30 G/B
        question: "In domesticated dogs, hair type is controlled by two different alleles. The allele for wire hair is (H) and the allele for smooth hair is (h). When two heterozygous dogs are crossed, what percentage of the offspring is expected to be homozygous for smooth hair?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "0%", image: "", correct: false },
            { text: "25%", image: "", correct: true },
            { text: "50%", image: "", correct: false },
            { text: "75%", image: "", correct: false },
        ]
    },
    {//#34 C/H
        question: "Which statements explain how a mutation in a somatic cell is different from a mutation that occurs in gametes?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Somatic cell mutations occur in cells that give rise to gametes.<br> Gamete mutations occur in cells that result in apoptosis.", image: "", correct: false },
            { text: "Somatic cell mutations are maintained in the gene pool.<br> Gamete mutations are expelled from the gene pool.", image: "", correct: false },
            { text: "Somatic cell mutations are generally not passed to offspring.<br> Gamete mutations are usually passed to offspring.", image: "", correct: true },
            { text: "Somatic cell mutations will not be expressed by the individual that contains the mutation.<br> Gamete mutations will be expressed by the individual.", image: "", correct: false },
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
