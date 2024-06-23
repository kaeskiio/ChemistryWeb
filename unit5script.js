//Unit 5
const questions = [
    {
        //#1
        question: "The rate of disappearance of ozone is -0.0034 M/s under a certain set of conditions. What is the rate of appearance of O<sub>2</sub> under the same conditions?<br> 2O<sub>3 (g)</sub> &rarr; 3O<sub>2 (g)</sub> ",
        answers: [
            { text: "0.0074 M/s", correct: false },
            { text: "0.0087 M/s", correct: false },
            { text: "0.0051 M/s", correct: true },
            { text: "0.0032 M/s", correct: false },
        ]
    }, 
    {
        //#2
        question: "The rate of disappearance of ozone is -0.0034 M/s under a certain set of conditions. What is the rate of the reaction?<br> 2O<sub>3 (g)</sub> &rarr; 3O<sub>2 (g)</sub> ",
        answers: [
            { text: "0.0025 M/s", correct: false },
            { text: "0.0712 M/s", correct: false },
            { text: "0.0041 M/s", correct: false },
            { text: "0.0017 M/s", correct: true },
        ]
    }, 
    {
        //#3
        question: "Given the reaction for the production of ammonia, NH<sub>3</sub>, below. If ammonia is produced at a certain time, t, at a rate of 0.397 M/s, what is the rate for each of the reactants?: <br> N<sub>2 (g)</sub> + 3H<sub>2 (g)</sub> &rarr; 2 NH<sub>3 (g)</sub>",
        answers: [
            { text: "0.596 M/s", correct: false },
            { text: "-0.596 M/s", correct: true },
            { text: "-0.943 M/s", correct: false },
            { text: "0.943 M/s", correct: false },
        ]
    },    
    {
        //#4
        question: "A first order reaction has 1/16 of the original amount left after 500 seconds. What is the half-life of the reactant in this reaction?",
        answers: [
            { text: "31.75 seconds", correct: false },
            { text: "250 seconds", correct: false },
            { text: "125 seconds", correct: true },
            { text: "62.5 seconds", correct: false },
        ]
    }, 
    {
        //#5
        question: "If 93.75% of a radioactive isotope of technetium-99 remains after 24 hours, what is the half-life?",
        answers: [
            { text: "258 hours", correct: true },
            { text: "516 hours", correct: false },
            { text: "129 hours", correct: false },
            { text: "924 hours", correct: false },
        ]
    }, 
    {
        //#6
        question: "At 750K, the k value is 1.8 x 10<sup>-4</sup> s<sup>-</sup>. If the initial concentration is 0.15 M, how much will remain after 55 seconds?",
        answers: [
            { text: "0.789 M", correct: false },
            { text: "0.583 M", correct: false },
            { text: "0.379 M", correct: false },
            { text: "0.149 M", correct: true },
        ]
    }, 
    {
        //#7
        question: "Given the following elementary steps, what is the overall reaction?<br>2HI<sub>(g)</sub> &rarr; H<sub>2</sub>I<sub>2 (g)</sub><br> H<sub>2</sub>I<sub>2 (g)</sub> &rarr; H<sub>2 (g)</sub> + I<sub>2 (g)</sub>",
        answers: [
            { text: "2HI<sub> (g)</sub> + H<sub>2</sub>I<sub>2 (g)</sub> &rarr; H<sub>2</sub>I<sub>2 (g)</sub> + H<sub>2 (g)</sub> + I<sub>2 (g)</sub>", correct: false },
            { text: "2HI<sub> (g)</sub> &rarr; H<sub>2 (g)</sub> + I<sub>2 (g)</sub>", correct: true },
            { text: "HI<sub> (g)</sub> &rarr; 2H<sub>2 (g)</sub> + 2I<sub>2 (g)</sub>", correct: false },
            { text: "HI<sub> (g)</sub> &rarr; H<sub>2 (g)</sub> + I<sub>2 (g)</sub>", correct: false },
        ]
    }, 
    {
        //#8
        question: "Given the following elementary steps, what is the rate law for elementary step 1?<br>2HI<sub>(g)</sub> &rarr; H<sub>2</sub>I<sub>2 (g)</sub><br> H<sub>2</sub>I<sub>2 (g)</sub> &rarr; H<sub>2 (g)</sub> + I<sub>2 (g)</sub>",
        answers: [
            { text: "Rate = k[HI]<sup>2</sup>[H<sub>2</sub>I<sub>2]", correct: false },
            { text: "Rate = k[HI]", correct: false },
            { text: "Rate = [HI]<sup>2</sup>", correct: false },
            { text: "Rate = k[HI]<sup>2</sup>", correct: true },
        ]
    }, 
    {
        //#9
        question: "Gaseous cyclobutane, C<sub>4</sub>H<sub>8</sub>, breaks into two gaseous ethylene, C<sub>2</sub>H<sub>4</sub>, molecules via a single-step unimolecular reaction. Write the balanced equation for this reaction.",
        answers: [
            { text: "C<sub>4</sub>H<sub>8 (g)</sub> &rarr; 2C<sub>2</sub>H<sub>4 (g)</sub>", correct: true },
            { text: "2C<sub>4</sub>H<sub>8 (g)</sub> &rarr; 2C<sub>2</sub>H<sub>4 (g)</sub>", correct: false },
            { text: "2C<sub>4</sub>H<sub>8 (g)</sub> &rarr; C<sub>2</sub>H<sub>4 (g)</sub>", correct: false },
            { text: "3C<sub>4</sub>H<sub>8 (g)</sub> &rarr; 2C<sub>2</sub>H<sub>4 (g)</sub>", correct: false },
        ]
    },
    {
        //#10
        question: "Gaseous cyclobutane, C<sub>4</sub>H<sub>8</sub>, breaks into two gaseous ethylene, C<sub>2</sub>H<sub>4</sub>, molecules via a single-step unimolecular reaction. Write the rate law for the reaction based on the stoichiometry of the elementary step.",
        answers: [
            { text: "Rate = [C<sub>4</sub>H<sub>8</sub>]", correct: false },
            { text: "Rate = k[C<sub>4</sub>H<sub>8</sub>]<sup>2</sup>", correct: false },
            { text: "Rate = k[C<sub>4</sub>H<sub>8</sub>]", correct: true },
            { text: "Rate = k[C<sub>4</sub>H<sub>8</sub>][C<sub>2</sub>H<sub>4]", correct: false },
        ]
    },
    {
        //#11
        question: "The reaction: 2 ChAp<sub>(g)</sub> &rarr; Ch<sub>2 (g)</sub> + Ap<sub>2 (g)</sub> occurs in a single elementary step. Write the rate law for this reaction.",
        answers: [
            { text: "Rate = k[ChAp]<sup>2</sup>", correct: true },
            { text: "Rate = k[ChAp]", correct: false },
            { text: "Rate = [ChAp]", correct: false },
            { text: "Rate = k[Ch<sub>2</sub>][Ap<sub>2</sub>]", correct: false },
        ]
    },
    {
        //#12
        question: "Write the rate law for a reaction that takes place for this elementary reaction: <br> O<sub>3</sub> + NO &rarr; NO<sub>2</sub> + O<sub>2</sub>",
        answers: [
            { text: "Rate = k[O<sub>2</sub>][NO<sub>2</sub>]", correct: false },
            { text: "Rate = k[O<sub>3</sub>][NO]", correct: true },
            { text: "Rate = [O<sub>3</sub>][NO]", correct: false },
            { text: "Rate = k[O<sub>3</sub>]", correct: false },
        ]
    },
    {
        //#13
        question: "A scientist calculated that 10% of the collisions that occur for a specific reaction are in the correct orientation for a reaction to occur, but they found experimentally that the actual number of reactions that occurred was much lower than their calculation. Which factor did they forget to account for?",
        answers: [
            { text: "They forgot to account for the presence of a catalyst which could increase the reaction rate.", correct: false },
            { text: "They forgot to account for the intermolecular forces between reactant particles which hinder collisions.", correct: false },
            { text: "Not all particles have Energy > E<sub>activation</sub>.", correct: true },
            { text: "They forgot to account for the volume of the reaction container, affecting the collision frequency.", correct: false },
        ]
    },
    {
        //#14
        question: "Given the reaction: 2NO<sub>2 (g)</sub> &rarr; N<sub>2</sub>O<sub>4 (g)</sub> the rate of reaction was slow with 2.00 moles of NO<sub>2</sub> in a 2.00 L container at 1 atm and 285K. Suggest a different way to increase the rate for this reaction, and explain, with reference to collision theory, how it will alter the rate of reaction.",
        answers: [
            { text: "Decrease the volume to reduce collision frequency.", correct: false },
            { text: "Lower the concentration of NO<sub>2</sub> to reduce collision rate.", correct: false },
            { text: "Increase the temperature to increase collision frequency and energy.", correct: true },
            { text: "Reduce the pressure to decrease collision frequency.", correct: false },
        ]
    },
    {
        //#15
        question: "Methane (CH<sub>4</sub>), the gas used for Bunsen burners, doesn't react with oxygen in the air until a striker/flame is brought near to the Bunsen burner. Explain the role of the striker/flame.",
        answers: [
            { text: "It supplies energy to break the activation energy threshold.", correct: true },
            { text: "It adds more oxygen to the reaction.", correct: false },
            { text: "It increases the concentration of methane.", correct: false },
            { text: "It lowers the activation energy needed for the reaction.", correct: false },
        ]
    },
    {
        //#16
        question: "Methane (CH<sub>4</sub>), the gas used for Bunsen burners, doesn't react with oxygen in the air until a striker/flame is brought near to the Bunsen burner. What is the energy used for in the reaction?",
        answers: [
            { text: "Increasing the concentration of CH<sub>4</sub>", correct: false },
            { text: "Producing more CH<sub>4</sub> and O<sub>2</sub>", correct: false },
            { text: "Breaking bonds in CH<sub>4</sub> and O<sub>2</sub>", correct: true },
            { text: "Combining CH<sub>4</sub> and O<sub>2</sub> directly", correct: false },
        ]
    },
    {
        //#17
        question: "The reaction: 2 AB<sub>(g)</sub> &rarr; A<sub>2 (g)</sub> + B<sub>2 (g)</sub> occurs in a single elementary step. Write the rate law for this reaction.",
        answers: [
            { text: "Rate = k[AB]", correct: false },
            { text: "Rate = [AB]<sup>2</sup>", correct: false },
            { text: "Rate = k[AB]<sup>2</sup>", correct: true },
            { text: "Rate = k[A<sub>2</sub>][B<sub>2</sub>]", correct: false },
        ]
    },
    {
        //#18
        question: "The reaction: 2 XY<sub>(g)</sub> &rarr; X<sub>2 (g)</sub> + Y<sub>2 (g)</sub> occurs in a single elementary step. Write the rate law for this reaction.",
        answers: [
            { text: "Rate = k[XY]", correct: false },
            { text: "Rate = [XY]<sup>2</sup>", correct: false },
            { text: "Rate = k[X<sub>2</sub>][Y<sub>2</sub>]", correct: false },
            { text: "Rate = k[XY]<sup>2</sup>", correct: true },
        ]
    },
    {
        //#19
        question: "The reaction: A<sub>2 (g)</sub> + B<sub>2 (g)</sub> &rarr; 2 AB<sub>(g)</sub> occurs in a single elementary step. Write the rate law for this reaction.",
        answers: [
            { text: "Rate = k[A<sub>2</sub>][B<sub>2</sub>]", correct: true },
            { text: "Rate = k[A<sub>2</sub> + B<sub>2</sub>]", correct: false },
            { text: "Rate = k[AB]", correct: false },
            { text: "Rate = [A<sub>2</sub>][B<sub>2</sub>]", correct: false },
        ]
    },
    {
        //#20
        question: "The reaction: 2 NO<sub>(g)</sub> + O<sub>2 (g)</sub> &rarr; 2 NO<sub>2 (g)</sub> occurs in a single elementary step. Write the rate law for this reaction.",
        answers: [
            { text: "Rate = k[NO<sub>2</sub>]", correct: false },
            { text: "Rate = [NO]<sup>2</sup>[O<sub>2</sub>]", correct: false },
            { text: "Rate = k[NO][O<sub>2</sub>]", correct: false },
            { text: "Rate = k[NO]<sup>2</sup>[O<sub>2</sub>]", correct: true },
        ]
    },
    {
        //#21
        question: "The reaction: Cl<sub>2 (g)</sub> + H<sub>2 (g)</sub> &rarr; 2 HCl<sub>(g)</sub> occurs in a single elementary step. Write the rate law for this reaction.",
        answers: [
            { text: "Rate = k[Cl][H]", correct: false },
            { text: "Rate = k[Cl<sub>2</sub>][H<sub>2</sub>]", correct: true },
            { text: "Rate = [Cl<sub>2</sub>][H<sub>2</sub>]", correct: false },
            { text: "Rate = k[HCl]", correct: false },
        ]
    },
    {
        //#22
        question: "2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub><br>The rate law for the decomposition of hydrogen peroxide (shown above) is determined to be rate = k[H<sub>2</sub>O<sub>2</sub>]. Identify the slow step in the proposed mechanism shown below:<br>Step 1: H<sub>2</sub>O<sub>2</sub> &rarr; 2OH<br>Step 2: H<sub>2</sub>O<sub>2</sub> + OH &rarr; H<sub>2</sub>O + HO<sub>2</sub><br>Step 3: HO<sub>2</sub> + OH &rarr; H<sub>2</sub>O + O<sub>2</sub>",
        answers: [
            { text: "Step 1", correct: true },
            { text: "Step 2", correct: false },
            { text: "Step 3", correct: false },
        ]
    },
    {
        //#23
        question: "Use the reaction mechanism below to write the rate law for the catalyzed decomposition of ozone (O<sub>3</sub>).<br>Step 1: O<sub>3</sub> + NO &rarr; NO<sub>2</sub> + O<sub>2</sub> <i>slow</i> <br>Step 2: NO<sub>2</sub> + O &rarr; NO + O<sub>2</sub> <i>fast</i>",
        answers: [
            { text: "Rate = k[O<sub>3</sub>][NO][O][NO<sub>2</sub>]", correct: false },
            { text: "Rate = k[O<sub>3</sub>][NO]", correct: true },
            { text: "Rate = k[O<sub>3</sub>]", correct: false },
            { text: "Rate = [O<sub>3</sub>][NO]", correct: false },
        ]
    },
    {
        //#24
        question: "The rate law for the decomposition of dinitrogen pentaoxide (shown below) is experimentally determined to be rate = k[N<sub>2</sub>O<sub>5</sub>]. A student claims that this reaction occurs in a one-step mechanism. Do you agree or disagree with this student's claim? Justify your answer.<br> 2N<sub>2</sub>O<sub>5</sub> &rarr; 4NO<sub>2</sub> + O<sub>2</sub>",
        answers: [
            { text: "Agree, because the rate law matches the stoichiometry of the reaction", correct: false },
            { text: "Disagree, because the reaction produces more moles of products than reactants", correct: false },
            { text: "Agree, because N<sub>2</sub>O<sub>5</sub> decomposes directly to products", correct: false },
            { text: "Disagree, the rate law if this were a single elementary step would be Rate = k[N<sub>2</sub>O<sub>5</sub>]<sup>2</sup>", correct: true },
        ]
    },
    {
        //#25
        question: "Given the following two-step mechanism, identify the intermediate: <br>Step 1) NO<sub>2 (g)</sub> + Cl<sub>2 (g)</sub>  &rarr; ClNO<sub>2 (g)</sub> + Cl<sub>(g)</sub> <br>Step 2) NO<sub>2 (g)</sub> + Cl<sub>(g)</sub> &rarr; ClNO<sub>2 (g)</sub>",
        answers: [
            { text: "NO<sub>2</sub>", correct: false },
            { text: "ClNO<sub>2</sub>", correct: false },
            { text: "Cl", correct: true },
            { text: "Cl<sub>2</sub>", correct: false },
        ]
    },
    {
        //#26
        question: "Given the following two-step mechanism, what is the overall reaction?: <br>Step 1) NO<sub>2 (g)</sub> + Cl<sub>2 (g)</sub>  &rarr; ClNO<sub>2 (g)</sub> + Cl<sub>(g)</sub> <br>Step 2) NO<sub>2 (g)</sub> + Cl<sub>(g)</sub> &rarr; ClNO<sub>2 (g)</sub>",
        answers: [
            { text: "2NO<sub>2</sub> + Cl<sub>2</sub> &rarr; 2ClNO<sub>2</sub>", correct: true },
            { text: "NO<sub>2</sub> + Cl<sub>2</sub>  &rarr; ClNO<sub>2</sub>", correct: false },
            { text: "NO<sub>2</sub> + Cl<sub>2</sub> &rarr; 2ClNO<sub>2</sub>", correct: false },
            { text: "2NO<sub>2</sub> + Cl<sub>2</sub> &rarr; ClNO<sub>2</sub>", correct: false },
        ]
    },
    {
        //#27
        question: "Given the following two-step mechanism, if the first step is the slow step, what is the predicted rate law?: <br>Step 1) NO<sub>2 (g)</sub> + Cl<sub>2 (g)</sub>  &rarr; ClNO<sub>2 (g)</sub> + Cl<sub>(g)</sub> <br>Step 2) NO<sub>2 (g)</sub> + Cl<sub>(g)</sub> &rarr; ClNO<sub>2 (g)</sub>",
        answers: [
            { text: "Rate = k[NO<sub>2</sub>][Cl<sub>2</sub>]", correct: true },
            { text: "Rate = k[NO<sub>2</sub>]", correct: false },
            { text: "Rate = [NO<sub>2</sub>][Cl<sub>2</sub>]", correct: false },
            { text: "Rate = k[NO<sub>2</sub>][Cl]", correct: false },
        ]
    },
    {
        //#28
        question: "Given the following two-step mechanism, if the second step is the slow step, what is the predicted rate law?: <br>Step 1) NO<sub>2 (g)</sub> + Cl<sub>2 (g)</sub>  &rarr; ClNO<sub>2 (g)</sub> + Cl<sub>(g)</sub> <br>Step 2) NO<sub>2 (g)</sub> + Cl<sub>(g)</sub> &rarr; ClNO<sub>2 (g)</sub>",
        answers: [
            { text: "Rate = k[NO<sub>2</sub>][Cl<sub>2</sub>]", correct: false },
            { text: "Rate = k[NO<sub>2</sub>][Cl]", correct: true },
            { text: "Rate = k[NO<sub>2</sub>]", correct: false },
            { text: "Rate = [NO<sub>2</sub>][Cl]", correct: false },
        ]
    },
    {
        //#29
        question: "Which of the following are true statements with regard to catalysts?",
        answers: [
            { text: "A catalyst is formed in the first elementary step of a reaction and consumed by a later step.", correct: false },
            { text: "Catalysts can speed up chemical reaction by providing the reactants with more energy.", correct: false },
            { text: "Catalysts are regenerated within a chemical reaction.", correct: true },
            { text: "Catalysts are completely consumed in the reaction.", correct: false },
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