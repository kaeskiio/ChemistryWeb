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
    {//#7 D
        question: "The flow of energy in a grassland ecosystem is shown.<br> Based on the diagram, which two populations best represent trophic levels that receive the LEAST amount of the total energy provided to the ecosystem by the grass?",
        image: "bio1/!seven.jpg",
        imageBottom: "",
        answers: [
            { text: "Crickets and sparrows", image: "", correct: false },
            { text: "Toads and spiders", image: "", correct: false },
            { text: "Rabbits and mice", image: "", correct: false },
            { text: "Hognose snakes and owls", image: "", correct: true },
        ]
    },
    {//#10 B
        question: "Overfishing is causing the decline of fish populations, such as Eastern Atlantic bluefin tuna in the Mediterranean. Eastern Atlantic bluefin tuna are caught faster than they can reproduce.<br><br> Which statement describes the most likely effect that overfishing will have on this ecosystem?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Overfishing makes the ecosystem more stable by increasing competition for limited resources.", image: "", correct: false },
            { text: "Overfishing decreases the stability of the ecosystem by disrupting food chains.", image: "", correct: true },
            { text: "Overfishing has no effect on ecosystem's stability because it affects one species out of many.", image: "", correct: false },
            { text: "Overfishing increases ecosystem stability by allowing prey populations to overproduce.", image: "", correct: false },
        ]
    },
    {//#17 D
        question: "Sand dunes along the coast are formed of bare sand. Eventually, grasses take root on the dunes. Over time, larger plants such as shrubs and trees are able to grow at the edge of the sand dune ecosystem.<br><br> This gradual change in plant communities of a sand dune ecosystem can result in -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "reduced symbiotic relationships between producers and bacteria", image: "", correct: false },
            { text: "reduced energy absorption by consumers", image: "", correct: false },
            { text: "greater erosion rates", image: "", correct: false },
            { text: "greater species diversity", image: "", correct: true },
        ]
    },
    {//#21 C/H
        question: "In an experiment, two plants are grown together for a time and then separated. Plant 2 is a parasite of Plant 1.<br><br> Which graph best predicts the growth of Plant 1 and Plant 2 during the experiment?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/!twentyoneA.jpg", correct: false },
            { text: "", image: "bio1/!twentyoneB.jpg", correct: false },
            { text: "", image: "bio1/!twentyoneC.jpg", correct: true },
            { text: "", image: "bio1/!twentyoneD.jpg", correct: false },
        ]
    },
    {//#28 C/H
        question: "A farmer is struggling to control the population of a certain insect on his farm. After researching population control techniques, he discovers that a particular bird is a predator of this insect. The farmer purchases a number of these birds and releases them onto his farm.<br><br> How might the farmer's action most likely have a negative impact on the ecosystem?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "The birds will increase biodiversity of native plant species.", image: "", correct: false },
            { text: "The birds will pollinate native species, increasing genetic variation.", image: "", correct: false },
            { text: "The birds will consume beneficial insects, as well as the pest species.", image: "", correct: true },
            { text: "The birds will mate with native birds and create a new species.", image: "", correct: false },
        ]
    },
    {//#32 B
        question: "Which statement is an example of how carbon moves through a food chain as part of the carbon cycle?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Producers release carbon dioxide, and consumers take it in.", image: "", correct: false },
            { text: "Producers take in carbon dioxide, and consumers release it.", image: "", correct: true },
            { text: "Producers take in carbon from the soil, and they release it when they decompose.", image: "", correct: false },
            { text: "Producers release carbon into the soil, and consumers take it in from the soil.", image: "", correct: false },
        ]
    },
    {//#38 C/H
        question: "Researchers have observed striped hyenas and gray wolves hunting together in certain areas. One hypothesis suggests that changing hunting behavior aids both species in obtaining better and more resources. In this hypothesis the hyenas benefit because the wolves chase and take down large animals, such as goats, that the hyenas usually cannot catch alone. The wolves benefit from hyenas using their jaw strength to crack open large bones of prey to access additional nutrients from bone marrow.<br> Which table best identifies the ecological relationships among the gray wolf, hyena, and goats?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "", image: "bio1/!thirtyeightA.jpg", correct: false },
            { text: "", image: "bio1/!thirtyeightB.jpg", correct: false },
            { text: "", image: "bio1/!thirtyeightC.jpg", correct: true },
            { text: "", image: "bio1/!thirtyeightD.jpg", correct: false },
        ]
    },
    {//#40 C/H
        question: "The giant octopus lays 20,000 to 100,000 fertilized eggs. After hatching, most octopuses become prey to larger marine organisms, and less than 5% will reach adulthood to reproduce. One benefit of the giant octopus laying many eggs is to -",
        image: "",
        imageBottom: "",
        answers: [
            { text: "increase the average body size for surviving individuals to avoid predation", image: "", correct: false },
            { text: "decrease competition between different octopus species to maintain resources in the population", image: "", correct: false },
            { text: "increase the chance that more individuals will survive to maintain the population", image: "", correct: true },
            { text: "decrease the likelihood of offspring being consumed by predators", image: "", correct: false },
        ]
    },
    {//#42 C/H
        question: "A food web representing a Gulf Coast ecosystem is shown.<br><br> Based on this food web, which organism occupies multiple trophic levels?",
        image: "bio1/!fourtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Canada goose", image: "", correct: false },
            { text: "Eastern cottontail", image: "", correct: false },
            { text: "Loggerhead sea turtle", image: "", correct: true },
            { text: "Sand dollar", image: "", correct: false },
        ]
    },
    {//#45 D
        question: "Which statement best describes how bacteria recycle matter in an ecosystem?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Bacteria are producers that create energy for second-order consumers.", image: "", correct: false },
            { text: "Bacteria produce toxins to prevent the growth of invasive species.", image: "", correct: false },
            { text: "Bacteria cause diseases that limit the reproduction of organisms in a population.", image: "", correct: false },
            { text: "Bacteria are decomposers that help to transfer organic material to the soil.", image: "", correct: true },
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
