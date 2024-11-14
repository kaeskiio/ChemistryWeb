//Unit 4
const questions = [
    {
        //#1
        question: "When 100.0 mL of a 0.50 M solution of hydrochloric acid, HCl, at 22.0&deg;C reacts with 2.00 grams of sodium hydroxide, NaOH, the temperature increases by 12.5&deg;C. What type of reaction (physical or chemical) takes place? How do you know?",
        answers: [
            { text: "Physical: The temperature change is too small to indicate a chemical reaction, so it must be a physical change.", correct: false },
            { text: "Chemical: The formation of a solution from HCl and NaOH suggests a physical change due to mixing, not a chemical reaction.", correct: false },
            { text: "Chemical: The temperature change indicates that a chemical change has occurred.", correct: true },
            { text: "Physical: The increase in temperature could be due to the dissolution of NaOH in water, indicating a physical change rather than a chemical reaction.", correct: false },
        ]
    }, 
    {
        //#2
        question: "Decide if the material is likely to be a mixture or a pure compound or element, and then decide if the process is a chemical or a physical change. <br> A clear, colorless, crystalline solid is heated. A pale yellow-green gas is given off and a shiny, malleable metal was left behind.",
        answers: [
            { text: "Mixture, Chemical", correct: false },
            { text: "Mixture, Physical", correct: false },
            { text: "Compound, Physical", correct: false },
            { text: "Compound, Chemical", correct: true },
        ]
    }, 
    {
        //#3
        question: "Decide if the material is likely to be a mixture or a pure compound or element, and then decide if the process is a chemical or a physical change. <br> A brown liquid is heated and a colorless, aromatic liquid is produced along with a clear, colorless liquid while a brown liquid is left behind in the container.",
        answers: [
            { text: "Mixture, Chemical", correct: false },
            { text: "Mixture, Physical", correct: true },
            { text: "Compound, Physical", correct: false },
            { text: "Compound, Chemical", correct: false },
        ]
    },    
    {
        //#4
        question: "Decide if the material is likely to be a mixture or a pure compound or element, and then decide if the process is a chemical or a physical change. <br> Adding sugar to tea causes the tea to taste sweeter.",
        answers: [
            { text: "Mixture, Chemical", correct: false },
            { text: "Mixture, Physical", correct: false },
            { text: "Compound, Physical", correct: true },
            { text: "Compound, Chemical", correct: false },
        ]
    }, 
    {
        //#5
        question: "Decide if the material is likely to be a mixture or a pure compound or element, and then decide if the process is a chemical or a physical change. <br> A shiny, dark gray metal and a clear colorless gas combine to form a flaky orange solid.",
        answers: [
            { text: "Mixture, Chemical", correct: true },
            { text: "Mixture, Physical", correct: false },
            { text: "Compound, Physical", correct: false },
            { text: "Compound, Chemical", correct: false },
        ]
    }, 
    {
        //#6
        question: "A student weighs a piece of metal and finds that it is 4.4g. The student then holds this piece of metal with tongs and heats it using the flame of a Bunsen burner. After the final product is cooled, it is weighed and found to have a mass of 5.0g. Which of the following statements related to the experiment is correct?",
        answers: [
            { text: "The mass of the metal decreased due to the physical processes of melting/boiling.", correct: false },
            { text: "The metal increased in temperature only and neither a physical or a chemical change occurred.", correct: false },
            { text: "The metal was only heated and was unable to react with any substance so a physical change occurred.", correct: false },
            { text: "The mass of the metal increased when it went through a chemical change as bonds formed between the metal and another substance.", correct: true },
        ]
    }, 
    {
        //#7
        question: "Which of the following represent physical processes?",
        answers: [
            { text: "Calcium chloride dihydrate (CaCl<sub>2</sub> &times; 2H<sub>2</sub>O) slowly heated in a crucible to become calcium chloride (anhydrous).", correct: false },
            { text: "A rock climber's rope becomes frayed and turns the color of the rocks.", correct: true },
            { text: "A hydrocarbon such as propane (C<sub>3</sub>H<sub>8</sub>) undergoes combustion to power a grill.", correct: false },
            { text: "A dog urinates on an air conditioner coil and the coils become corroded.", correct: false },
        ]
    }, 
    {
        //#8
        question: "A student added methanol and dry sand together and noticed that bubbles emerged from the mixture when stirred until the mixture was completely wet. Do the bubbles produced indicate that a chemical reaction occurred?",
        answers: [
            { text: "Yes, the bubbles indicate that a chemical reaction between methanol and sand occurred, producing a gas.", correct: false },
            { text: "No, the bubbles are caused by the methanol evaporating rapidly upon contact with the sand.", correct: false },
            { text: "Yes, the bubbles indicate that methanol reacted with impurities in the sand, releasing gas as a byproduct.", correct: false },
            { text: "No, there is just air trapped in the sand.", correct: true },
        ]
    }, 
    {
        //#9
        question: "What is the percent yield in the reaction between 46.1 g of cesium and 13.4 g of oxygen if 28.3 g of cesium oxide (Cs<sub>2</sub>O) are collected?",
        answers: [
            { text: "57.9%", correct: true },
            { text: "17.9%", correct: false },
            { text: "9.85%", correct: false },
            { text: "71.3%", correct: false },
        ]
    },
    {
        //#10
        question: "How many grams of lead product would theoretically be produced between 17.0 g potassium iodide, KI, and 25.0 g of lead (II) nitrate, Pb(NO<sub>3</sub>)<sub>2</sub>?",
        answers: [
            { text: "58.3 g", correct: false },
            { text: "34.7 g", correct: false },
            { text: "23.6 g", correct: true },
            { text: "54.1 g", correct: false },
        ]
    },
    {
        //#11
        question: "How much excess reactant is left over when 17.0 g of potassium hydroxide (KOH) reacts with 20.0 g of iron (III) nitrate (Fe(NO<sub>3</sub>)<sub>3</sub>)?",
        answers: [
            { text: "3.1 g", correct: true },
            { text: "17.0 g", correct: false },
            { text: "13.9 g", correct: false },
            { text: "9.2 g", correct: false },
        ]
    },
    {
        //#12
        question: "Medicinal 'ether' is produced when ethyl alcohol is treated with an acid. How many grams of medicinal 'ether' (C<sub>4</sub>H<sub>10</sub>O) would you produce with 50.0 g of ethyl alcohol (C<sub>2</sub>H<sub>6</sub>O) if the percent yield is 85%? <br> 2CH<sub>3</sub>CH<sub>2</sub>OH &rarr; H<sub>2</sub>O + CH<sub>3</sub>CH<sub>2</sub>OCH<sub>2</sub>CH<sub>3</sub>",
        answers: [
            { text: "59.1 g", correct: false },
            { text: "34.2 g", correct: true },
            { text: "89.3 g", correct: false },
            { text: "7.36 g", correct: false },
        ]
    },
    {
        //#13
        question: "A 25.0 mL sample of 0.25 M potassium carbonate (K<sub>2</sub>CO<sub>3</sub>) solution is added to 30.0 mL of a 0.40 M barium nitrate (Ba(NO<sub>3</sub>)<sub>2</sub>) solution. What is the concentration of the excess Barium metal ion after the precipitation reaction is complete?",
        answers: [
            { text: "0.254 M Ba<sup>2+</sup>", correct: false },
            { text: "0.934 M Ba<sup>2+</sup>", correct: false },
            { text: "0.105 M Ba<sup>2+</sup>", correct: true },
            { text: "0.594 M Ba<sup>2+</sup>", correct: false },
        ]
    },
    {
        //#14
        question: "10.00 mL of hydrochloric acid (HCl) were dispensed into an Erlenmeyer flask using a volumetric pipet. 25.00 mL of water were added to the flask. 0.400 M sodium hydroxide (NaOH) solution was poured into a buret and the initial volume was read at 0.51 mL. The NaOH solution was added to the flask in 1 mL increments until a pink color briefly appeared and then disappeared. The NaOH was then added drop by drop until the pink color lingered for 30 seconds. The final volume of the NaOH was read as 18.50 mL. Find the molarity of the HCl solution.",
        answers: [
            { text: "0.424 M HCl", correct: false },
            { text: "0.984 M HCl", correct: false },
            { text: "0.720 M HCl", correct: true },
            { text: "0.129 M HCl", correct: false },
        ]
    },
    {
        //#15
        question: "Potassium hydrogen phthalate, KHP, is a monoprotic acid often used to standardize NaOH solutions. If 0.212 g of KHP are dissolved into 50.00 mL of water and titrated with 35.00 mL of NaOH, what is the molarity of NaOH. <br>Molar mass of KHP = 204.22 g/mol.",
        answers: [
            { text: "0.0297 M NaOH", correct: true },
            { text: "0.0891 M NaOH", correct: false },
            { text: "0.912 M NaOH", correct: false },
            { text: "0.0541 M NaOH", correct: false },
        ]
    },
    {
        //#16
        question: "25.00 mL of sulfuric acid (H<sub>2</sub>SO<sub>4</sub>) were titrated with 46.78 mL of 0.30 M NaOH according to the following reaction. Calculate the molarity of the sulfuric acid: <br><br>H<sub>2</sub>SO<sub>4 (aq)</sub>  + 2 NaOH<sub> (aq)</sub> &rarr; Na<sub>2</sub>SO<sub>4 (aq)</sub> + 2 H<sub>2</sub>O<sub> (l)</sub>",
        answers: [
            { text: "0.72 M H<sub>2</sub>SO<sub>4</sub>", correct: false },
            { text: "0.98 M H<sub>2</sub>SO<sub>4</sub>", correct: false },
            { text: "0.28 M H<sub>2</sub>SO<sub>4</sub>", correct: true },
            { text: "0.56 M H<sub>2</sub>SO<sub>4</sub>", correct: false },
        ]
    },
    {
        //#17
        question: "If the percentage composition of the elements in urea are 19.999% C, 6.713% H, 46.646% N, and 26.641% O. Find the empirical/molecular formula.",
        answers: [
            { text: "C<sub>2</sub>H<sub>4</sub>N<sub>2</sub>O", correct: false },
            { text: "CH<sub>2</sub>N<sub>2</sub>O", correct: false },
            { text: "CH<sub>4</sub>N<sub>2</sub>O", correct: true },
            { text: "C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O", correct: false },
        ]
    },
    {
        //#18
        question: "An aqueous solution was made by dissolving 0.543 g of an unknown, monoprotic acid into 25.00 mL of water in an Erlenmeyer flask. After an acid/base indicator was added, 41.21 mL of 0.150 M NaOH was used to reach the end point. Find the molar mass of the acid.",
        answers: [
            { text: "90.1 g/mol", correct: false },
            { text: "74.1 g/mol", correct: false },
            { text: "122.12 g/mol", correct: false },
            { text: "87.9 g/mol", correct: true },
        ]
    },
    {
        //#19
        question: "Complete the reaction between nitrous acid, HNO<sub>2</sub> and the hydrogen sulfide ion, HS<sup>-</sup>, then identify the conjugate acid.",
        answers: [
            { text: "H<sub>2</sub>S", correct: true },
            { text: "HNO<sub>2</sub>", correct: false },
            { text: "HS<sup>-</sup>", correct: false },
            { text: "NO<sub>2</sub><sup>-</sup>", correct: false },
        ]
    },
    {
        //#20
        question: "Complete the reaction between nitrous acid, HNO<sub>2</sub> and the hydrogen sulfide ion, HS<sup>-</sup>, then identify the conjugate base.",
        answers: [
            { text: "H<sub>2</sub>S", correct: false },
            { text: "HNO<sub>2</sub>", correct: false },
            { text: "HS<sup>-</sup>", correct: false },
            { text: "NO<sub>2</sub><sup>-</sup>", correct: true },
        ]
    },
    {
        //#21
        question: "Complete the reaction between nitrous acid, HNO<sub>2</sub> and the hydrogen sulfide ion, HS<sup>-</sup>, then identify the acid.",
        answers: [
            { text: "H<sub>2</sub>S", correct: false },
            { text: "HNO<sub>2</sub>", correct: true },
            { text: "HS<sup>-</sup>", correct: false },
            { text: "NO<sub>2</sub><sup>-</sup>", correct: false },
        ]
    },
    {
        //#22
        question: "Complete the reaction between nitrous acid, HNO<sub>2</sub> and the hydrogen sulfide ion, HS<sup>-</sup>, then identify the base.",
        answers: [
            { text: "H<sub>2</sub>S", correct: false },
            { text: "HNO<sub>2</sub>", correct: false },
            { text: "HS<sup>-</sup>", correct: true },
            { text: "NO<sub>2</sub><sup>-</sup>", correct: false },
        ]
    },
    {
        //#23
        question: "Caffeine, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub> dissolves in water. Consider the equation for this reaction. Then determine the conjugate base.",
        answers: [
            { text: "H<sub>2</sub>O", correct: false },
            { text: "OH<sup>-</sup>", correct: true },
            { text: "C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>", correct: false },
            { text: "HC<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub><sup>+</sup>", correct: false },
        ]
    },
    {
        //#24
        question: "Caffeine, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, acts as a base when it is dissolved in water. Consider the equation for this reaction. Then determine the conjugate acid.",
        answers: [
            { text: "H<sub>2</sub>O", correct: false },
            { text: "OH<sup>-</sup>", correct: false },
            { text: "C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>", correct: false },
            { text: "HC<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub><sup>+</sup>", correct: true },
        ]
    },
    {
        //#25
        question: "Caffeine, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, acts as a base when it is dissolved in water. Consider the equation for this reaction. Then determine the base.",
        answers: [
            { text: "H<sub>2</sub>O", correct: false },
            { text: "OH<sup>-</sup>", correct: false },
            { text: "C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>", correct: true },
            { text: "HC<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub><sup>+</sup>", correct: false },
        ]
    },
    {
        //#26
        question: "Caffeine, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, acts as a base when it is dissolved in water. Consider the equation for this reaction. Then determine the acid.",
        answers: [
            { text: "H<sub>2</sub>O", correct: true },
            { text: "OH<sup>-</sup>", correct: false },
            { text: "C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>", correct: false },
            { text: "HC<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub><sup>+</sup>", correct: false },
        ]
    },
    {
        //#27
        question: "Consider the reaction that takes place between ammonia, NH<sub>3</sub>, and acetic acid, HCH<sub>3</sub>COO. Then determine the base.",
        answers: [
            { text: "NH<sub>3</sub>", correct: true },
            { text: "HCH<sub>3</sub>COO", correct: false },
            { text: "NH<sub>4</sub><sup>+</sup>", correct: false },
            { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: false },
        ]
    },
    {
        //#28
        question: "Consider the reaction that takes place between ammonia, NH<sub>3</sub>, and acetic acid, HCH<sub>3</sub>COO. Then determine the acid.",
        answers: [
            { text: "NH<sub>3</sub>", correct: false },
            { text: "HCH<sub>3</sub>COO", correct: true },
            { text: "NH<sub>4</sub><sup>+</sup>", correct: false },
            { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: false },
        ]
    },
    {
        //#29
        question: "Consider the reaction that takes place between ammonia, NH<sub>3</sub>, and acetic acid, HCH<sub>3</sub>COO. Then determine the conjugate acid.",
        answers: [
            { text: "NH<sub>3</sub>", correct: false },
            { text: "HCH<sub>3</sub>COO", correct: false },
            { text: "NH<sub>4</sub><sup>+</sup>", correct: true },
            { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: false },
        ]
    },
    {
        //#30
        question: "Consider the reaction that takes place between ammonia, NH<sub>3</sub>, and acetic acid, HCH<sub>3</sub>COO. Then determine the conjugate base.",
        answers: [
            { text: "NH<sub>3</sub>", correct: false },
            { text: "HCH<sub>3</sub>COO", correct: false },
            { text: "NH<sub>4</sub><sup>+</sup>", correct: false },
            { text: "CH<sub>3</sub>COO<sup>-</sup>", correct: true },
        ]
    },
    {
        //#31
        question: "Identify which of the following reactions is an acid-base reaction.",
        answers: [
            { text: "3Cu<sub> (s)</sub> + 2Al<sup>3+</sup><sub> (aq)</sub> &rarr; 2Al<sub> (s)</sub> + 3Cu<sup>2+</sup><sub> (aq)</sub>", correct: false },
            { text: "2H<sub>2 (g)</sub> + O<sub>2 (g)</sub> &rarr; 2H<sub>2</sub>O<sub> (l)</sub>", correct: false },
            { text: "NH<sub>3 (g)</sub> + H<sub>2</sub>O<sub> (l)</sub> &rarr; NH<sub>4</sub><sup>+</sup><sub> (aq)</sub> + OH<sup>-</sup><sub>(aq)</sub>", correct: true },
            { text: "Cu<sup>2+</sup><sub> (aq)</sub> + OH<sup>-</sup><sub> (aq)</sub> &rarr; Cu(OH)<sub>2 (s)</sub>", correct: false },
        ]
    },
    {
        //#32
        question: "Hydrazoic acid, HN<sub>3</sub> is a weak acid. What is the conjugate base of hydrazoic acid?",
        answers: [
            { text: "N<sub>3</sub>", correct: false },
            { text: "N<sub>3</sub><sup>-</sup>", correct: true },
            { text: "H<sub>2</sub>N<sub>3</sub>", correct: false },
            { text: "H<sub>2</sub>N<sub>3</sub><sup>+</sup>", correct: false },
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