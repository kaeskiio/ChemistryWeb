//The Cell
const questions = [
    {//#2 B/G
        question: "Which statement best describes how a virus replicates?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "A virus divides into two identical virus particles before infecting the host cell.", image: "", correct: false },
            { text: "A virus enters a host cell and uses the materials from the host cell to produce new virus particles.", image: "", correct: true },
            { text: "Multiple virus particles fuse and form a large particle that breaks apart, releasing new virus particles.", image: "", correct: false },
            { text: "Multiple virus particles break down in component parts, which then reassemble into new copies of the virus.", image: "", correct: false },
        ]
    },
    {//#12 A
        question: "Scientists determined the total mass of DNA from a sample of animal cells. The masses of equal numbers of cells were taken during three different stages of the cell cycle. Stage I contains cells massed during G<sub>1</sub> of the cell cycle.<br><br>Which statement best describes the cells during Stage II?",
        image: "bio1/twelve.jpg",
        imageBottom: "",
        answers: [
            { text: "The cells have replicated their DNA, but have not completed mitosis and cytokinesis.", image: "", correct: true },
            { text: "The cells have completed mitosis and cytokinesis without replicating their DNA.", image: "", correct: false },
            { text: "The cells have replicated their DNA and completed mitosis and cytokinesis.", image: "", correct: false },
            { text: "The cells have temporarily exited the cell cycle without replicating their DNA.", image: "", correct: false },
        ]
    },
    {//#14 C/H
        question: "Which type of movement across a cell's plasma membrane requires energy supplied by ATP?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Passive transport", image: "", correct: false },
            { text: "Simple diffusion", image: "", correct: false },
            { text: "Active transport", image: "", correct: true },
            { text: "Osmosis", image: "", correct: false },
        ]
    },
    {//#21 A
        question: "A prokaryotic cell and a eukaryotic cell are shown.<br><br>Which characteristic best distinguishes these cells as either prokaryotic or eukaryotic?",
        image: "bio1/twentyone.jpg",
        imageBottom: "",
        answers: [
            { text: "The organization of the genetic material", image: "", correct: true },
            { text: "The location of the cytoplasm", image: "", correct: false },
            { text: "The role of the cell membrane", image: "", correct: false },
            { text: "The function of the flagella", image: "", correct: false },
        ]
    },
    {//#26 D/J
        question: "The graph shows the oxygen consumed by an athlete during different stages of training.<br><br>Based on the graph, which process is occurring between minute 5 and minute 10?",
        image: "bio1/twentysix.jpg",
        imageBottom: "",
        answers: [
            { text: "Nuclei are building amino acids for energy storage.", image: "", correct: false },
            { text: "Ribosomes are building carbohydrates to increase energy output.", image: "", correct: false },
            { text: "Chloroplasts are using energy to produce oxygen.", image: "", correct: false },
            { text: "Mitochondria are using oxygen to produce ATP.", image: "", correct: true },
        ]
    },
    {//#32 C/H
        question: "A table comparing the characteristics of four samples is shown.<br><br>Which sample most likely contains viruses?",
        image: "bio1/thirtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Sample 1", image: "", correct: false },
            { text: "Sample 2", image: "", correct: false },
            { text: "Sample 3", image: "", correct: true },
            { text: "Sample 4", image: "", correct: false },
        ]
    },
    {//#35 B
        question: "Which model accurately shows a cell progressing through mitosis?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/thirtyfiveA.jpg", correct: false },
            { text: "", image: "bio1/thirtyfiveB.jpg", correct: true },
            { text: "", image: "bio1/thirtyfiveC.jpg", correct: false },
            { text: "", image: "bio1/thirtyfiveD.jpg", correct: false },
        ]
    },
    {//#37 A
        question: "Normal cells have a contact inhibition feedback mechanism that prevents the cells from replicating when other cells are touched. A diagram of cells with contact inhibition and cells without contact inhibition is shown.<br><br>Which statement best describes what will happen to cells in an organism that lack contact inhibition?",
        image: "bio1/thirtyseven.jpg",
        imageBottom: "",
        answers: [
            { text: "The cells will continue to grow, causing a tumor in the body.", image: "", correct: true },
            { text: "The cells will replicate normally, replacing body cells that die.", image: "", correct: false },
            { text: "The cells will replicate until the food supply for each cell is used, causing each cell to die.", image: "", correct: false },
            { text: "The cells will stop replicating once one layer is produced, as other body cells will crowd them out.", image: "", correct: false },
        ]
    },
    {//#40 A
        question: "Which table best compares the events that occur during different stages of the cell cycle?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/fourtyA.jpg", correct: true },
            { text: "", image: "bio1/fourtyB.jpg", correct: false },
            { text: "", image: "bio1/fourtyC.jpg", correct: false },
            { text: "", image: "bio1/fourtyD.jpg", correct: false },
        ]
    },
    {//#45 D/J
        question: "A model of two structures that perform cellular processes is shown.<br><br>What are the products of the cellular processes in these organelles?",
        image: "bio1/fourtyfive.jpg",
        imageBottom: "",
        answers: [
            { text: "I: glucose and carbon dioxide<br> II: oxygen and water", image: "", correct: false },
            { text: "I: carbon dioxide and oxygen<br> II: glucose and water", image: "", correct: false },
            { text: "I: oxygen and glucose<br> II: water and carbon dioxide", image: "", correct: false },
            { text: "I: carbon dioxide and water<br> II: glucose and oxygen", image: "", correct: true },
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
