const questions = [
    { //#1
         question: "What is the formula of Ammonium?",
         answers: [
             { text: "NH<sub>4</sub><sup>+</sup>", correct: true},
             { text: "H<sub>3</sub>O<sup>+</sup>", correct: false},
             { text: "Hg<sub>2</sub><sup>2+</sup>", correct: false},
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: false},
         ]
    },
    { //#2
         question: "What is the formula of Hydronium?",
         answers: [
             { text: "H<sub>3</sub>O<sup>+</sup>", correct: true},
             { text: "NH<sub>4</sub><sup>+</sup>", correct: false},
             { text: "Hg<sub>2</sub><sup>2+</sup>", correct: false},
             { text: "HCO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#3
         question: "What is the formula of Mercury I?",
         answers: [
             { text: "Hg<sub>2</sub><sup>2+</sup>", correct: true},
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "HCO<sub>3</sub><sup>-</sup>", correct: false},
             { text: "HSO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#4
         question: "What is the formula of Dihydrogen Phosphate?",
         answers: [
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: true},
             { text: "H<sub>3</sub>O<sup>+</sup>", correct: false},
             { text: "NO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "NO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#5
         question: "What is the formula of Hydrogen Carbonate?",
         answers: [
             { text: "HCO<sub>3</sub><sup>-</sup>", correct: true},
             { text: "NH<sub>4</sub><sup>+</sup>", correct: false},
             { text: "H<sub>3</sub>O<sup>+</sup>", correct: false},
             { text: "HSO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#6
         question: "What is the formula of Hydrogen Sulfite?",
         answers: [
             { text: "HSO<sub>3</sub><sup>-</sup>", correct: true},
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "SO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "SO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#7
         question: "What is the formula of Hydrogen Sulfate?",
         answers: [
             { text: "HSO<sub>4</sub><sup>-</sup>", correct: true},
             { text: "HSO<sub>3</sub><sup>-</sup>", correct: false},
             { text: "Hg<sub>2</sub><sup>2+</sup>", correct: false},
             { text: "HS<sub>3</sub>O<sup>+</sup>", correct: false},
         ]
     },
     { //#8
         question: "What is the formula of Nitrite?",
         answers: [
             { text: "NO<sub>2</sub><sup>-</sup>", correct: true},
             { text: "NH<sub>4</sub><sup>+</sup>", correct: false},
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "HCO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#9
         question: "What is the formula of Nitrate?",
         answers: [
             { text: "NO<sub>3</sub><sup>-</sup>", correct: true},
             { text: "HSO<sub>3</sub><sup>-</sup>", correct: false},
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "NO<sub>2</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#10
         question: "What is the formula of Hydroxide?",
         answers: [
             { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: false},
             { text: "OH<sup>-</sup>", correct: true},
             { text: "CN<sup>-</sup>", correct: false},
             { text: "CNO<sup>-</sup>", correct: false},
         ]
     },
     { //#11
         question: "What is the formula of Acetate?",
         answers: [
             { text: "CN<sup>-</sup>", correct: false},
             { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: true},
             { text: "CNS<sup>-</sup>", correct: false},
             { text: "O<sub>2</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#12
         question: "What is the formula of Cyanide?",
         answers: [
             { text: "CNO<sup>-</sup>", correct: false},
             { text: "CN<sup>-</sup>", correct: true},
             { text: "CNS<sup>-</sup>", correct: false},
             { text: "MnO<sub>4</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#13
         question: "What is the formula of Cyanate?",
         answers: [
             { text: "CNS<sup>-</sup>", correct: false},
             { text: "CNO<sup>-</sup>", correct: true},
             { text: "CN<sup>-</sup>", correct: false},
             { text: "ClO<sup>-</sup>", correct: false},
         ]
     },
     { //#14
         question: "What is the formula of Thiocyanate?",
         answers: [
             { text: "CNO<sup>-</sup>", correct: false},
             { text: "CNS<sup>-</sup>", correct: true},
             { text: "CN<sup>-</sup>", correct: false},
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#15
         question: "What is the formula of Superoxide?",
         answers: [
             { text: "ClO<sup>-</sup>", correct: false},
             { text: "O<sub>2</sub><sup>-</sup>", correct: true},
             { text: "MnO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#16
         question: "What is the formula of Permanganate?",
         answers: [
             { text: "O<sub>2</sub><sup>-</sup>", correct: false},
             { text: "MnO<sub>4</sub><sup>-</sup>", correct: true},
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "CNS<sup>-</sup>", correct: false},
         ]
     },
     { //#17
         question: "What is the formula of Hypochlorite?",
         answers: [
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "ClO<sup>-</sup>", correct: true},
             { text: "MnO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: false},
         ]
     },
     { //#18
         question: "What is the formula of Chlorite?",
         answers: [
             { text: "ClO<sup>-</sup>", correct: false},
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: true},
             { text: "CNS<sup>-</sup>", correct: false},
             { text: "HCO<sub>3</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#19
         question: "What is the formula of Chlorate?",
         answers: [
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "ClO<sub>2</sub><sup>2-</sup>", correct: false},
             { text: "ClO<sub>3</sub><sup>-</sup>", correct: true},
             { text: "ClO<sub>4</sub><sup>-</sup>", correct: false},
         ]
     },
     { //#20
         question: "What is the formula of Perchlorate?",
         answers: [
             { text: "ClO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "ClO<sub>3</sub><sup>-</sup>", correct: false},
             { text: "ClO<sub>4</sub><sup>-</sup>", correct: true},
             { text: "ClO<sub>2</sub><sup>2-</sup>", correct: false},
         ]
     },
     { //#21
         question: "What is the formula of Bromate?",
         answers: [
             { text: "BrO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "BrO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "BrO<sub>3</sub><sup>-</sup>", correct: true},
             { text: "BrO<sub>2</sub><sup>2-</sup>", correct: false},
         ]
     },
     { //#22
         question: "What is the formula of Iodate?",
         answers: [
             { text: "IO<sub>2</sub><sup>-</sup>", correct: false},
             { text: "IO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "IO<sub>3</sub><sup>-</sup>", correct: true},
             { text: "IO<sub>2</sub><sup>2-</sup>", correct: false},
         ]
     },
     { //#23
         question: "What is the formula of Hydrogen Phosphate?",
         answers: [
             { text: "HPO<sub>3</sub><sup>2-</sup>", correct: false},
             { text: "HPO<sub>4</sub><sup>2-</sup>", correct: true},
             { text: "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>", correct: false},
             { text: "H<sub>3</sub>PO<sub>4</sub>", correct: false},
         ]
     },
     { //#24
         question: "What is the formula of Carbonate?",
         answers: [
             { text: "CO<sub>2</sub><sup>2-</sup>", correct: false},
             { text: "CO<sub>2</sub>", correct: false},
             { text: "CO<sub>3</sub><sup>2-</sup>", correct: true},
             { text: "CO<sub>4</sub><sup>2-</sup>", correct: false},
         ]
     },
     { //#25
         question: "What is the formula of Sulfite?",
         answers: [
             { text: "SO<sub>4</sub><sup>2-</sup>", correct: false},
             { text: "SO<sub>3</sub>", correct: false},
             { text: "SO<sub>3</sub><sup>2-</sup>", correct: true},
             { text: "SO<sub>3</sub><sup>2+</sup>", correct: false},
         ]
     },
     { //#26
         question: "What is the formula of Sulfate?",
         answers: [
             { text: "SO<sub>3</sub>", correct: false},
             { text: "SO<sub>4</sub>", correct: false},
             { text: "SO<sub>4</sub><sup>2-</sup>", correct: true},
             { text: "SO<sub>2</sub><sup>2-</sup>", correct: false},
         ]
     },
     { //#27
         question: "What is the formula of Thiosulfate?",
         answers: [
             { text: "S<sub>2</sub>O<sub>2</sub><sup>2-</sup>", correct: false},
             { text: "SO<sub>4</sub><sup>2-</sup>", correct: false},
             { text: "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>", correct: true},
             { text: "S<sub>3</sub>O<sub>4</sub><sup>2-</sup>", correct: false},
         ]
     },
     { //#28
         question: "What is the formula of Silicate?",
         answers: [
             { text: "SiO<sub>2</sub>", correct: false},
             { text: "SiO<sub>4</sub>", correct: false},
             { text: "SiO<sub>3</sub><sup>+</sup>", correct: false},
             { text: "SiO<sub>3</sub><sup>2-</sup>", correct: true},
         ]
     },
     { //#29
         question: "What is the formula of Oxalate?",
         answers: [
             { text: "C<sub>2</sub>O<sub>3</sub>", correct: false},
             { text: "C<sub>2</sub>O<sub>5</sub>", correct: false},
             { text: "C<sub>2</sub>O<sub>4</sub><sup>+</sup>", correct: false},
             { text: "C<sub>2</sub>O<sub>4</sub><sup>2-</sup>", correct: true},
         ]
     },
     { //#30
         question: "What is the formula of Chromate?",
         answers: [
             { text: "CrO<sub>3</sub>", correct: false},
             { text: "CrO<sub>2</sub>", correct: false},
             { text: "Cr<sub>2</sub>O<sub>7</sub>", correct: false},
             { text: "CrO<sub>4</sub><sup>2-</sup>", correct: true},
         ]
     },
     { //#31
         question: "What is the formula of Dichromate?",
         answers: [
             { text: "CrO<sub>4</sub><sup>2-</sup>", correct: false},
             { text: "CrO<sub>3</sub>", correct: false},
             { text: "CrO<sub>2</sub>", correct: false},
             { text: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>", correct: true},
         ]
     },
     { //#32
         question: "What is the formula of Molybdate?",
         answers: [
             { text: "MoO<sub>3</sub>", correct: false},
             { text: "MoO<sub>2</sub>", correct: false},
             { text: "MoO<sub>5</sub>", correct: false},
             { text: "MoO<sub>4</sub><sup>2-</sup>", correct: true},
         ]
     },
     { //#33
         question: "What is the formula of Peroxide?",
         answers: [
             { text: "O<sub>2</sub>", correct: false},
             { text: "O<sub>3</sub>", correct: false},
             { text: "O<sub>4</sub>", correct: false},
             { text: "O<sub>2</sub><sup>2-</sup>", correct: true},
         ]
     },
     { //#34
         question: "What is the formula of Phosphate?",
         answers: [
             { text: "PO<sub>3</sub><sup>3-</sup>", correct: false},
             { text: "PO<sub>3</sub><sup>2-</sup>", correct: false},
             { text: "H<sub>3</sub>PO<sub>4</sub>", correct: false},
             { text: "PO<sub>4</sub><sup>3-</sup>", correct: true},
         ]
     },
     { //#35
         question: "What is the formula of Arsenate?",
         answers: [
             { text: "AsO<sub>3</sub><sup>3-</sup>", correct: false},
             { text: "AsO<sub>3</sub>", correct: false},
             { text: "H<sub>3</sub>AsO<sub>4</sub>", correct: false},
             { text: "AsO<sub>4</sub><sup>3-</sup>", correct: true},
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
 