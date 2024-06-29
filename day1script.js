//Day 1
const questions = [
        {
            //#1
            question: "What is the definition of an Atomic Mass Unit (amu)?",
            answers: [
                { text: "A unit of energy that quantifies the energy in chemical reactions.", correct: false },
                { text: "A unit of mass that quantifies mass on an atomic or molecular scale.", correct: true },
                { text: "A unit of length that quantifies the distance between atoms.", correct: false },
                { text: "A unit of volume that quantifies the space occupied by an atom.", correct: false }
            ]
        },
        {
            question: "How many grams are in 0.5 kilograms?",
            answers: [
                { text: "50 grams", correct: false },
                { text: "500 grams", correct: true },
                { text: "0.05 grams", correct: false },
                { text: "5000 grams", correct: false }
            ]
        },        
        {
            //#3
            question: "What is the definition of a Kelvin (K)?",
            answers: [
                { text: "The base unit of measurement for length in the International System of Units (SI).", correct: false },
                { text: "The base unit of measurement for mass in the International System of Units (SI).", correct: false },
                { text: "The base unit of measurement for temperature in the International System of Units (SI).", correct: true },
                { text: "The base unit of measurement for time in the International System of Units (SI).", correct: false }
            ]
        },
        {
            //#4
            question: "Which of the following is an example of a temperature measured in Kelvin (K)?",
            answers: [
                { text: "The distance between two cities", correct: false },
                { text: "The temperature of boiling water (373.15 K)", correct: true },
                { text: "The mass of a chemical sample", correct: false },
                { text: "The volume of a gas at standard conditions", correct: false }
            ]
        },
        {
            question: "How many centimeters are in 5 inches?",
            answers: [
                { text: "10.16 cm", correct: false },
                { text: "12.7 cm", correct: true },
                { text: "15.24 cm", correct: false },
                { text: "20.32 cm", correct: false }
            ]
        },        
        {
            //#6
            question: "How is the unit 'Joule (J)' defined?",
            answers: [
                { text: "The unit of temperature measurement in the International System of Units (SI).", correct: false },
                { text: "The unit of mass measurement in the International System of Units (SI).", correct: false },
                { text: "The unit of energy measurement in the International System of Units (SI).", correct: true },
                { text: "The unit of volume measurement in the International System of Units (SI).", correct: false }
            ]
        },
        {
            //#7
            question: "Which of the following statements is true about the Kelvin (K)?",
            answers: [
                { text: "It is used to measure the length of objects in physics.", correct: false },
                { text: "It is the base unit of measurement for mass in the SI system.", correct: false },
                { text: "It is used in thermodynamics and climate science.", correct: true },
                { text: "It quantifies the volume of gases in chemical reactions.", correct: false }
            ]
        },
        {
            //#8
            question: "Which application is associated with the unit mole (mol)?",
            answers: [
                { text: "Measuring the distance between two points", correct: false },
                { text: "Calculating the energy of chemical reactions", correct: false },
                { text: "Determining the amount of substance in a chemical reaction", correct: true },
                { text: "Measuring the volume of a liquid", correct: false }
            ]
        },
        {
            //#9
            question: "What is an example of a quantity expressed in Atomic Mass Units (amu)?",
            answers: [
                { text: "The mass of a molecule", correct: true },
                { text: "The temperature of a solution", correct: false },
                { text: "The volume of a gas", correct: false },
                { text: "The distance between two chemical bonds", correct: false }
            ]
        },
        {
            question: "What is chemistry?",
            answers: [
                { text: "Chemistry is the study of celestial objects and the universe as a whole.", correct: false },
                { text: "Chemistry is the branch of science that studies matter.", correct: true },
                { text: "Chemistry is the study of human societies and cultures.", correct: false },
                { text: "Chemistry is the study of ancient civilizations and their artifacts.", correct: false }
            ]
        }, 
];

function redirectToNewPage() {
    window.location.href = 'vernhome.html'; // Change 'newpage.html' to the desired URL
}

    // Add event listener to the button
    document.getElementById('home-button').addEventListener('click', redirectToNewPage);

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const tryAgainButton = document.getElementById("tryAgain-btn");
    
    let currentQuestionIndex = 0;
    let score  = 0;
    let questionNumber;
    let visitedQuestions = [];
    
    function startQuiz(){
        visitedQuestions = [];
        console.log("startQuiz");
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        tryAgainButton.innerHTML = "Try Again";
        showQuestion();
    }
    
    function showQuestion(){
        console.log("showQuestion");
        resetState();
        questionNumber = Math.floor(Math.random() * questions.length);
        while(visitedQuestions.includes(questionNumber)){
            console.log("questionNumber in visited questions, questionNumber = " + questionNumber);
            questionNumber = Math.floor(Math.random() * questions.length);
        }
        console.log(visitedQuestions + " visited questions");
        console.log(questionNumber);
        let currentQuestion = questions[questionNumber];
        visitedQuestions.push(questionNumber);
        let questionNo = currentQuestionIndex +1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
    
    function wrongQuestion(){
        console.log("wrongQuestion");
        resetState();
        let currentQuestion = questions[questionNumber];
        let questionNo = currentQuestionIndex+1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });  
    }
    
    
    function resetState(){
        console.log("resetState");
        nextButton.style.display = "none";
        tryAgainButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(e){
        console.log("selectAnswer");
        const selectedBtn = e.target;
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
        console.log("showScore");
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
        console.log("handleNextButton");
        currentQuestionIndex++;
        if(currentQuestionIndex<10){
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