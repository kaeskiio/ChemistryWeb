//Unit 8
const questions = [
    {
        //#1
        question: "What is the pH of a solution of 0.325 M potassium hydroxide, KOH?",
        answers: [
            { text: "0.488", correct: false },
            { text: "7.639", correct: false },
            { text: "13.512", correct: true },
            { text: "2.920", correct: false },
        ]
    },
    {
        //#2
        question: "A solution was made using NaOH, the pH of the solution was found to be 11.452. What is the concentration of the hydroxide ion, OH<sup>-</sup> , in this solution?",
        answers: [
            { text: "2.548", correct: false },
            { text: "2.83 x 10<sup>-3</sup>", correct: true },
            { text: "3.53 x 10<sup>-10</sup>", correct: false },
            { text: "5.726", correct: false },
        ]
    },
    {
        //#3
        question: "You heated a sample of pure water and measured that the pH was 6.624. What is the concentration of the hydronium ion, H<sub>3</sub>O<sup>+</sup>, at this temperature?",
        answers: [
            { text: "2.38 x 10 M<sup>-7</sup>", correct: true },
            { text: "6.624", correct: false },
            { text: "3.312", correct: false },
            { text: "1.19 x 10 M<sup>-7</sup>", correct: false },
        ]
    },   
    {
        //#4
        question: "Find the pH of a mixture of 10.0 ml of 0.00100 M solution of potassium hydroxide, KOH and 10.0 ml of distilled water.",
        answers: [
            { text: "3.301", correct: false },
            { text: "10.699", correct: true },
            { text: "2 x 10<sup>-11</sup>", correct: false },
            { text: "4 x 10<sup>-4</sup>", correct: false },
        ]
    },
    {
        //#5
        question: "Calculate the pH of 0.00200 M solution of perchloric acid, HClO<sub>4</sub>.",
        answers: [
            { text: "5 x 10<sup>-12</sup>", correct: false },
            { text: "11.301", correct: false },
            { text: "2.699", correct: true },
            { text: "2 x 10<sup>-3</sup>", correct: false },
        ]
    },
    {
        //#6
        question: "Which of these aqueous solutions is a strong electrolyte:",
        answers: [
            { text: "H<sub>2</sub>CO<sub>3</sub>", correct: false },
            { text: "HClO<sub>2</sub>", correct: false },
            { text: "HNO<sub>3</sub>", correct: true },
            { text: "HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>", correct: false },
        ]
    },
    {
        //#7
        question: "Which statement about the pH of a 0.005 M solution of HCl is correct?",
        answers: [
            { text: "pH = 14 - (- log 0.005)", correct: false },
            { text: "pH = log - 0.005", correct: false },
            { text: "pH = - log 0.005", correct: true },
            { text: "pOH = -log 0.005", correct: false },
        ]
    },
    {
        //#8
        question: "HNO<sub>2</sub> + H<sub>2</sub>O &harr; H<sub>3</sub>O<sup>+</sup> + NO<sub>2</sub><sup>-</sup> <br> K<sub>a</sub> = 4.6 x 10<sup>-4</sup>",
        answers: [
            { text: "H<sub>3</sub>O<sup>+</sup>", correct: false },
            { text: "HNO<sub>2</sub>", correct: true },
            { text: "NO<sub>2</sub><sup>-</sup>", correct: false },
            { text: "H<sub>3</sub>O<sup>+</sup> and NO<sub>2</sub><sup>-</sup>", correct: false },
        ]
    },
    {
        //#9
        question: "What is the pH of a 0.785 M solution of formic acid, HCHO<sub>2</sub>? The K<sub>a</sub> of HCHO<sub>2</sub> is 1.77 x 10<sup>-4</sup>.",
        answers: [
            { text: "12.068", correct: false },
            { text: "1.932", correct: true },
            { text: "1.77 x 10<sup>-9</sup>", correct: false },
            { text: "0.0117 M", correct: false },
        ]
    },
    {
        //#10
        question: "A 0.150 M solution of a weak acid has a pH of 2.51. What is the pK<sub>a</sub> of the acid?",
        answers: [
            { text: "6.47 x 10<sup>-5</sup>", correct: false },
            { text: "2.51", correct: false },
            { text: "11.49", correct: false },
            { text: "4.189", correct: true },
        ]
    },
    {
        //#11
        question: "What is the pH of a solution composed of 500.0 mL of 0.250 M sodium hydroxide, NaOH, and 400.0 mL of 0.200 M hydrochloric acid, HCl?",
        answers: [
            { text: "12.70", correct: true },
            { text: "0.08 M", correct: false },
            { text: "1.30", correct: false },
            { text: "0.045 mol", correct: false },
        ]
    },
    {
        //#12
        question: "Calculate the pH of a solution that is composed of 90.0 mL of 0.345 M sodium hydroxide, NaOH, and 50.0 mL of 0.123 M lactic acid, HC<sub>3</sub>H<sub>5</sub>O<sub>3</sub>. (K<sub>a</sub> of lactic acid = 1.38 x 10<sup>-4</sup>)",
        answers: [
            { text: "0.75", correct: false },
            { text: "0.18 M", correct: false },
            { text: "13.25", correct: true },
            { text: "0.025 mol", correct: false },
        ]
    },
    {
        //#13
        question: "The pKa of hydrozoic acid, HN<sub>3</sub>, is 4.72. It reacts with water according to the reaction shown below: <br> NH<sub>3 (aq)</sub> + H<sub>2</sub>O<sub>(l)</sub> &harr; N<sub>3</sub><sup>-</sup><sub>(aq)</sub> + H<sub>3</sub>O<sup>+</sup><sub>(aq)</sub> <br> Calculate the pH of a solution formed from 100.0 mL of 0.900 M HN<sub>3</sub> and 50.0 mL of 0.300 M NaOH.",
        answers: [
            { text: "4.02", correct: true },
            { text: "0.07", correct: false },
            { text: "4.72", correct: false },
            { text: "3.92", correct: false },
        ]
    },
    {
        //#14
        question: "Which of the following acids would be the most acidic? HBrO, HBrO<sub>2</sub> or HBrO<sub>3</sub>?",
        answers: [
            { text: "HBrO", correct: false },
            { text: "HBrO<sub>2</sub>", correct: false },
            { text: "HBrO<sub>3</sub>", correct: true },
        ]
    },
    {
        //#15
        question: "The group 16 acids have the following pKa values: H<sub>2</sub>O (14.0), H<sub>2</sub>S (7.0), H<sub>2</sub>Se (3.9), and H<sub>2</sub>Te (2.6). Which of the following does not contribute to the pattern of increasing acidity down this group?",
        answers: [
            { text: "Increasing bond length.", correct: false },
            { text: "Decreasing bond strength.", correct: false },
            { text: "Increasing dissociation.", correct: false },
            { text: "Decreasing mass.", correct: true },
        ]
    },
    {
        //#16
        question: "A new indicator was found, at pH values less than 7.5 the indicator is blue and at values greater than 9.5 it is grey. What is the approximate pKa for this indicator?",
        answers: [
            { text: "9.5", correct: false },
            { text: "8.5", correct: true },
            { text: "4.5", correct: false },
            { text: "6.5", correct: false },
        ]
    },
    {
        //#17
        question: "A new indicator was found, at pH values less than 7.5 the indicator is blue and at values greater than 9.5 it is grey. At a pH of 5.0, which species is dominant? HIn or In<sup>-</sup>?",
        answers: [
            { text: "HIn", correct: true },
            { text: "In<sup>-</sup>", correct: false },
        ]
    },
    {
        //#18
        question: "A new indicator was found, at pH values less than 7.5 the indicator is blue and at values greater than 9.5 it is grey. At a pH of 10.0 which species is dominant? HIn or In<sup>-</sup>?",
        answers: [
            { text: "HIn", correct: false },
            { text: "In<sup>-</sup>", correct: true },
            { text: "Neither", correct: false },
        ]
    },
    {
        //#19
        question: "100. mL of 1.0 M HCl + 50.0 mL of 1.0 NaCl <br> Will this combination result in a buffer solution?",
        answers: [
            { text: "No", correct: true },
            { text: "Yes", correct: false },
        ]
    },
    {
        //#20
        question: "100. mL of 1.0 M HNO<sub>2</sub> + 100. mL of 2.0 M NaNO<sub>2</sub> <br> Will this combination result in a buffer solution?",
        answers: [
            { text: "No", correct: false },
            { text: "Yes", correct: true },
        ]
    },
    {
        //#21
        question: "100. mL of 1.0 M CH<sub>3</sub>NH<sub>2</sub> + 100. mL of 0.50 M CH<sub>3</sub>NH<sub>3</sub><sup>+</sup> <br> Will this combination result in a buffer solution?",
        answers: [
            { text: "No", correct: false },
            { text: "Yes", correct: true },
        ]
    },
    {
        //#22
        question: "100. mL of 1.0 M HF + 50.0 mL of 1.0 M HClO <br> Will this combination result in a buffer solution?",
        answers: [
            { text: "No", correct: true },
            { text: "Yes", correct: false },
        ]
    }, 
    {
        //#23
        question: "Calculate the pH of a buffer solution for a weak acid, HA, if the concentration of HA is 0.137 M and the concentration of A<sup>-</sup> is 0.972 M. The K<sub>a</sub> for this acid is 1.51 x 10<sup>-5</sup>.",
        answers: [
            { text: "0.851", correct: false },
            { text: "4.821", correct: false },
            { text: "5.672", correct: true },
            { text: "8.328", correct: false },
        ]
    },
    {
        //#24
        question: "A buffer was made using 0.10 moles of A<sup>-</sup> and 0.01 moles of HA. If the pKa is 5.71, what is the pH of the buffer?",
        answers: [
            { text: "3.71", correct: false },
            { text: "4.71", correct: false },
            { text: "5.71", correct: false },
            { text: "6.71", correct: true },
        ]
    },
    {
        //#25
        question: "What is the [F<sup>-</sup>] concentration in a buffer solution with a pH of 3.05? The solution contains 2.00 M of HF, HF has a pK<sub>a</sub> of 3.20.",
        answers: [
            { text: "6.25", correct: false },
            { text: "0.15", correct: false },
            { text: "1.42", correct: true },
            { text: "4.62", correct: false },
        ]
    },
    {
        //#26
        question: "A student made a buffer using 0.750 moles of HCN and 0.250 moles of NaCN dissolved into 2.00L of solution. What is the pH of the buffer?",
        answers: [
            { text: "8.73", correct: true },
            { text: "9.21", correct: false },
            { text: "0.48", correct: false },
            { text: "9.69", correct: false },
        ]
    },
    {
        //#27
        question: "A student made a buffer using 0.750 moles of HCN and 0.250 moles of NaCN dissolved into 2.00L of solution. Does this buffer have a higher capacity for additions of acid or additions of base?",
        answers: [
            { text: "Acid", correct: false },
            { text: "Base", correct: true },
        ]
    }, 
];

function redirectToNewPage() {
    window.location.href = 'apprac.html'; // Change 'newpage.html' to the desired URL
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