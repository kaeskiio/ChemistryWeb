const questions = [
    {//#4 A
        question: "Oil spills in the ocean affect marine food webs. Animals that are initially affected by oil spills include sea otters, seabirds, and other organisms that spend most of their time on the ocean surface.<br>Based on the food web, how would a significant decrease in the sea otter population due to an oil spill most likely affect this ecosystem?",
        image: "bio1/four.jpg",
        imageBottom: "",
        answers: [
            { text: "The sea urchin population would increase causing the kelp population to decrease.", image: "", correct: true },
            { text: "The fish population would increase in response to the changes in the mussel population.", image: "", correct: false },
            { text: "The mussel population would increase in response to the changes in the algae population.", image: "", correct: false },
            { text: "The killer whale population would increase causing the fish population to decrease.", image: "", correct: false },
        ]
    },
    {//#6 B/G
        question: "In a Central Texas grassland, the producers incorporate 12,000 kJ of energy from the sun into their tissues. About how much energy would be incorporated into the tissues of herbivores?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "12,000 kJ", image: "", correct: false },
            { text: "1,200 kJ", image: "", correct: true },
            { text: "10,800 kJ", image: "", correct: false },
            { text: "1,080 kJ", image: "", correct: false },
        ]
    },
    {//#15 B
        question: "Leaf-cutter ants harvest leaves and carry them to fungi that convert plant material into a usable form for the ants to digest. The fungi depend on the leaves for nutrients. The ants also produce an antibiotic on their bodies that helps protect the fungi from harmful bacteria.<br><br> Which of these explains the relationship between the leaf-cutter ants and the fungi?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Predation, because the ants feed on the fungi", image: "", correct: false },
            { text: "Mutualism, because both the ants and the fungi benefit from each other", image: "", correct: true },
            { text: "Competition, because both organisms consume the same resource for energy", image: "", correct: false },
            { text: "Commensalism, because the ants receive energy from the fungi and the fungi are unaffected", image: "", correct: false },
        ]
    },
    {//#36 C/H
        question: "Some relationships between species found in the Texas Gulf Coast are shown in the food web.<br><br>Which energy pyramid best models energy flow in the Texas Gulf Coast community?",
        image: "bio1/thirtysix.jpg",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/thirtysixA.jpg", correct: false },
            { text: "", image: "bio1/thirtysixB.jpg", correct: false },
            { text: "", image: "bio1/thirtysixC.jpg", correct: true },
            { text: "", image: "bio1/thirtysixD.jpg", correct: false },
        ]
    },
    {//#38 C/H
        question: "In some coral reefs, a symbiotic relationship exists between pygmy seahorses and sea fans. The pygmy seahorse can wrap its tail around the branches of the sea fan. This allows the pygmy seahorse to be camouflaged within the sea fan, protecting it from predators. The pygmy seahorse does not harm or benefit the sea fan while it grasps the branches with its tail.<br><br>What is the correct classification of this symbiotic relationship?",
        image: "bio1/thirtyeight.jpg",
        imageBottom: "",
        answers: [
            { text: "Predator/prey", image: "", correct: false },
            { text: "Mutualism", image: "", correct: false },
            { text: "Commensalism", image: "", correct: true },
            { text: "Parasite/host", image: "", correct: false },
        ]
    },
    {//#46 C/H
        question: "During an extended dry season in an area, the majority of the ground cover dried up. Which description best explains how this would affect the ecosystem in that area?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The ecosystem would become less stable because the ranges of many organisms would expand and overlap.", image: "", correct: false },
            { text: "The ecosystem would become more stable because there would be less competition among canopy plants.", image: "", correct: false },
            { text: "The ecosystem would become less stable because less energy would be available to it from the decrease in producers.", image: "", correct: true },
            { text: "The ecosystem would become more stable because organisms in higher trophic levels would be able to find prey more easily.", image: "", correct: false },
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
