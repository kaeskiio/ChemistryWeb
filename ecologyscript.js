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
    {//#2 C/H
        question: "Which answer choice best describes a community?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Praying mantises caring for their young", image: "", correct: false },
            { text: "Three-spined sticklebacks living in estuaries", image: "", correct: false },
            { text: "Different species of lizards occupying the same niche in a desert", image: "", correct: true },
            { text: "Roosting mother bats recognizing their offspring", image: "", correct: false },
        ]
    },
    {//#4 C/H
        question: "What would be the most likely effect of a wildfire that burned a large area of a forest?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "More sugars and starches would be available for animals in the area.", image: "", correct: false },
            { text: "The availability of fossil fuels for use by industries in the area would be reduced.", image: "", correct: false },
            { text: "Less carbon dioxide would be removed from the atmosphere in the area by plants.", image: "", correct: true },
            { text: "An increase in animal respiration would increase the release of carbon dioxide in the area.", image: "", correct: false },
        ]
    },
    {//#11 A
        question: "The San Marcos salamander, <i>Eurycea nana</i>, is a light reddish-brown translucent salamander about 2-5 cm in length. <i>E. nana</i> is found only in Spring Lake and a portion of the San Marcos River. Which human activity would most likely decrease the ability of the salamanders to survive?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Increasing water consumption that decreases the flow of clean water from the springs that feed the river", image: "", correct: true },
            { text: "Public transportation that reduces the number of automobiles that contribute to pollution runoff into the river", image: "", correct: false },
            { text: "Tourism that helps fund the educational programs related to river ecosystem conservation", image: "", correct: false },
            { text: "The addition of a new food source into the river that limits competition for resources", image: "", correct: false },
        ]
    },
    {//#20 B
        question: "A partial Texas food web is shown. The populations of which organisms will most likely increase as a result of a disease that suddenly reduced the population of Texas horned lizards?",
        image: "bio1/_twenty.jpg",
        imageBottom: "",
        answers: [
            { text: "Grasses and ants", image: "", correct: false },
            { text: "Ants and grasshoppers", image: "", correct: true },
            { text: "Grasshoppers and Texas cottonmouths", image: "", correct: false },
            { text: "Texas cottonmouths and red-shouldered hawks", image: "", correct: false },
        ]
    },
    {//#21 A
        question: "A biomass pyramid of an ecosystem is shown. Which statement provides the best explanation for the difference in biomass of organisms found at each trophic level?",
        image: "bio1/_twentyone.jpg",
        imageBottom: "",
        answers: [
            { text: "Organisms at higher trophic levels have less energy available to them than organisms at lower trophic levels.", image: "", correct: true },
            { text: "Organisms at higher trophic levels require smaller habitats than organisms at lower trophic levels.", image: "", correct: false },
            { text: "Organisms at lower trophic levels provide less energy than organisms at higher trophic levels.", image: "", correct: false },
            { text: "Organisms at lower trophic levels outcompete organisms at higher trophic levels.", image: "", correct: false },
        ]
    },
    {//#32 A
        question: "The diagrams show a partial food web containing the <i>Glyptapanteles</i> wasp and the life cycle of this wasp. Based on the two diagrams, which list correctly identifies the relationships <i>Glyptapanteles</i> wasp larvae have with other organisms?",
        image: "bio1/_thirtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Competition: stinkbugs<br> Parasitism: geometrid moths", image: "", correct: true },
            { text: "Competition: geometrid moths<br>Commensalism: stinkbugs<br>Mutualism: guava and eucalyptus trees", image: "", correct: false },
            { text: "Competition: stinkbugs and geometrid moths<br>Commensalism: guava and eucalyptus trees", image: "", correct: false },
            { text: "Parasitism: geometrid moths<br>Commensalism: stinkbugs<br>Mutualism: guava and eucalyptus trees", image: "", correct: false },
        ]
    },
    {//#34 B
        question: "Grassland ecosystems in Texas have evolved to depend on periodic fires to return nutrients to the soil and encourage plant reproduction. Humans have prevented fires in many of these grassland areas, resulting in plant and animal communities with little diversity. Wildlife biologists often recommend purposefully starting fires called prescribed burns, which are monitored and controlled, in grassland ecosystems every 3 to 4 years. These biologists observe greater diversity in plant and animal life in the years following a prescribed burn.<br> What natural processes are the biologists attempting to imitate?",
        image: "",
        imageBottom: "",
        answers: [
            { text: "Biomagnification", image: "", correct: false },
            { text: "Succession", image: "", correct: true },
            { text: "Population bottleneck", image: "", correct: false },
            { text: "Species extinction", image: "", correct: false },
        ]
    },
    {//#42 C/H
        question: "White-tailed deer are seasonal breeders. Female white-tailed deer begin their reproductive cycle in the fall. Rising testosterone levels in male white-tailed deer cause them to start their breeding season around the same time. Offspring are born the following spring and summer. What is the most likely explanation for white-tailed deer having a seasonal breeding cycle instead of a monthly breeding cycle like many domesticated animals?",
        image: "bio1/_fourtytwo.jpg",
        imageBottom: "",
        answers: [
            { text: "Male and female deer come into contact with each other only in the fall.", image: "", correct: false },
            { text: "Large predators are not found in deer habitats during the spring and summer months.", image: "", correct: false },
            { text: "Giving birth only in the spring and summer ensures that offspring are born when food is most available.", image: "", correct: true },
            { text: "Deer give birth in the spring and summer in order to avoid being pregnant during the hot summer months.", image: "", correct: false },
        ]
    },
    {//#44 A
        question: "The ocean sunfish (<i>Mola mola</i>) is a large, flat fish that spends most of its time in deep water feeding mainly on jellyfish. Sunfish often have many species of copepods, small crustaceans, that bury their heads into the soft tissue of the sunfish. Sunfish will swim to the surface of the water and lie sideways, allowing seabirds to eat the copepods from their skin.<br> Which list describes the types of relationships the sunfish has with other marine organisms?",
        image: "bio1/_fourtyfour.jpg",
        imageBottom: "",
        answers: [
            { text: "Seabirds: mutualism<br>Jellyfish: predation<br>Copepods: parasitism", image: "", correct: true },
            { text: "Seabirds: parasitism<br>Jellyfish: commensalism<br>Copepods: predation", image: "", correct: false },
            { text: "Seabirds: predation<br>Jellyfish: mutualism<br>Copepods: commensalism", image: "", correct: false },
            { text: "Seabirds: commensalism<br>Jellyfish: parasitism<br>Copepods: mutualism", image: "", correct: false },
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
