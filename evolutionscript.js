const questions = [
    {//#8 C
        question: "White clovers, <i>Trifolium repens</i>, are plants that are native to Europe and Central Asia and are able to produce the poison cyanide within their cells. Skunk cabbage, <i>Symplocarpus foetidus</i>, is a plant that is native to eastern North America and can produce a chemical that makes it have a strong, foul odor and bitter taste.<br><br>The chemicals produced by both the white clovers and skunk cabbages are adaptations that allow them to -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "attract more pollinators", image: "", correct: false },
            { text: "survive a long-term drought", image: "", correct: false },
            { text: "protect against herbivores", image: "", correct: true },
            { text: "grow better in colder habitats", image: "", correct: false },
        ]
    },
    {//#11 C
        question: "Blue flying fish live in the upper layers of the ocean. Blue flying fish have enlarged pectoral fins that enable them to glide for 400 meters above the ocean surface and appear to fly.<br><br>Which statement best describes how natural selection led to enlarged pectoral fins in blue flying fish?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Fish were able to glide out of the ocean and into other bodies of water to mate with other species.", image: "", correct: false },
            { text: "Fish were able to live both on land and in the water as a result of their larger pectoral fins.", image: "", correct: false },
            { text: "Fish with enlarged pectoral fins were able to glide out of the ocean to escape predators, increasing their fitness.", image: "", correct: true },
            { text: "Fish changed their DNA to express enlarged pectoral fins, changing the allele frequency of the population.", image: "", correct: false },
        ]
    },
    {//#13 B
        question: "Green anoles are lizards that can change their skin color rapidly in response to various stimuli. This adaptation is the result of -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "selective breeding of lizards by humans", image: "", correct: false },
            { text: "beneficial traits passed from parents to offspring", image: "", correct: true },
            { text: "geographic isolation that prevented genetic mutation", image: "", correct: false },
            { text: "environmental pollutants that changed their genotype", image: "", correct: false },
        ]
    },
    {//#39 C/H
        question: "Two scientists studied patterns of evolution in the fossil record. Many species they analyzed showed periods of slow changes interrupted by a period of rapid change. This pattern of periods of slow change interrupted by periods of rapid change with few, if any transitional fossils, best describes the theory of -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "natural selection", image: "", correct: false },
            { text: "genetic drift", image: "", correct: false },
            { text: "punctuated equilibrium", image: "", correct: true },
            { text: "gene flow", image: "", correct: false },
        ]
    }, 
    {//#41 B
        question: "A phylogenetic tree based on genetic similarities is shown.<br><br>Which numbered location on the phylogenetic tree identifies characteristics shared by Species B, C, and D?",
        image: "bio1/fourtyone.jpg",
        imageBottom: "",
        answers: [
            { text: "Location 1", image: "", correct: false },
            { text: "Location 2", image: "", correct: true },
            { text: "Location 3", image: "", correct: false },
            { text: "Location 4", image: "", correct: false },
        ]
    },
    {//#43 A
        question: "Cross-pollination of flowers from different populations of the same species will most likely result in -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "gene flow as new alleles are introduced", image: "", correct: true },
            { text: "evolution of a different species as alleles mix", image: "", correct: false },
            { text: "hybrid sterility as gametes from different individuals are incompatible", image: "", correct: false },
            { text: "a decrease of genetic variation among individuals", image: "", correct: false },
        ]
    },
    {//#49 B
        question: "Most animals avoid eating monarch butterflies due to their bad taste. Viceroy butterflies look very similar to the monarchs.<br><br> Which of these best explains how the viceroy butterfly benefits from looking like the monarch butterfly?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Viceroy butterflies are able to reproduce with the monarch butterflies.", image: "", correct: false },
            { text: "Viceroy butterflies are able to deter predators in the same way as the monarch butterflies.", image: "", correct: true },
            { text: "Viceroy butterflies are able to follow the migratory patterns of the monarch butterflies.", image: "", correct: false },
            { text: "Viceroy butterflies are able to find additional sources of food used by the monarch butterflies.", image: "", correct: false },
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
