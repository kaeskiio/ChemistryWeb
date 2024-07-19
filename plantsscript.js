const questions = [
    {//#3 A
        question: "Biting flies can transmit diseases and cause loss of blood for animals in nature. Horses have developed behaviors to repel biting flies such as ear twitching, head tossing, leg stomping, and tail swishing.<br>Which statement best describes the interaction between body systems that allows horses to repel biting flies?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The nervous system senses the biting flies and sends a signal to the muscular system to move.", image: "", correct: true },
            { text: "The circulatory system senses the biting flies and sends a signal to the nervous system to move.", image: "", correct: false },
            { text: "The muscular system senses the biting flies and sends a signal to the integumentary system to move.", image: "", correct: false },
            { text: "The integumentary system senses the biting flies and sends a signal to the circulatory system to move.", image: "", correct: false },
        ]
    },
    {//#7 D
        question: "Positive thigmotropism is a response in plants in which they move and grow toward an object the plant comes into physical contact with, usually curling around the object.<br><br>This response of the shoot system benefits the plant by allowing the plant to -",
        image: "bio1/seven.jpg",
        imageBottom: "",
        answers: [
            { text: "produce more pollen for pollinators", image: "", correct: false },
            { text: "take in more carbon dioxide to convert into glucose", image: "", correct: false },
            { text: "absorb more water to transport to the leaves", image: "", correct: false },
            { text: "reach more sunlight for photosynthesis", image: "", correct: true },
        ]
    },
    {//#19 D
        question: "Students studying the interaction among the reproductive parts of flowering plants make the graphic organizer shown. <br><br> Which terms best complete the numbered blanks in the flowchart?",
        image: "",
        imageBottom: "bio1/nineteen.jpg",
        answers: [
            { text: "(1) filaments, (2) petals, (3) stigma", image: "", correct: false },
            { text: "(1) petals, (2) ovule, (3) stigma", image: "", correct: false },
            { text: "(1) filaments, (2) petals, (3) ovule", image: "", correct: false },
            { text: "(1) petals, (2) stigma, (3) ovule", image: "", correct: true },
        ]
    },
    {//#22 D/J
        question: "Which sequence best describes an interaction between the integumentary and excretory systems that helps maintain homeostasis?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Heart rate increases &rarr; Blood vessels constrict &rarr; Blood pressure increases", image: "", correct: false },
            { text: "Blood vessel is damaged &rarr; Platelets begin to clump &rarr; Blood vessel ruptures", image: "", correct: false },
            { text: "Blood sugar levels rise &rarr; Pancreas secretes insulin &rarr; Blood sugar continues to rise", image: "", correct: false },
            { text: "Body temperature increases &rarr; Glands release sweat &rarr; Body temperature decreases", image: "", correct: true },
        ]
    }, 
    {//#24 G/B
        question: "Students designed an experiment to model the carbon cycle. The students combined water and carbon dioxide-producing disks in a sealed flask. The flask represented Earth's atmosphere, and the lamp represented the sun. Their design is shown.<br><br> Which component can be added to the flask to reduce the concentration of carbon dioxide in the model atmosphere created by the disks?",
        image: "bio1/twentyfour.jpg",
        imageBottom: "",
        answers: [
            { text: "Bacteria to use carbon during nitrification", image: "", correct: false },
            { text: "Plants to absorb carbon in the process of photosynthesis", image: "", correct: true },
            { text: "Snails to use carbon through cellular respiration", image: "", correct: false },
            { text: "Mushrooms to absorb carbon during decomposition", image: "", correct: false },
        ]
    },
    {//#33 B
        question: "In a recent study, scientists investigated the effects of microorganisms naturally found in the body. They raised mice in two different environments and compared their immune system functions in response to a bacterial infection. Their data are shown.<br><br>Which conclusion about the microorganisms naturally found in the body is most likely supported by these data?",
        image: "bio1/thirtythree.jpg",
        imageBottom: "",
        answers: [
            { text: "All microorganisms are harmful to the body.", image: "", correct: false },
            { text: "Microorganisms are important in promoting healthy immune systems.", image: "", correct: true },
            { text: "All bacteria in the body increase the effectiveness of the immune system.", image: "", correct: false },
            { text: "Bacteria that cause infections decrease the number and variety of immune cells in the body.", image: "", correct: false },
        ]
    },
    {//#42 D/J
        question: "Both the respiratory system and the digestive system involve the uptake of necessary molecules from an animal's surroundings. Alveoli are tiny sacs that aid in the exchange of carbon dioxide and oxygen in the lungs. Intestinal villi are tiny projections along the lining of the intestines used to take in nutrients from food passing through.<br><br>Which system must interact with the respiratory and digestive systems to transport gases and nutrients throughout the body?",
        image: "bio1/fourtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Endocrine", image: "", correct: false },
            { text: "Integumentary", image: "", correct: false },
            { text: "Immune", image: "", correct: false },
            { text: "Circulatory", image: "", correct: true },
        ]
    },
    {//#47 D/J
        question: "Water, sugar, and other important nutrients need to be transported from one part of a plant to another. Which statement correctly describes the interaction of the root and shoot systems during nutrient transport?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The leaves take in water and sugar, which are then transported to the rest of the plant through vascular tissues.", image: "", correct: false },
            { text: "The roots take in water and sugar, which are then transported to the rest of the plant through vascular tissues.", image: "", correct: false },
            { text: "The leaves take in water and the roots produce sugar that are transported to the rest of the plant through vascular tissues.", image: "", correct: false },
            { text: "The roots take in water and the leaves produce sugar that are transported to the rest of the plant through vascular tissues.", image: "", correct: true },
        ]
    },
    {//#1 B
        question: "When the skin comes in contact with an irritant, receptors in the skin send signals to the spinal cord. The signal is then sent to the brain for processing, and the individual begins to scratch the affected area. Which two systems are most likely interacting when a person experiences itching caused by a skin irritant?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Circulatory and excretory", image: "", correct: false },
            { text: "Integumentary and nervous", image: "", correct: true },
            { text: "Digestive and muscular", image: "", correct: false },
            { text: "Respiratory and lymphatic", image: "", correct: false },
        ]
    },
    {//#9 B
        question: "Which graphic organizer best compares the energy inputs and outputs of cellular respiration and photosynthesis?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/!nineA.jpg", correct: false },
            { text: "", image: "bio1/!nineB.jpg", correct: true },
            { text: "", image: "bio1/!nineC.jpg", correct: false },
            { text: "", image: "bio1/!nineD.jpg", correct: false },
        ]
    },
    {//#24 C
        question: "A flower that has both male and female reproductive structures is shown.<br><br>Which statement best describes an interaction that will allow a flowering plant to reproduce by self-pollination?",
        image: "bio1/!twentyfour.jpg",
        imageBottom: "",
        answers: [
            { text: "An anther is transferred from a filament to another filament within the same flower.", image: "", correct: false },
            { text: "An ovule is transferred from the ovary to a petal on a different flower.", image: "", correct: false },
            { text: "A pollen grain is transferred from an anther to the stigma of the same flower.", image: "", correct: true },
            { text: "An ovary is transferred from a flower on one plant to a flower on a different plant.", image: "", correct: false },
        ]
    },
    {//#26 D
        question: "Breaking down food for nutrients involves many body systems. A student made a partial list of the processes that occur.<br><br>Which body systems interact most directly in the three listed processes?",
        image: "bio1/!twentysix.jpg",
        imageBottom: "",
        answers: [
            { text: "Digestive, Integumentary, Muscular", image: "", correct: false },
            { text: "Excretory, Immune, Muscular", image: "", correct: false },
            { text: "Circulatory, Excretory, Immune", image: "", correct: false },
            { text: "Circulatory, Digestive, Endocrine", image: "", correct: true },
        ]
    },
    {//#46 F
        question: "Students set up a controlled experiment by growing the same type of seedlings in two different locations. After a period of time, the students observed the seedlings and recorded their observations in the table shown.<br><br> What caused the shoots of the seedlings on the windowsill to bend toward the window?",
        image: "bio1/!fourtysix.jpg",
        imageBottom: "",
        answers: [
            { text: "Hormones produced in response to a light stimulus", image: "", correct: true },
            { text: "Sugars produced in response to a gravity stimulus", image: "", correct: false },
            { text: "Carbon dioxide produced in response to a water stimulus", image: "", correct: false },
            { text: "Water produced in response to a nitrogen stimulus", image: "", correct: false },
        ]
    },
    {//#49 C
        question: "Which statement best describes an interaction between the muscular system and the respiratory system?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The hormone adrenaline causes blood vessels to contract and send more blood to major muscles.", image: "", correct: false },
            { text: "Metabolic wastes generated by muscle cells are eliminated in urine.", image: "", correct: false },
            { text: "The diaphragm contracts causing the chest cavity to expand, which draws air into the lungs.", image: "", correct: true },
            { text: "Nutrients absorbed in the small intestine are transported in blood to the brain.", image: "", correct: false },
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
