const questions = [
    { //#1
        question: "What is the charge of Ammonium?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#2
        question: "What is the charge of Hydronium?",
        answers: [
            { text: "+1", correct: true},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#3
        question: "What is the charge of Mercury I?",
        answers: [
            { text: "+2", correct: true},
            { text: "-1", correct: false},
            { text: "+1", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#4
        question: "What is the charge of Dihydrogen Phosphate?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#5
        question: "What is the charge of Hydrogen Carbonate?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#6
        question: "What is the charge of Hydrogen Sulfite?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#7
        question: "What is the charge of Hydrogen Sulfate?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#8
        question: "What is the charge of Nitrite?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#9
        question: "What is the charge of Nitrate?",
        answers: [
            { text: "-1", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#10
        question: "What is the charge of Hydroxide?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#11
        question: "What is the charge of Acetate?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#12
        question: "What is the charge of Cyanide?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#13
        question: "What is the charge of Cyanate?",
        answers: [
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: true},
            { text: "0", correct: false},
        ]
    },
    { //#14
        question: "What is the charge of Thiocyanate?",
        answers: [
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "0", correct: false},
            { text: "-1", correct: true},
        ]
    },
    { //#15
        question: "What is the charge of Superoxide?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
            
        ]
    },
    { //#16
        question: "What is the charge of Permanganate?",
        answers: [
            { text: "+1", correct: false},
            { text: "-2", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: true},
        ]
    },
    { //#17
        question: "What is the charge of Hypochlorite?",
        answers: [
            { text: "+1", correct: false},
            { text: "-1", correct: true},
            { text: "+2", correct: false},
            { text: "0", correct: false},
        ]
    },
    { //#18
        question: "What is the charge of Chlorite?",
        answers: [
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "-1", correct: true},
            { text: "0", correct: false},
        ]
    },    
    { //#19
        question: "What is the charge of Chlorate?",
        answers: [
            { text: "-2", correct: false },
            { text: "-1", correct: true },
            { text: "-3", correct: false },
            { text: "0", correct: false },
        ]
    },
    { //#20
        question: "What is the charge of Perchlorate?",
        answers: [         
            { text: "-2", correct: false },
            { text: "-3", correct: false },
            { text: "-1", correct: true },
            { text: "0", correct: false },
        ]
    },
    { //#21
        question: "What is the charge of Bromate?",
        answers: [
            { text: "-2", correct: false },
            { text: "-3", correct: false },
            { text: "0", correct: false },
            { text: "-1", correct: true },
        ]
    },
    { //#22
        question: "What is the charge of Iodate?",
        answers: [
            { text: "-1", correct: true },
            { text: "-2", correct: false },
            { text: "-3", correct: false },
            { text: "0", correct: false },
        ]
    },
    { //#23
        question: "What is the charge of Hydrogen Phosphate?",
        answers: [
            { text: "-1", correct: false },
            { text: "-2", correct: true },
            { text: "0", correct: false },
            { text: "-3", correct: false },
        ]
    },
    { //#24
        question: "What is the charge of Carbonate?",
        answers: [
            { text: "-1", correct: false },
            { text: "-3", correct: false },
            { text: "0", correct: false },
            { text: "-2", correct: true },
        ]
    },
    { //#25
        question: "What is the charge of Sulfite?",
        answers: [
            { text: "-2", correct: true },
            { text: "-1", correct: false },
            { text: "0", correct: false },
            { text: "-3", correct: false },
        ]
    },
    { //#26
        question: "What is the charge of Sulfate?",
        answers: [
            { text: "-1", correct: false },
            { text: "-2", correct: true },
            { text: "0", correct: false },
            { text: "-3", correct: false },
        ]
    },
    { //#27
        question: "What is the charge of Thiosulfate?",
        answers: [
            { text: "-1", correct: false },
            { text: "+2", correct: false },
            { text: "-2", correct: true },
            { text: "0", correct: false },
        ]
    },
    { //#28
        question: "What is the charge of Silicate?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "-1", correct: false},
            { text: "+2", correct: false},
            
        ]
    },
    { //#29
        question: "What is the charge of Oxalate?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            
        ]
    },
    { //#30
        question: "What is the charge of Chromate?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-2", correct: true},
            { text: "+2", correct: false},
            
        ]
    },
    { //#31
        question: "What is the charge of Dichromate?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "-2", correct: true},
        ]
    },
    { //#32
        question: "What is the charge of Molybdate?",
        answers: [
            { text: "-2", correct: true},
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            
        ]
    },
    { //#33
        question: "What is the charge of Peroxide?",
        answers: [
            { text: "0", correct: false},
            { text: "-2", correct: true},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            
        ]
    },
    { //#34
        question: "What is the charge of Phosphate?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "-3", correct: true},
            { text: "+2", correct: false},
            
        ]
    },
    { //#35
        question: "What is the charge of Arsenate?",
        answers: [
            { text: "0", correct: false},
            { text: "+1", correct: false},
            { text: "+2", correct: false},
            { text: "-3", correct: true},
        ]
    },    
 ];
 
 function redirectToNewPage() {
     window.location.href = 'apprac.html'; // Change 'newpage.html' to the desired URL
 }
 
 // Add event listener to the button
 document.getElementById('home-button').addEventListener('click', redirectToNewPage);
 
 const MAX_QUESTIONS = 20;
 
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
 