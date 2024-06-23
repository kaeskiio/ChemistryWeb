const questions = [
    {
        //#1
        question: "What is the charge of Acetate?",
        answers: [
            { text: "-2", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#2
        question: "What is the charge of Ammonium?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: true},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#3
        question: "What is the charge of Carbonate?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#4
        question: "What is the charge of Chlorate?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#5
        question: "What is the charge of Chlorite?",
        answers: [
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: true},
        ]
    },
    {
        //#6
        question: "What is the charge of Chromate?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#7
        question: "What is the charge of Cyanide?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#8
        question: "What is the charge of Dichromate?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#9
        question: "What is the charge of Hydrogen carbonate?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#10
        question: "What is the charge of Hydroxide?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#11
        question: "What is the charge of Hypochlorite?",
        answers: [
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: true},
        ]
    },
    {
        //#12
        question: "What is the charge of Nitrate?",
        answers: [
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#13
        question: "What is the charge of Nitrite?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#14
        question: "What is the charge of Perchlorate?",
        answers: [
            { text: "-2", correct: false},
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#15
        question: "What is the charge of Permanganate?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
        ]
    },
    {
        //#16
        question: "What is the charge of Phosphate?",
        answers: [
            { text: "+2", correct: false},
            { text: "+3", correct: false},
            { text: "-2", correct: false},
            { text: "-3", correct: true},
        ]
    },
    {
        //#17
        question: "What is the charge of Sulfate?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },
    {
        //#18
        question: "What is the charge of Sulfite?",
        answers: [
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
        ]
    },       
];


function redirectToNewPage() {
    window.location.href = 'index.html'; // Change 'newpage.html' to the desired URL
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
        if(score < 20*.7)
        {
            questionElement.innerHTML = `You scored ${score} out of ${20}. Play again to improve your score!`;
        }
        else{
            questionElement.innerHTML = `You scored ${score} out of ${20}!`;
        }
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    
    function handleNextButton(){
        console.log("handleNextButton");
        currentQuestionIndex++;
        if(currentQuestionIndex< 20){
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
        if(currentQuestionIndex < 20){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    
    
    
    startQuiz();