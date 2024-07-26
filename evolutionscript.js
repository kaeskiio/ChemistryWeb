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
    {//#4 D
        question: "Farmers spray pesticides on their plants to protect the plants from being eaten by insects. Some individual insects have a genetic mutation that makes them resistant to the toxins in the pesticides.<br><br> Which statement best describes how only a few resistant individuals resulted in the pesticide becoming ineffective?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The resistant insects change the toxin on the plants, making it safe for others.", image: "", correct: false },
            { text: "The resistant insects grow larger and eat less of the plants.", image: "", correct: false },
            { text: "The resistant insects eat the contaminated surface and leave the rest for others.", image: "", correct: false },
            { text: "The resistant insects are able to survive to reproduce and create a population that is also resistant.", image: "", correct: true },
        ]
    },
    {
        //#5 B
        question: "The defenses of two flightless birds that live in different habitats are shown.<br><br> How do the wings of the Gentoo penguin and the legs of the common ostrich provide an advantage in their habitat?",
        image: "bio1/!five.jpg",
        imageBottom: "",
        answers: [
            { text: "Allows them to find prey", image: "", correct: false },
            { text: "Allows them to escape from predators", image: "", correct: true },
            { text: "Allows them to control their body temperature", image: "", correct: false },
            { text: "Allows them to be camouflaged in their environments", image: "", correct: false },
        ]
    },
    {//#13 A
        question: "A cladogram of five species is shown.<br><br> Based on the cladogram, the ancestral species most likely had -",
        image: "bio1/!thirteen.jpg",
        imageBottom: "",
        answers: [
            { text: "a vertebral column", image: "", correct: true },
            { text: "a vertebral column and hair", image: "", correct: false },
            { text: "sharp teeth and retractable claws", image: "", correct: false },
            { text: "the ability to purr", image: "", correct: false },
        ]
    },
    {//#15 C/H
        question: "The Mexican long-nosed bat roosts in Big Bend National Park in West Texas. The bat feeds on nectar and pollen and hovers while it feeds. Additionally, its tongue can extend up to eight centimeters.<br><br> The features of Mexican long-nosed bats are evidence of natural selection because the features are adaptations that —",
        image: "",
        imageBottom: "",
        answers: [
            { text: "lead to an increase in predation by other species of animals", image: "", correct: false },
            { text: "show that most DNA mutations are necessary and advantageous but do not increase survival or reproductive success", image: "", correct: false },
            { text: "help individuals outcompete other individuals for food resources to increase survival and reproductive success", image: "", correct: true },
            { text: "are the result of intentional breeding", image: "", correct: false },
        ]
    }, 
    {//#22 B
        question: "When multiple transitional fossils are found in many rock layers, they provide evidence of -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "seasonal variation in the diet of a species", image: "", correct: false },
            { text: "gradual change of a species over time", image: "", correct: true },
            { text: "DNA functioning as the genetic material of organisms", image: "", correct: false },
            { text: "an unchanging environment", image: "", correct: false },
        ]
    },
    {//#44 C/H
        question: "Researchers analyzed a mitochondrial gene of different bat species to determine relatedness. A cladogram of their results is shown.<br><br> Based on the cladogram, which set of bat species is the least related?",
        image: "bio1/!fourtyfour.jpg",
        imageBottom: "",
        answers: [
            { text: "<i>Ptenochirus minor</i> and <i>Megaerops niphanae</i>", image: "", correct: false },
            { text: "<i>Dyacopterus spadiceus</i> and <i>Otopteropus cartilagonodus</i>", image: "", correct: false },
            { text: "<i>Haplonycteris fischeri</i> and <i>Ptenochirus jagori</i>", image: "", correct: true },
            { text: "<i>Cynopterus sphinx</i> and <i>Chironax melanocephalus</i>", image: "", correct: false },
        ]
    },
    {//#1 D
        question: "A new predator of rabbits has been introduced within an ecosystem. This new predator runs faster than the native predators of rabbits. Which statement describes what will most likely occur in the rabbit population due to the introduction of the predator?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The rabbits will mutate their genes and express genes that increase their speed.", image: "", correct: false },
            { text: "Slower rabbits will develop stronger legs and pass this trait to their offspring.", image: "", correct: false },
            { text: "Rabbits will mate and produce offspring with a different species that has faster runners.", image: "", correct: false },
            { text: "Faster rabbits will survive and reproduce increasing the average speed of the rabbit population.", image: "", correct: true },
        ]
    },
    {//#12 B
        question: "The diagram shows data on the evolution of horses. The data in the diagram is evidence that -",
        image: "bio1/_twelve.jpg",
        imageBottom: "",
        answers: [
            { text: "a new species of horse suddenly appeared", image: "", correct: false },
            { text: "horses slowly developed over time", image: "", correct: true },
            { text: "horses have similar stages of rapid embryological development", image: "", correct: false },
            { text: "horses have a common ancestry with other hooved animals", image: "", correct: false },
        ]
    },
    {//#16 D
        question: "The aye-aye lemur is a mammal that feeds mostly on insect larvae that live inside trees. The aye-aye lemur has a specialized middle finger that is long and thin. The aye-aye lemur moves along a tree branch and taps the branch with its specialized finger. When the aye-aye lemur hears a difference in the echo, it will tear open the bark with its teeth until the insect tunnel is exposed. The aye-aye lemur then uses its specialized finger to reach the insect larvae and remove it. Which selective pressure most likely resulted in the development of the aye-aye lemur's special adaptation?",
        image: "bio1/_sixteen.jpg",
        imageBottom: "",
        answers: [
            { text: "Limited availability of water", image: "", correct: false },
            { text: "Competing for mates", image: "", correct: false },
            { text: "Large numbers of natural predators", image: "", correct: false },
            { text: "Food sources that are hard to find", image: "", correct: true },
        ]
    },
    {//#22 C/H
        question: "Conservation biologists studying cheetah populations have determined that the lack of genetic diversity among the cheetahs is due to genetic drift. Which statement explains the most likely consequence of having a low genetic diversity on the cheetah population?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The chances of a mutation occurring in the cheetah population are decreased, increasing the cheetah survival rate.", image: "", correct: false },
            { text: "The gene pool remains in equilibrium and future generations of cheetah offspring are stronger and better adapted to their environments.", image: "", correct: false },
            { text: "The cheetah population becomes less likely to survive an outbreak of a disease or an environmental change, increasing the chance of species extinction.", image: "", correct: true },
            { text: "Genetic variability is maintained from older cheetah populations that have survived and endured environmental stressors.", image: "", correct: false },
        ]
    },
    {//#33 D
        question: "Male guppies found in areas without predators are more colorful than the ones found in locations with large predator populations. A population of adult guppies originating from an area with a large number of predators is transferred to a nearby area with few predators.<br> Which of these is most likely to happen over a few generations?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The mortality rate of the guppies will increase.", image: "", correct: false },
            { text: "Offspring will stop competing for resources.", image: "", correct: false },
            { text: "There will be an increase in mutations in the offspring.", image: "", correct: false },
            { text: "There will be an increase in the number of colorful guppies.", image: "", correct: true },
        ]
    },
    {//#47 A
        question: "This cladogram shows the evolutionary relationships among some mammals based on homologous structures.<br> Which statement is supported by this cladogram?",
        image: "bio1/_fourtyseven.jpg",
        imageBottom: "",
        answers: [
            { text: "Hippopotamuses are more closely related to cows than to javelinas.", image: "", correct: true },
            { text: "Toothed whales are more closely related to mouse deer than to hippopotamuses.", image: "", correct: false },
            { text: "Javelinas and pigs are more closely related than baleen whales and toothed whales.", image: "", correct: false },
            { text: "Cows and mouse deer are more closely related than javelinas and pigs.", image: "", correct: false },
        ]
    },
    {//#48 B
        question: "Some species of millipedes will roll into a ball when threatened, while other species of millipedes can secrete noxious chemicals from their bodies. These adaptations allow the millipedes to",
        image: "",
        imageBottom: "",
        answers: [
            { text: "survive in different temperatures", image: "", correct: false },
            { text: "avoid different types of predators", image: "", correct: true },
            { text: "conserve different amounts of energy", image: "", correct: false },
            { text: "blend into different types of environments", image: "", correct: false },
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
